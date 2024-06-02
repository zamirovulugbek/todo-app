import {useState, useEffect} from 'react'
import {doGet, doPost} from '../../service'
import SelectUser from '../../Component/SelectUser/index' 
import Modal from '../../Component/Modal/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Index ({history}) {

    function filter(userId) {
        return data.filter(item=>(item.userId == userId) || userId === '')
    }

    const postsStyle = {
        height: '300px'
    }
    
    const styleCardHeader = {
        height: '100px'
    }

    const [posts, setPosts] = useState([])
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        getPosts()

    }, [])

    async function getPosts () {
        const resPost = await doGet('/posts')
        setPosts([...resPost])
        setData([...resPost])
    }

    async function savePosts (data) {
        setLoading(false)
        const res = await doPost('/posts', data)
        setData(prev=>{
            prev.unshift(res)
            return [...prev]
        })
        setPosts(prev=>{
            prev.unshift(res)
            return [...prev]
        })
    }

    function openOnePost (id) {
        history.push('/posts/'+id)
    }

    function onChangeUser(userId) {
        const res = filter(userId)
        setPosts(res)
    }   

    function toggleModal() {
        setModal(p=>!p)
    }

    function save (data) {
        setLoading(true)
        data.user = user
        setModal(false)
        savePosts(data)
        toast.success("Ma'lumot qo'shildi")
    }

    function changeUser(id) {
        setUser(id)
    }

    return(
        <div className='row'>

            <div className='col-md-12'>
            <h1 className='text-center'>Posts</h1>
            <button className='btn btn-dark float-right' onClick={toggleModal}> add </button>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                   <SelectUser onChange={onChangeUser} />
                </div>
            </div>
                
                {
                    posts.map((item,index)=><div className='col-md-3' key={item.id}>
                        <div className='card my-3' style={postsStyle} onClick={()=>openOnePost(item.id)}>
                            <div className='card-header bg-dark text-white' style={styleCardHeader}>
                                {item.title}
                            </div>
                            <div className='card-body'>
                                {item.body}
                            </div>
                        </div>
                    </div>)
                }

                <Modal
                    loading={loading}
                    onChange={changeUser}
                    modal={modal}
                    toggleModal={toggleModal}
                    save={save}
                    />
                
                <ToastContainer />

        </div>
    )
}   
export default Index