import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "../Getuser/User.css"
import axios from "axios"
import toast from 'react-hot-toast'


export default function User() {

  const [users, setusers] = useState([])
  const navigate=useNavigate()
  const userImage = localStorage.getItem('userImage');

  useEffect(() => {

    const fetchdata=async()=>{

      const response =await axios.get("http://localhost:7000/api/getall")
      console.log(response);
      setusers(response.data)
    }

    fetchdata()
    
  }, [])
  const deleteuser=async(userid)=>{
    console.log(userid);
    await axios.delete(`http://localhost:7000/api/delete/${userid}`)
    .then((res)=>{
      setusers((deluser)=>deluser.filter((user)=>user._id!==userid))
      toast.success("User deleted",{position:"top-right"})
      console.log(res);
    })
  .catch((err)=>console.log(err))


  
  }
  
  return (
    <div>
       {userImage && <img style={{width:"10%"}} src={userImage} alt="User" />}
      <div className='usertable'>
     <button style={{padding:"1rem",color:"white",backgroundColor:"lightblue"}}><Link style={{textDecoration:"none",color:"white"}} to="/add">Add user</Link></button>
        <table border={9}>
            <thead className='open'>
                <tr>
                    <td>S. no</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Actctions</td>
                </tr>
            </thead>

            <tbody>

              {
                users.map((user,index)=>{
                  return(

                <tr key={user._id}>
                    <td>{index+1}</td>
                    <td>{user.fname}  {user.lname}</td>
                    <td>{user.email}</td>
                    <td>
                        <button style={{padding:"1rem",color:"white",backgroundColor:"green",margin:"0rem 1rem"}} onClick={()=>deleteuser(user._id)}>
                            Delete
                        </button>
                       <button style={{padding:"1rem",color:"white",backgroundColor:"red"}}><Link style={{textDecoration:"none",color:"white"}} to={`/edit/`+user._id}>Edit</Link></button> 

                    </td>
                </tr>
                  )
                })
              }
            </tbody>
        </table>
      </div>
    </div>
  )
}
