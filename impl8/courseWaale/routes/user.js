const {Router} = require("express");
const userRouter = Router();
const {userModel} = require("../db")
const bcrypt = require("bcrypt");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");


userRouter.post("/login",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const response = await userModel.findOne({
        email
    })
    if(!response){
        res.json({
            message : "User does not exist"
        })
        return;
    }
    console.log(response);
    const passwordMatch = await bcrypt.compare(req.body.password,response.password);
    if(passwordMatch){
        const token = jwt.sign({
            email
        },JWT_SECRET);
        res.json({
            token
        });
    } else {
        res.json({
            message : "Incorrect Password"
        })
    }
});
userRouter.post("/signup",async (req,res)=>{

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
        await userModel.create({
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
});
userRouter.post("/purchases",(req,res)=>{
    res.json({
        message : "Purchase Endpoint"
    })
});

module.exports = {
    userRouter : userRouter
}