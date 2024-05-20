const File = require("../models/File");

//localFileUpload -> handler function
exports.localFileUpload = async (req, res) => {
  try {
    //fetch the file
    const file = req.files.file;
    console.log("Result Fetch the file => ", file);

    //create path to store where file need to be store in server, __dirname -> current workind path provide
    let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`; // server path, store in server
    console.log("Path => ", path);

    //add path to move function
    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on server");
    console.log(error);
  }
};
