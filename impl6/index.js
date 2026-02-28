const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rajnathloveshiswife";
const app = express();
const path = require("path");


//middlewares

function auth(req, res, next){
    //auth code
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            message: "Token missing"
        });
    }
    try{
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
    catch(err){
        return res.status(401).json({
            message : "Invalid token"
        });
    }
}

function logger(req,res,next){
    console.log(`${req.method} request from ${req.url}`)
    next();
}


app.use(express.json());
app.use(logger);

const users =[];

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"));
})

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
    const user = users.find(u => u.username === req.username);
    res.send({
        username: user.username,
        password: user.password
    });
})


app.listen(3000);