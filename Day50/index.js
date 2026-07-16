
// npm i express
// npm i ejs
// npm i nodemon
// npx nodemon index.js

const express=require("express")
const app=express()
const users=[]

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index',{users})
})

app.get('/addUser',(req,res)=>{
    res.render('addUser')
})

app.post('/saveUser',(req,res)=>{
    users.push(req.body)
    res.redirect('/')
})

app.post('/delete',(req,res)=>{
    console.log(req.query)
    users.splice(req.query.userid,1)
    res.redirect('/')
})

app.listen(8000,()=>{
    console.log("serving")
})