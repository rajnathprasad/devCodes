const express = require("express");
const app = express();
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const {auth, JWT_SECRET} = require("./auth")
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rajnathprasad:0J9AgMidYivCaatD@cluster0.bgmp2ex.mongodb.net/todo1?appName=Cluster0");

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.post("/signup",async function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    await UserModel.create({
        name : name,
        email : email,
        password : password
    })

    res.json({
        message : "You are Signed up"
    })
})
app.post("/signin",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email,
        password
    })
    console.log(user);
    if(user){
        const token = jwt.sign({
            id : user._id.toString()
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