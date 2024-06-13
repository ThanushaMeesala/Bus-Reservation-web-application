import React, { useState } from 'react'
import "../Styles/adminsignup.css"
import axios from 'axios'
export default function Adminsignup() {
    let [name,setname]=useState("")
    let [phone,setphone]=useState("")
    let [email,setemail]=useState("")
    let [gst_number,setgstnumber]=useState("")
    let [travels_name,settravelsname]=useState("")
    let [password,setpassword]=useState("")

        let data={
                name,phone,email,gst_number,travels_name,password
        }
    let handle=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/api/admins",data)
        .then((res)=>{
                console.log(res);
        alert("signup success")})
        .catch(()=>{alert("error")})
    }
  return (
    <div className='adminsignup'>
        <form action="" onSubmit={handle}>
            <label htmlFor="">FullName  </label>
            <input type="text" placeholder='enter full name'
                    value={name} onChange={(e)=>{console.log(e.target.value);
                        setname(e.target.value)}}/>
            <label htmlFor="">phone number</label>
            <input type="text" placeholder='enter phone number'
                    value={phone} onChange={(e)=>{console.log(e.target.value);setphone(e.target.value)}}/>
            <label htmlFor="">Email   </label>
            <input type="text" placeholder='enter email id'
                    value={email} onChange={(e)=>{console.log(e.target.value);setemail(e.target.value)}} />
            <label htmlFor="">Gst_Number</label>
            <input type="text" placeholder='enter gst number'
                    value={gst_number} onChange={(e)=>{console.log(e.target.value);setgstnumber(e.target.value)}}/>
            <label htmlFor="">Travels_Name</label>
            <input type="text" placeholder='enter travels name'
                    value={travels_name} onChange={(e)=>{console.log(e.target.value);settravelsname(e.target.value)}}/>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='enter the password'
                    value={password} onChange={(e)=>{console.log(e.target.value);setpassword(e.target.value)}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}
