import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Statetype, TodoDatatype } from '../../types/types';


const initialState: Statetype = {
 isEdit:false,
 id:'',
 singleData:{} as TodoDatatype,
 open:false
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setIsEdit(state, action: PayloadAction<boolean>) {
      state.isEdit = action.payload;
      
    },
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
      
    },
  setSingleData(state,action:PayloadAction<TodoDatatype>){
    state.singleData=action.payload
  },
  setOpen(state,action:PayloadAction<boolean>){
    state.open=action.payload
  }
  },
});

export const {
setIsEdit,
setId,
setSingleData,
setOpen
} = todoSlice.actions;

export default todoSlice.reducer;
