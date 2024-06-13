import React, { useState } from 'react'
// import "../Styles/usersignup.css"
import axios from 'axios'
export default function UserSignup() {
    let [name,setname]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [gender,setgender]=useState("")
    let [age,setage]=useState("")
    let [password,setpassword]=useState("")
    let data={
        name,phone,email,gender,age,password
    }
    let verify=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/api/users`,data)
        .then(()=>{alert("successfully user registered")})
        .catch(()=>{alert("error")})
    }
  return (
    <div className='usersignup'>
        <form action="" onSubmit={verify}>  
            <label htmlFor="">NAME</label>
            <input type="text" placeholder='enter ur name' value={name} onChange={(e)=>{setname(e.target.name)}}/>
            <label htmlFor="">PHONE</label>
            <input type="text" value={phone} onChange={(e)=>{setphone(e.target.phone)}} placeholder='enter phone number'/>
            <label htmlFor="">EMAIL</label>
            <input type="text" value={email} onChange={(e)=>{setemail(e.target.email)}} placeholder='enter email'/>
            <label htmlFor="">GENDER</label>
            <input type="text" value={gender} onChange={(e)=>{setgender(e.target.gender)}} placeholder='enter gender'/>
            <label htmlFor="">AGE</label>
            <input type="text" value={age} onChange={(e)=>{setage(e.target.age)}} placeholder='enter age'/>
            <label htmlFor="">PASSWORD</label>
            <input type="text" value={password} onChange={(e)=>{setpassword(e.target.password)}} placeholder='enter password'/>
            <button>SUBMIT</button>
        </form>
    </div>
  )
}
