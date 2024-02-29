
const Todo = require("../models/todoModel");

exports.addTodoMiddleware = async (req, res, next) => {
  const { title } = req.body;

  try {
    const exitstingTodo = await Todo.findOne({ title });
    if (exitstingTodo) {
      return res.status(200).json({ success: false, msg: 'Title already exists' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, msg: 'Internal Server Error' });
  }

  next();
};