import {useEffect, useState} from 'react'
import { doGet } from '../../service';


function Index ({onChange}) {

    const [user, setUser] = useState([]);
    const [currentUSer, setCurrentUser] = useState('')

    async function getUser() {
        const res = await doGet('/users')
        setUser(res)
    }

    useEffect(()=>{
        getUser()
    }, [])

    function selectUserId (event) {
        let userId = event.target.value
        let id = userId === ''? '' : parseInt(userId)
        setCurrentUser(id)
        if(onChange){
            onChange(id)
        }
        
    }

    return(
        <div>
             <select className='form-control' value={currentUSer} onChange={selectUserId}>
                        <option value="">
                            All
                        </option>
                        {
                            user.map(item=><option key={item.id} value={item.id}>
                                {item.name}
                            </option>)
                        }
                    </select>   
        </div>
    )
}

export default Index