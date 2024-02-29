const Todo = require("../models/todoModel")


exports.addTodoListService= async(data)=>{
   try{
      await Todo.insertMany({...data})
      return({msg:'Added Successfully',success:true})
   }catch(err){
      return({success:false,msg: err})
   }
   
}






