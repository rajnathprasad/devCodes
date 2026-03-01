const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/login",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
})
adminRouter.post("/signup",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
})
adminRouter.post("/createCourse",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
})
adminRouter.post("/deleteCourse",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
})
adminRouter.post("/addCourseContent",(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
})

module.exports = {
    adminRouter : adminRouter
}