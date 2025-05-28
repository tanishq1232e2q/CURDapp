import User from "../Model/usermodel.js"

export const create=async(req,res)=>{
    try {
        
        const userdata=new User(req.body);
        console.log(req.body);
        if(!userdata){
            return res.status(404).json("user data not found")
        }
        const savedata=await userdata.save();
        res.json(savedata)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const getall=async(req,res)=>{
    try {
        const userdata=await User.find();
        if (!userdata) {
            return res.status(404).json("user data not found")
        }
        res.json(userdata);
        
    } catch (error) {
        console.log(error);
    }


}

export const getone=async(req,res)=>{
    try {
        const id=req.params.id;
        const userexit=await User.findById(id);

        if(!userexit){
            return res.status(404).json("user not found")
        }
        res.json(userexit);

    } catch (error) {
        console.log(error);
        
    }
}

export const update=async(req,res)=>{
    try {
        const id=req.params.id;
        const userexit=await User.findById(id);

        if(!userexit){
            return res.status(404).json("user not found")
        }

        const updateuser=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateuser)
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteuser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userexit=await User.deleteOne({_id:id});

        if(!userexit){
            return res.status(404).json("user not found")
        }
        // await User.findOneAndDelete(id)
        res.status(404).json("user deleted ")

        
    } catch (error) {
        console.log(error);
        
    }
}

