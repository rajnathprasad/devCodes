const express = require("express");
const app = express();
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const {auth, JWT_SECRET} = require("./auth")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {z} = require("zod");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI).then(()=>
    console.log("Database Connected")
).catch((err)=>{
    console.log(err)
});

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.post("/signup",async function(req,res){

    const requiredBody = z.object({
        name : z.string().min(2).max(100),
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

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password,10);
    await UserModel.create({
        name : name,
        email : email,
        password : hashedPassword
    })

    res.json({
        message : "You are Signed up"
    })
})
app.post("/signin",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email
    });
    if(!response){
        res.status(403).json({
            message : "User does not exist"
        })
        return;
    }
    console.log(response);
    const passwordMatch = bcrypt.compare(password,response.password)
    if(passwordMatch){
        const token = jwt.sign({
            id : response._id.toString()
        }, JWT_SECRET);
        res.json({
            token
        });
    }else{
        res.status(403).json({
            message : "Incorrect Credentials"
        })
    }


})
app.post("/todos",auth,async (req,res)=>{
    const userId = req.userId
    const title = req.body.title;
    TodoModel.create({
        title,
        userId
    })
    res.json({
        userId
    })
})
app.get("/todos",auth,async (req,res)=>{
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId : userId
    });
    res.json({
        todos
    })
})

app.listen(3000);