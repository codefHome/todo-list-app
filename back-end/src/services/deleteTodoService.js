
const Todo = require("../models/todoModel")

exports.deleteTodoListService=async(_id) =>{
    await Todo.deleteOne({_id}).then(result =>{
       return result
    }).catch(err => {
        return err
    })
}









