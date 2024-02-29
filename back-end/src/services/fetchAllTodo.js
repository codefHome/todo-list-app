const Todo = require("../models/todoModel")

exports.fetchAllTodo= async() => {
    try{
const result= await Todo.find()
return result
    }catch(err){
        return err
    }
    
}
exports.getTodoById = async (_id) => {
    try{
        const result =  await Todo.findOne({_id})
        return result;
      }catch (err) {
       return err
      }
  };