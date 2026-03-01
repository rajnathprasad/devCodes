const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.post("login",(req,res)=>{
    
});
app.post("signup",(req,res)=>{

});
app.post("purchaseCourse",(req,res)=>{

});
app.post("viewAllCourse",(req,res)=>{

});
app.get("viewPurchasedCourse",(req,res)=>{

});

app.listen(3000);