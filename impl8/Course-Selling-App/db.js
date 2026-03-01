const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const usersSchema = new Schema({
    email : {type : String, unique : true },
    password : String,
    firstName : String,
    lastName : String
} )
const courseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageURL : String,
    creatorId : ObjectId
} )
const adminSchema = new Schema({
    email : {type : String, unique : true },
    password : String,
    firstName : String,
    lastName : String
} )
const purchaseSchema = new Schema({
    courseId : String,
    userId : String,
} )

const userModel = mongoose.model("users",usersSchema);
const courseModel = mongoose.model("courses",courseSchema);
const adminModel = mongoose.model("admins",adminSchema);
const purchaseModel = mongoose.model("purchases",purchaseSchema);

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}