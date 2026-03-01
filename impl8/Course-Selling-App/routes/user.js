const {Router} = require("express");
const userRouter = Router();

userRouter.post("/login",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
});
userRouter.post("/signup",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
});
userRouter.post("/purchases",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
});

module.exports = {
    userRouter : userRouter
}