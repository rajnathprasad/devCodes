const express = require("express");
const app = express();

//middlewares
app.use(express.json());


//routes
app.post("/signUp",function(req,res){
    
})
app.post("/signIp",function(req,res){

})

app.listen(3000);