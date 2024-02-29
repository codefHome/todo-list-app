import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddTodoCardType } from "../types/types";
const AddTodoCard = ({
  title,
  handleEdit,
  handleDelete,
  creator,
  description,
  id
}: AddTodoCardType) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-500 p-3 pt-0 w-full lg:w-[300px] ">
      <div className="flex justify-between bg-orange-400 p-2 items-center">
        <Typography>Title: {title}</Typography>
        <span className="flex">
          <IconButton sx={{ color: "blue" }} onClick={() => handleEdit(id)}>
            <EditIcon />
          </IconButton>
          <IconButton sx={{ color: "red" }} onClick={() =>handleDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </span>
      </div>

      <Typography>Cretor: {creator}</Typography>
      <Typography
        sx={{
          wordBreak: "break-all",
          whiteSpace: "wrap",
        }}
      >
        Description: {description}
      </Typography>
    </div>
  );
};

export default AddTodoCard;
