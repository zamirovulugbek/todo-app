import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { useForm } from "react-hook-form"
import SelectUser from '../SelectUser/index'


function Index ({modal, toggleModal, save, onChange, loading}) {

    const { register, handleSubmit } = useForm();

    return(
        <div>
            <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalHeader>
                        Modal
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit(save)} id='form-id'>
                            <input {...register('title')} type="text"  placeholder='Title' className='form-control' />
                            <SelectUser onChange={onChange} name='user'/>
                            <textarea {...register('body')} placeholder='Text' className='form-control' />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-success' form='form-id' disabled={loading}>save</button>
                        <button className='btn btn-danger' onClick={toggleModal}>remove</button>
                    </ModalFooter>
                </Modal>
        </div>
    )
}

export default Index