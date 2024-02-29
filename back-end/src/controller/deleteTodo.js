const { deleteTodoListService } = require("../services/deleteTodoService")

exports.deleteTodoListController=async(req,res) =>{
    const{_id}=req.params
    await deleteTodoListService(_id).then(result =>{
        res.status(204).json(result)
    }).catch(err => {
        res.status(500).json(err)
    })
}









