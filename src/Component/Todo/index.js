import {useState, useEffect} from 'react'
import { doGet } from '../../service'

function Index ({item}) {

    const style = {
        transform: 'scale(2)'
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-1'>
                    <input type="checkbox" id={'checkbox'+item.id} checked={item.completed}  style={style} />
                </div>
                <div className='col-md-5'>
                <h3><label htmlFor={'checkbox'+item.id}>{item.title}</label></h3>
                </div>
            </div>    
        </div>
        
    )
}

export default Index