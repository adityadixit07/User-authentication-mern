import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app=express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.connect("mongodb+srv://aditya:TC4IWWbBfg5S9z9l@cluster0.vhxmcvg.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("database conneceted successfully!")
})
// TC4IWWbBfg5S9z9l

// creating user schema
const userSchema=new mongoose.Schema({
    name:"String",
    email:"String",
    password:"String"
})
const User=new mongoose.model("User",userSchema);


// routes
app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfully!",user:user})
            }else{
                res.send({message:"Password didn't match."})
            }
        }
        else{
            res.send({message:"user not Found."})
        }
    })
})


// user registeration 
app.post("/register",(req,res)=>{
    // res.send("register")
    const{name,email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registerd."})
        }
        else{
            // if user is not registered then create the new user
            const user=new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send({message:"Successfully registerd.Please login Now"})
                }
            })
        }
    })
   
})



// app listen
app.listen(5000),()=>{
    console.log("port is on localhost://5000")
}