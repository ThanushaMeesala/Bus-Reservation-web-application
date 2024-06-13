import React from 'react'
import "../Styles/adminnavbar.css"
import Dropdown1 from './Dropdown1'
export default function AdminNavbar() {
  return (
    <div className='adminnavbar'>
      <div>
      <h1><i>Bus Buddy</i><sup>.in</sup></h1>
      </div>
      <div>
        <Dropdown1/>
      </div>
    </div>
  )
}
