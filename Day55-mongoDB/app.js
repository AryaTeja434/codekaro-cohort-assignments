



const express=require("express")
const mongoose=require("mongoose")

const app=express()

app.use(express.urlencoded({extended:true}))


MONGODB_USERNAME="dsteja3_db_user"
MONGODB_PASSWORD="pnlvB657m3EnDnHM"
MONGODB_URI="mongodb+srv://dsteja3_db_user:pnlvB657m3EnDnHM@cluster0.fusqhxi.mongodb.net/my_db"

mongoose.connect(MONGODB_URI).then(()=>{
    console.log("DB is connected")
})

const schema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true}

})

const User = mongoose.model('students',schema)


app.get('/api/users',async (req,res)=>{
    let users=await User.find({})
    return res.json(users)
})
app.post('/api/users',async (req,res)=>{
    try {
        let { name, email } = req.body;
        let data = await User.create({
            name: name,
            email: email
        });
        console.log(data);
        return res.json('new user added!');
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
})

app.listen(8000,()=>{
    console.log("Server loading")
})