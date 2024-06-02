function Index ({check, toggle, onChecked, onSearch, page}) {

    // Stayled

    const checkboxStyle  = {
        transform: 'scale(2)'
    }

    return(
        <div className='row mt-4'>
            <div className='col-md-3'>
                <input type="search" onChange={onSearch} className='form-control' placeholder='Search...' />
            </div>
            <div className='col-md-2'>
                <input type="checkbox" style={checkboxStyle} checked={check} onChange={onChecked} />
            </div>
            <div className='col-md-7'>
                <button className='btn btn-primary' onClick={toggle}>Add</button>
                <button className='btn btn-info offset-8' disabled>Page: {page}</button>
            </div>
      </div>
    )
}

export default Index