
import React, {  useState } from 'react'
export default function Resetpassword() {
    let [newp,setnewp]=useState("");
    let [confirm,setconfirm]=useState("")
    // useEffect(()=>{
    //     axios.get(`http://localhost:8080/api/admins/${id}`)
    // })
  return (
    <div>
        
        <form action="">
            <label htmlFor="">New Password </label>
            <input type="text" value={newp} onChange={(e)=>{setnewp(e.target.value)}}/>
            <label htmlFor="">Reset Password </label>
            <input type="text" value={confirm} onChange={(e)=>{setconfirm(e.target.value)}} />
            <button >RESET</button>
        </form>
    </div>
  )
}
