// create todo

const Todo = require("../models/todo");


  /*
     POST
     creating a todo item 
     params: title, description
  */
exports.createTodo = async (req, res) => {

  try {
    const newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
    });
    console.log(newTodo);
    const todo = await newTodo.save();
    return res.status(200).json({
      status: "success",
      data: todo,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};


  /*
      GET
      getting all todo items
  */
exports.todos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({"date":-1});
    return res.status(200).json({
        status: "success",
        data: todos,
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
