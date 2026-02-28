const express = require("express")
const app = express()

let requestCount=0;

function requestIncreaser(req,res,next){
    requestCount+=1;
    console.log(`Total number of requests : ${requestCount}`);
    console.log(`URL : ${req.url}`)
    console.log(`METHOD : ${req.method}`)
    console.log(`Timestamp : ${Date.now()}`)

    next();
}

function adder(req,res){
    res.json({
        result :
        parseInt(req.query.a)+parseInt(req.query.b)
    })
}
function subtractor(req,res){
    res.json({
        result :
        parseInt(req.query.a)-parseInt(req.query.b)
    })
}
function divisor(req,res){
    res.json({
        result :
        parseInt(req.query.a)/parseInt(req.query.b)
    })
}
function multiplier(req,res){
    res.json({
        result :
        parseInt(req.query.a)*parseInt(req.query.b)
    })
}

app.get("/admin",function(req,res){
    res.json({
        "Total number of requests" : requestCount
    })
})

app.use(requestIncreaser)

app.get("/add",adder);
app.get("/subtract",subtractor);
app.get("/divide",divisor);
app.get("/multiply",multiplier);


app.listen(3000)