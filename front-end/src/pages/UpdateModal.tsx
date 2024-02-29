
import AddTodo from './AddTodo';
import { ModalProps } from '../types/types';
import { Modal } from '@mui/material';




const  UpdateModal=({open,handleClose}:ModalProps) =>{


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={{
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 width: 'auto',
 border: '2px solid #000',
 padding: 4,
        }}>
          <div className='flex h-fit'>
          <AddTodo/>
          </div>
      
        </div>
      </Modal>
    </div>
  );
}

export default UpdateModal