const File = require("../models/File");

//LocalFileUpload -> handler function
exports.localFileUpload = async (req,res)=>{
    try{
        //fetch the file
        const file = req.files.file;
        console.log("Result Fetch the file => ",file);
    } catch(error){

    }
}