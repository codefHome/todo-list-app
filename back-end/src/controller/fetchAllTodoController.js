const { fetchAllTodo, getTodoById } = require("../services/fetchAllTodo")

exports.fetchAllTodoController = async(req,res) => {
    try{
        const result = await fetchAllTodo();
        res.status(200).json(result ?? [])
    }catch(err){
        res.status(500).json(err)
    }
}
exports.getTodoByIdController = async (req, res) => {
    const { _id } = req.params;
    try {
      const result = await getTodoById(_id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  };