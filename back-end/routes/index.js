var express = require("express");


const { deleteTodoListController } = require("../src/controller/deleteTodo");
const { updateTodoMiddleware } = require("../src/middlewares/updateTodoMiddleware");
const { updateTodoListController } = require("../src/controller/updateTodo");
const { addTodoMiddleware } = require("../src/middlewares/addTodoMiddleware");
const { addTodoListController } = require("../src/controller/addTodo");

const { fetchAllTodoController, getTodoByIdController } = require("../src/controller/fetchAllTodoController");



var router = express.Router();

router.post("/addTodo", addTodoMiddleware, addTodoListController);
router.delete("/deleteTodo/:_id", deleteTodoListController);
router.patch("/updateTodo/:title", updateTodoMiddleware,updateTodoListController);
router.get("/fetchTodo",fetchAllTodoController);
router.get("/getTodoById/:_id",getTodoByIdController);


module.exports = router;
