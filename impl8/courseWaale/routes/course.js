const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/purchase",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
});
courseRouter.get("/preview",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
});

module.exports = {
    courseRouter : courseRouter
}