const Todo = require("../models/todoModel")
exports.updateTodoListService= async(id,data)=>{
    await Todo.findOneAndUpdate(id, data,  { new: true }).then(result=>{
       return({...req.body})
    }).catch(err=>{
       return err
    })
}






