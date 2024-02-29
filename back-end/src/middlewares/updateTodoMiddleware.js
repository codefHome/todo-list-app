const Todo = require("../models/todoModel");


exports.updateTodoMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
    const checkTodo = await Todo.findOne({ id });
    if (!checkTodo) {
      return res.status(200).json({ success: false, msg: 'There is no such todo list' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, msg: 'Internal Server Error' });
  }

  next();
};