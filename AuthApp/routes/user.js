const express = require("express");
const router = express.Router();
const User = require("../models/user")

const { login, signup } = require("../controllers/auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

//testing protected routes fro single middleware
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Test",
  });
});

//protected routes
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Admin",
  });
});

router.get("/getEmail", auth,async (req,res)=>{
    try{
        const id = req.user.id;
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            user:user,
            message: "Welcome to Email rout",
          });
    } catch(error){
        res.status(500).json({
            success: false,
            error:error.message,
            message: "Email route not working",
          });
    }
});
module.exports = router;