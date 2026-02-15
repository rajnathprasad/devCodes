const express = require("express")
const fs = require("fs")

const app = express()

app.get("/:user",(req, res)=>{
    fs.readFile("w4/todo/todos.txt","utf8",(err,data)=>{
        if(err){
            console.log(err)
            res.send(err);
        }
        else{
            console.log(data);
            data = JSON.parse(data);
            res.send(data[req.params.user]);
        }
    })
})

app.post("/add/:user/:task",(req, res)=>{
    fs.readFile("w4/todo/todos.txt","utf8",(err,data)=>{
        if(err){
            console.log(err)
            res.send(err);
        }
        else{
            console.log(data);
            data = JSON.parse(data);
            data[req.params.user].push(req.params.task);
        }
        fs.writeFile("w4/todo/todos.txt",JSON.stringify(data),(err)=>{
            console.log(err)
            res.send(`Added Successfully!`)
        })
    })
})

app.put("/update/:user/:idx/:newTask",(req, res)=>{
    fs.readFile("w4/todo/todos.txt","utf8",(err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send(err);
        }
        else{
            console.log(data);
            data = JSON.parse(data);
            data[req.params.user][Number(req.params.idx)] = req.params.newTask;
            fs.writeFile("w4/todo/todos.txt",JSON.stringify(data),(err)=>{
                if(err){
                    console.log(err);
                    return res.status(500).send("Write Failed")
                }
                res.send(`Updated successfully!`)
            })
        }
    })
})

app.delete("/delete/:user/:idx",(req, res)=>{
    fs.readFile("w4/todo/todos.txt","utf8",(err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send(err);
        }
        else{
            console.log(data);
            data = JSON.parse(data);
            data[req.params.user].splice(Number(req.params.idx),1);
            fs.writeFile("w4/todo/todos.txt",JSON.stringify(data),(err)=>{
                if(err){
                    console.log(err);
                    return res.status(500).send("Deletion Failed")
                }
                res.send(`Deleted successfully!`)
            })
        }
    })
})

app.listen(3000)