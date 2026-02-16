const express = require("express")
const app = express()

//routes
app.get("/multiply",function(req,res){
    res.send(Number(req.query.a)*Number(req.query.b))
})

app.get("/divide",function(req,res){
    res.send(Number(req.query.a)/Number(req.query.b))
})

app.get("/add",function(req,res){
    res.send(Number(req.query.a)+Number(req.query.b))
})

app.get("/subtract",function(req,res){
    res.send(Number(req.query.a)-Number(req.query.b))
})

app.listen(3000)