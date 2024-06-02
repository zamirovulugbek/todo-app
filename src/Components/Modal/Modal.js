import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
 
function Index ({save, isOpen, toggle}) {

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>
                Add user
            </ModalHeader>
            <ModalBody>
                <form onSubmit={save} id='form-id'>
                    <input
                        type="text"
                        className='form-control' 
                        placeholder='First Name...' />
                    <input 
                        type="text" 
                        className='form-control my-3' 
                        placeholder='Last Name...'/>
                    <input 
                        type="text" 
                        className='form-control' 
                        placeholder='User Name...'/>
                </form>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-success' form='form-id'>add</button>
                <button className='btn btn-danger' onClick={toggle}>clear</button>
            </ModalFooter>
        </Modal>
    )
}
export default Index