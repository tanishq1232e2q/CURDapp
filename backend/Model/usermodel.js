import mongoose from "mongoose";
const {Schema} = mongoose

const Userschema=new mongoose.Schema({
    fname:{
        type:String,
        required:true

    },
    lname:{
        type:String ,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
    
})
export default mongoose.model("User",Userschema)
