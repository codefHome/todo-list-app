const { addTodoListService } = require("../services/addTodoService")

exports.addTodoListController= async(req,res)=>{
    await addTodoListService({...req.body}).then(result=>{
        res.status(200).json({msg:'Added Successfully',success:true},)
    }).catch(err=>{
        res.status(500).json({success:false,msg: err.code === 11000 ? 'Title duplicated' : err})
        console.log(err)
    })
}






