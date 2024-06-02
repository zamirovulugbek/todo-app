import {useState, useEffect} from 'react'
import {doGet} from '../../service'
import SelectUser from '../../Component/SelectUser/index'
import Todo from '../../Component/Todo/index'

function Index () {

    const [todos, setTodos] = useState([])
    const [data, setData] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    const [complete, setComplete] = useState(false)
    const [isFiltiring, setIsFiltiring] = useState(false)
    const [page, setPage] = useState(1)

    function filter(userId, completed) {
        console.log(data);
        return data.filter(item => 
            (item.userId == userId || !userId) && 
            (item.completed === completed || !isFiltiring)
            ).filter((item, index)=>index >= (page-1)*10 && index < page*10)
        
    }

    const style = {
        transform: 'scale(2)'
    }

    async function getTodos() {

        const res = await doGet('/todos')
        setTodos(res.filter((item,index)=>index>=0 && index<10))
        setData(res)
        
    }


    useEffect(()=>{

        getTodos()

    }, [])

    useEffect(()=>{
        const res = filter(currentUser, complete, page)
        setTodos(res)
    }, [page])

    function selectUserId(userId) {
        const res = filter(userId, complete, page)
        setTodos(res)
        console.log(todos);
        setCurrentUser(userId)
    }

    function handleCheked (event) {
        let checked = event.target.checked
        setComplete(checked)
        let res = filter(currentUser, checked, page)
        setTodos(res)
        setIsFiltiring(true)
    }

    function reset() {
        setTodos(data)
        setCurrentUser('')
        setComplete(false)
        setIsFiltiring(false)
    }

    function onPrev() {
        if(page <= 1){
            setPage(1)
        }else{
            setPage(p=>p-1)
        }
    }



    return(
        <div>
             <div className='row'>
                <div className='col-md-3 mt-5'>
                    <button className='btn btn-danger btn-block' onClick={reset}>restet</button>
                </div>
                <div className='col-md-3'>
                   <SelectUser onChange={selectUserId}/>
                </div> 
                <div className='col-md-3'>
                    <label className='mt-5'>
                        Complete
                        <input  className='m-3' type="checkbox" onChange={handleCheked} checked={complete} style={style}/>
                    </label>
                </div> 
            </div>

            <div className='row'>
                <h1 className='text-center'>Todos</h1>
                {
                    todos.map((item,index)=><Todo 
                        key={item.id}
                        item={item}
                    />)
                }
            </div>

            <div className='row my-4'>
                <div className='col-md-2'>
                    <button className='btn btn-dark' onClick={onPrev}>{'<<'}prev</button>
                </div>
                <div className='col-md-1'>
                    <h1>{page}</h1>                    
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-dark' onClick={()=>setPage(p=>p+1)}>next{'>>'}</button>
                </div>
            </div>
        </div>
    )
}   
export default Index