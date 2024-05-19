// import the model
const Todo = require("../models/Todo");

//define route handle {update the data}
exports.updateTodo = async (req, res) => {
  try {
    //extract todo item based on id and update the data
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    //send a json response with a success flag
    res.status(200).json({
      sucess: true,
      data: todo,
      message: "Updated Successufully!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
