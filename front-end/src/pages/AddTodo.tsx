import { Button, Typography } from "@mui/material";
import useAddTodoForm from "../hooks/useAddTodoForm";
import { InputFeild } from "../components/InputField";
import { useAppSelector } from "../store/hooks";

const AddTodo = () => {
  const { onSubmit, handleSubmit, errors, control } = useAddTodoForm();
  const{isEdit} =useAppSelector(state => state.todoList)
  return (
   
    <div className={`flex justify-center items-center w-full ${isEdit ? 'h-auto' : 'h-[90vh]'} `} >
 <div className="flex flex-col bg-orange-200 w-fit  h-fit p-4 gap-4 shadow-lg">
      <Typography className="text-2xl self-center text-blue-500 bold text-center">
      {isEdit ? 'Update Todo list' :'Add your todo list here'}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <InputFeild
            name="title"
            label="Title"
            placeHolder="title"
            error={errors.title}
            helperText={errors.title?.message}
            control={control}
          
          />
          <InputFeild
            name="creator"
            label="Creator"
            placeHolder="creator"
            error={errors.creator}
            helperText={errors.creator?.message}
            control={control}
          />
          <InputFeild
            name="description"
            label="Description"
            placeHolder="description"
            error={errors.description}
            helperText={errors.description?.message}
            control={control}
          />

          <Button variant="contained" type="submit">  {isEdit ? 'Update todo' :'Add todo'}</Button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddTodo;
