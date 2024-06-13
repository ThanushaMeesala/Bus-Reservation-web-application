import React from 'react'
import "../Styles/forgot.css"
export default function Forgotpassword() {
  return (
    <div className='forgot'>
        <form action="">
        <h1>Find Your Account</h1>
        <hr />
        <p>Please enter your Registered email address to send reset password mail.</p>
            <input type="text" placeholder='enter mail id'/>
            <hr />
            <button>Cancel</button>
            <button>Send</button>
        </form>
    </div>
  )
}
