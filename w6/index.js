const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rajnathloveshiswife";
const app = express();


//middlewares

function auth(req, res, next){
    //auth code
    const token = req.headers.authorization;
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const username = decodedInformation.username;

    const user = users.find(user=>username == user.username);

    if(user){
        req.username = username;
        next();
    }
    else{
        res.send({
            message : "token invalid"
        })
        return;
    }
}

function logger(req,res,next){
    console.log(`${req.method} request from ${req.url}`)
    next();
}


app.use(express.json());
app.use(logger);

const users =[];

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username : username,
        password : password
    })
    res.send({
        message : "You are signed up"
    })
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user=>user.username == username && user.password==password);
    if(user){
        const token = jwt.sign({
            username : username
        },JWT_SECRET);
        user.token = token;
        res.send({
            token : token
        });
        console.log(users);
    }
    else{
        res.status(403).send({
            message : "Invalid username or password"
        })
    }

})

app.get("/me",auth,(req,res)=>{
    res.send({
        message : `Welcome ${req.username}`
    })
})


app.listen(3000);