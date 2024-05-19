// import the model
const Todo = require("../models/Todo");

//define route handle {update the data}
exports.deleteTodo = async (req, res) => {
  try {
    //extract todo item based on id and delete the data
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id)

    //send a json response with a success flag
    res.status(200).json({
      sucess: true,
      data: todo,
      message: "Delete Successufully!",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
        sucess:false,
        error:err.message,
        message:"Server Error",
    });
  }
};
