import React,{useState} from 'react'
import "../components/Getuser/User.css"
import { Link,Navigate, json, useNavigate } from 'react-router-dom'
import axios from "axios"

import {toast} from "react-hot-toast"

export default function Add() {
    const [image, setImage] = useState(null);
    const navigate=useNavigate()

    const users={
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const [user, setuser] = useState(users)
    const inputclick=(e)=>{
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user);

    }

    const handleImageUpload=(e)=>{
        const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    }

    const submitform=async(e)=>{
        e.preventDefault()
        localStorage.setItem('userImage', image);

        // await axios.post("http://localhost:7000/api/create/",user)
        // .then((res)=>{
        //     toast.success("User created",{position:"top-right"})
        //     console.log(res);
        //     navigate("/")
        // }).catch(error=>console.log(error))

        try {
            
            const response=await fetch("http://localhost:7000/api/create/",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(user)
            })
            navigate("/")
            toast.success("User created",{position:"top-right"})
            const ds=await response.json()
            console.log(ds);
        } catch (error) {
            console.log(error);
        }
            
        
    }
  return (
    <div className='userform'>
        <h1>Add user</h1>
        <form action='' onSubmit={submitform} className='form' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div>
                <label htmlFor='fname'>
                    First name
                </label>
                <input type='text' onChange={inputclick} name='fname' id='fname'></input>
            </div>
            <div>
                <label htmlFor='lname'>
                    Last name
                </label>
                <input type='text' onChange={inputclick} name='lname' id='lname'></input>
            </div>
            <div>
                <label style={{marginRight:"4rem"}} htmlFor='email'>
                    Email
                </label>
                <input type='email' onChange={inputclick} name='email' id='eamil'></input>
            </div>
            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input type='password' onChange={inputclick} name='password' id='password'></input>
            </div>
            <div>
           <input type='file' onChange={handleImageUpload} ></input>
            </div>

            
            <div>
                <button className='cls'  name='submit' type='submit'>Submit</button>
                <button className='cls' name='back' ><Link to="/">Back</Link></button>
            </div>
        </form>
      
    </div>
  )
}
