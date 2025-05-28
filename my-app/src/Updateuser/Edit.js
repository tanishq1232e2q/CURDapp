import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams,useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import "../components/Getuser/User.css"

export default function Edit() {



    const users = {
        fname: "",
        lname: "",
        email: ""
    }
    const { id } = useParams();//get id from url 
    const [user, setuser] = useState(users);

    const navigate=useNavigate()





    const inputchange = (e) => {
        const { name, value } = e.target
        setuser({ ...user, [name]: value })
        console.log(user);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getone/${id}`,user)
            .then((res) => {
                setuser(res.data)
            }).catch((err) => console.log(err))


    }, [id])

    const updatesubmit=async(e)=>{
        e.preventDefault()

        await axios.put(`http://localhost:8000/api/update/${id}`,user)
        .then((res)=>{
            toast.success("User updated",{position:"top-right"})
            console.log(res);
            navigate("/")
        }).catch(error=>console.log(error))
    }

    return (
        <div className='usertable'>
            <h1>Edit user</h1>
            <form onSubmit={updatesubmit} action='' className='form' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <label htmlFor='fname'>
                        First name
                    </label>
                    <input type='text' value={user.fname} onChange={inputchange} name='fname' id='fname'></input>
                </div>
                <div>
                    <label htmlFor='lname'>
                        Last name
                    </label>
                    <input type='text' value={user.lname} onChange={inputchange} name='lname' id='lname'></input>
                </div>
                <div>
                    <label style={{ marginRight: "4rem" }} htmlFor='email'>
                        Email
                    </label>
                    <input type='email' value={user.email} onChange={inputchange} name='email' id='eamil'></input>
                </div>
                
                <div>
                    <button className='cls'   name='submit' type='submit'>Update</button>
                    <button className='cls'  name='back' ><Link to="/">Back</Link></button>
                </div>
            </form>
        </div>
    )
}
