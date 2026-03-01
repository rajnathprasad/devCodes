const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin")
const {MONGO_URI, JWT_SECRET,PORT}= require("./config")

const app = express();

app.use(express.json());

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/course",courseRouter);


async function main(){
    try{
        await mongoose.connect(MONGO_URI);
        app.listen(PORT);
        console.log(`Listening on Port : ${PORT}`)
    }
    catch(err){
        console.log(err);
    }
}

main();