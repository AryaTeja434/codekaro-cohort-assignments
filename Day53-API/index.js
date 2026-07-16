
const express = require("express")
const app=express()
app.set("view engine","ejs")

const users = require("./users.json")

app.get('/',(req,res)=>{
    res.send("Hello from the server")
})

app.get('/users',(req,res)=>{
    res.render("users",{users})
})

app.get('/api/users',(req,res)=>{
    return res.json({ users })
})

app.get("/users/:id",(req,res)=>{
    let id=req.params.id;
    res.render("user",{...users[id],id:id})
}) 

app.get("/api/users/:id",(req,res)=>{
    let id=req.params.id;
    return res.json(users[id])
}) 


app.listen(8000,()=>{
    console.log("Server running")
})