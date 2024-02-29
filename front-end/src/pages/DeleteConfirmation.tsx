
import { DeleteConfirmProps } from "../types/types";
import { Button, Modal, Typography } from "@mui/material";


const DeleteModal = ({
  open,
  handleClose,
  handleDelete,
  id,

}: DeleteConfirmProps) => {
  return (
    <div>
    
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            border: "2px solid #000",
            padding: 4,
          }}
        >
          <div className="flex flex-col h-fit gap-4 bg-blue-500 w-[200px] p-4">
          <Typography sx={{
                wordBreak:'break-all',
                textAlign:'center',
                color:'Black',
                fontWeight:700
            }}>Are you sure? </Typography>
            <Typography sx={{
                wordBreak:'break-all'
            }}>You are deleting todo with id:  {id} </Typography>
            <span className="flex gap-4">
              <Button variant="contained" onClick={handleClose}>
                Cance
              </Button>
              <Button  sx={{ bgcolor:'red'}} variant="contained" onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
