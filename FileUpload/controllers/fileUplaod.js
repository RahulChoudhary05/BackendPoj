const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localFileUpload -> handler function
exports.localFileUpload = async (req, res) => {
  try {
    //fetch the file
    const file = req.files.file;
    console.log("Result Fetch the file => ", file);

    //create path to store where file need to be store in server, __dirname -> current workind path provide
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`; // server path, store in server
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

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileTocloudinary(file, folder) {
  const options = { folder };
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

//image upload
exports.imageUpload = async (req, res) => {
  try {
    //data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log("ImageFile => ", file);

    //validation
    const supportedTypes = ["jpg", "png", "jpeg "];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("File type => ", fileType);
    
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        successs: false,
        message: "File format not supported",
      });
    }

    //file format supported
    const response = await uploadFileTocloudinary(file, "FileUpload");
    console.log(response);

    //entery save in db
    const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl: response.secure_url,
    })

    res.json({
      successs: true,
      imageUrl: response.secure_url,
      message: "Image successfully uploaderd",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
        successs:false,
        message:"Something went wrong",
    })
  }
};
