import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useForm } from 'react-hook-form'

function Index ({isOpen, toggle, oneUser, changeOneUser}) {

    const { register, handleSubmit } = useForm()

    return(
        <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>
                    Change user
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={changeOneUser} id='form-id'>
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='First Name..' 
                            defaultValue={oneUser.firstName} />
                        <input 
                            type="text" 
                            className='form-control my-3'
                            placeholder='Last Name..'
                            defaultValue={oneUser.lastName} />
                        <input 
                            type="text"  
                            className='form-control' 
                            placeholder='User Name..' 
                            defaultValue={oneUser.userName} />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-success' form='form-id'>changed</button>
                    <button className='btn btn-danger' onClick={toggle}>exit</button>
                </ModalFooter>
            </Modal>
    )
}

export default Index