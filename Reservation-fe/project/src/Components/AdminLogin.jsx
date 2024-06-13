import React, { useState } from 'react'
import "../Styles/adminlogin.css"
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function AdminLogin() {
  let [username,setusername]=useState("");
  let [password,setpassword]=useState("")
  let navigate=useNavigate()
  let verify=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/api/admins/verify-by-email?email=${username}&password=${password}`)
    .then((res)=>{alert("login success");
    console.log(res.data.data);
      navigate("/adminhomepage")
      localStorage.setItem("admin",JSON.stringify(res.data.data))
    })
    .catch(()=>{alert("error")})
  }
  return (
    <div className='adminpage'>
     <form action="" onSubmit={verify}>
            <label htmlFor="">UserName/Email</label>
            <input type="text" required placeholder='enter the username' 
                     value={username} onChange={(e)=>{setusername(e.target.value)}} />
            <label htmlFor="">Password</label>
            <input type="text" required placeholder='enter the password'
                    value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            <button>LOGIN</button>
            <Link className="side" to="/forgot-password"><p>FORGOT PASSWORD ?</p></Link>
            <p>Are you a new user? <Link to="/adminsignup">Register here</Link></p>
        </form> 
    </div>
  )
}

