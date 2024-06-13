import React from 'react'
import "../Styles/userlogin.css"
import { Link } from 'react-router-dom'
export default function UserLogin() {
  return (
    <div className='userpage'>
           <form action="">
            <label htmlFor="">UserName/Email</label>
            <input type="text" required placeholder='enter the username or email' />
            <label htmlFor="">Password</label>
            <input type="password" required placeholder='enter the password' />
            <p>Are you a new user? <Link to="/usersignup">Register here</Link></p>
            <button>LOGIN</button>
        </form> 
    </div>
  )
}
