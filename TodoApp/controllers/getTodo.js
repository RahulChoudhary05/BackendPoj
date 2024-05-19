// import the model
const Todo = require("../models/Todo");

//define route handle{fetch all data}
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo item from DB
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
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

//fetch the data using id
exports.getTodoById = async (req, res) => {
  try {
    //extract todo item based on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    //data for give id is not find
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found",
      });
    }

    // finally data found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id}, Finally Data found successfully `,
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
