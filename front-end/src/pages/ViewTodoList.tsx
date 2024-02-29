import { useEffect, useState } from "react";
import {
  useDeleteTodoMutation,
  useLazyFetchAllTodoListQuery,
  useLazyFetchTodoByIdQuery,
} from "../api/todoAPI";
import AddTodoCard from "../components/AddTodoCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  setIsEdit,
  setId,
  setSingleData,
  setOpen,
} from "../store/slices/todoSlice";
import { TodoDatatype } from "../types/types";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteConfirmation";

const ViewTodoList = () => {
  const [trigger, data] = useLazyFetchAllTodoListQuery();
  const [triggerSingleTodo] = useLazyFetchTodoByIdQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const dispatch = useAppDispatch();
  const [_id, se_tId] = useState<string>("");
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { open } = useAppSelector((state) => state.todoList);

  useEffect(() => {
    trigger({});
  }, [trigger]);
  const handleClose = () => {
    dispatch(setOpen(false));
    dispatch(setIsEdit(false));
  };

  const handleEdit = async (_id: string) => {
    dispatch(setId(_id));
    dispatch(setOpen(true));
    dispatch(setIsEdit(true));

    const result = await triggerSingleTodo(_id);

    dispatch(setSingleData(result?.data));
  };
  const handleDeleteModal = (id: string) => {
    setOpenDelete(true);
    dispatch(setId(id));
    se_tId(id);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };
  const handleDelete = async(id: string) => {
   
    deleteTodo(id);
    await trigger({});
    setOpenDelete(false);
    
  };
  return (
    <div className="relative">
      <div className="flex flex-wrap w-full self-center h-fit  rounded-lg p-3  gap-4">
        {data.isLoading && <div>Loading ...</div>}
        {!data.isSuccess && <div>No record found</div>}
        {data?.data?.map((todo: TodoDatatype) => (
          <AddTodoCard
            title={todo.title}
            creator={todo.creator}
            description={todo.description}
            handleDelete={() => handleDeleteModal(todo._id)}
            handleEdit={() => handleEdit(todo._id)}
            id={todo?._id}
          />
        ))}
      </div>
      <UpdateModal open={open} handleClose={handleClose} />
      <DeleteModal
        id={_id}
        handleClose={handleCancel}
        handleDelete={() => handleDelete(_id)}
        open={openDelete}
      />
    </div>
  );
};

export default ViewTodoList;
