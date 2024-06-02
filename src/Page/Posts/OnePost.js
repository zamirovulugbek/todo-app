import {useEffect, useState} from 'react'
import { doGet } from '../../service'

function OnePost ({history, match, location}) {

    const [post, setPost] = useState('')
    const [user, setUser] = useState('')

    useEffect(()=>{

        getOnePost(match.params.id)

    }, [])

    async function getOnePost(id) {
       const onePost =  await doGet('/posts/'+id)
       setPost(onePost)
       const postUser = await doGet('/users/'+ onePost.userId)
       setUser(postUser)
    }
    
    return(
        <div className='row'>
            <h1>One post</h1>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        {user.name}
                    </div>
                    <div className='card-body'>
                        {user.phone}
                    </div>
                </div>
            </div>
            <div className='col-md-9'>
                <div className='card'>
                    <div className='card-header'>
                        {post.id + '. '+post.body}
                    </div>
                    <div className='card-body'>
                        {post.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnePost