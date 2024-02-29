const {  updateTodoListService } = require("../services/updateTodoService");

exports.updateTodoListController= async(req,res)=>{
const update = req.body;
const filter= {id: req.params.id}
    await updateTodoListService(filter,update).then(result=>{
        res.status(200).json({...req.body})
    }).catch(err=>{
        res.status(500).json(err)
    })
}






