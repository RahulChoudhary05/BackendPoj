const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

//post middleware
fileSchema.post("save", async function (doc) {
  try {
    console.log("DOC => ", doc);

    //transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    //sent mail
    let info = await transporter.sendMail({
      from: "Rahul Choudhary | Developer",
      to: doc.email,
      subject: "New file uploaded on Cloudinary 😎",
      html: `<h2> Hello ${doc.name}</h2> <p> New File Uploaded <p> File URL : ${doc.imageUrl} ${doc.videoUrl}`,
    })
    console.log("INFO => ", info);
  } catch (error) {
    console.log(error);
  }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;