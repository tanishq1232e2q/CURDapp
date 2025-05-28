import mongoose from "mongoose";
const URL1=process.env.MONGOURL;


const connection=async()=>{
    

    try {
        
        await mongoose.connect("mongodb+srv://tanishqpalkhe06:update123@curdapp.5duqk7b.mongodb.net/curdapp?retryWrites=true&w=majority",{
           
        });
        console.log("mongo atlas connected");
    } catch (error) {
        console.log(error);
    }

}

export default connection