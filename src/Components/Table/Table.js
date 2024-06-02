function Index ({user, setUser, deleted, search, changeUser, check, checkChecked, page, setPage}) {

    // Stayled
    const checkboxStyle  = {
        transform: 'scale(2)'
    }

    function btnPlus (index) {
        user[index].count = user[index].count + 1
        setUser([...user])
    }
    
    function btnMinus (index) {
        user[index].count = user[index].count - 1
        setUser([...user])
    }

    function clickNext () {
        setPage(prev=>prev + 1)
    }

    
    function clickPrev () {

        if(page <= 1) {
            setPage(1)
        }else{
            setPage(prev=>prev - 1)
        }
    }

    return(
        <div>
            <table className='table text-center'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>Count</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.filter(item=>{
                            if(item===''){
                                return item
                            }else if (item.firstName.toUpperCase().includes(search.toUpperCase())) {
                                return item
                            }else if (item.lastName.toUpperCase().includes(search.toUpperCase())) {
                                return item
                            }else if (item.userName.toUpperCase().includes(search.toUpperCase())) {
                                return item
                            }    
                        
                        }).filter(
                            item => item.completed === check
                        ).filter(
                            (item,index)=>index >=(page-1)*10 && index < page * 10
                        ).map((item,index)=><tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.userName}</td>
                            <td>
                                <button onClick={()=>btnMinus(item.id)}>-</button>
                                {item.count}
                                <button onClick={()=>btnPlus(item.id)}>+</button>
                            </td>
                            <td>
                                <input 
                                    style={checkboxStyle}
                                    type="checkbox" 
                                    checked={item.completed}
                                    value={item.firstName}
                                    onChange={checkChecked}/>
                            </td>
                            <td>
                                <button className='btn btn-success mx-2' onClick={()=>changeUser(item)}>change user</button>
                                <button className='btn btn-danger' onClick={()=>deleted(index)}>delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table> 
            
            <div className='row'>
                <div className='col-md-6 offset-5'>
                    <button className='btn btn-info mx-3' onClick={clickPrev}>{'<<'}Prev</button>
                    <button className='btn btn-info' onClick={clickNext}>Next{'>>'}</button>  
                </div>
            </div>
        </div>
    )
}

export default Index