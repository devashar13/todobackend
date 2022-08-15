// create todo

const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
