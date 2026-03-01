const {Router} = require("express");
const {adminModel,courseModel} = require("../db");
const adminRouter = Router();
const {z} = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN_SECRET} = require("../config");
const {adminAuthMiddleware} = require("../middlewares/admin");

adminRouter.post("/login",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const response = await adminModel.findOne({
        email
    })
    if(!response){
        res.json({
            message : "Admin does not exist"
        })
        return;
    }
    console.log(response);
    const passwordMatch = await bcrypt.compare(req.body.password,response.password);
    if(passwordMatch){
        const token = jwt.sign({
            id : response._id
        },JWT_ADMIN_SECRET);
        res.json({
            token
        });
    } else {
        res.json({
            message : "Incorrect Password"
        })
    }
})

adminRouter.post("/signup",async (req,res)=>{
    const requiredBody = z.object({
        firstName : z.string().min(2).max(100),
        lastName : z.string(),
        email : z.email(),
        password : z.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
    "Password must be 8+ chars, include upper, lower, number & special character"
  )
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message : "Incorrect Format",
            error : parsedDataWithSuccess.error
        })
        return;
    }

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if(password===confirmPassword){
        const hashedPassword = await bcrypt.hash(password,10);
        await adminModel.create({
            email,
            firstName,
            lastName,
            password : hashedPassword
        })
        res.json({
            message : "You are signed up"
        })
    }
    else{
        res.json({
            message : "Create password and confirm password are not same."
        })
    }
})

adminRouter.post("/course",adminAuthMiddleware,async (req,res)=>{
    const creatorId = req.adminId;
    const {title, description, price, imageURL} = req.body;
    const course = await courseModel.create({
        title, description, price, imageURL, creatorId
    });
    res.json({
        message : "Course Created",
        courseId : course._id
    })
})

adminRouter.put("/course",adminAuthMiddleware,async (req,res)=>{
    const creatorId = req.adminId;
    const {title, description, price, imageURL, courseId} = req.body;
    const course = await courseModel.findById(courseId);
    if(course.creatorId!=creatorId){
        return res.json({
            message : "This course doesnt belong to this admin"
        })
    }
    const newCourse = await courseModel.updateOne({
        _id : courseId
    },{
        title, description, price, imageURL
    });
    res.json({
        message : "Course Updated",
        courseId : newCourse._id
    })
})

adminRouter.get("/course",adminAuthMiddleware,async (req,res)=>{
    const adminId = req.adminId;
    const adminCourses = await courseModel.find({
        creatorId : adminId
    });
    res.json({
        courses : adminCourses
    })
})

adminRouter.delete("/course",adminAuthMiddleware,(req,res)=>{
    res.json({
        message : "Signup Endpoint"
    })
})


module.exports = {
    adminRouter : adminRouter
}