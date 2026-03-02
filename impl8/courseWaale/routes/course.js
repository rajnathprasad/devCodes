const {Router} = require("express");
const courseRouter = Router();
const {purchaseModel, courseModel} = require("../db");
const {userAuthMiddleware} = require("../middlewares/user");

courseRouter.post("/purchase",userAuthMiddleware,async (req,res)=>{
    const courseId =req.body.courseId;
    const userId = req.userId;

    const purchased = await purchaseModel.create({
        userId,
        courseId
    })
    if(!purchased){
        return res.json({
            message : "Purchase Failed"
        })
    }
    return res.json({
        message : "Course Purchased"
    })
});

courseRouter.get("/preview",async (req,res)=>{
    const courses = await courseModel.find({});
    return res.json({
        courses
    })
});

module.exports = {
    courseRouter : courseRouter
}