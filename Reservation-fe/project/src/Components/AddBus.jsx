import axios from 'axios';
import React, { useState } from 'react'
import "../Styles/addbus.css"
import { useNavigate } from 'react-router-dom';
export default function AddBus() {
  
    let [bus_name,setname]=useState("");
    let [busNumber,setbusno]=useState("");
    let [dateOfDeparture,setdatedept]=useState("")
    let [numberOfSeats,setno_seats]=useState("")
    let [from,setfrom]=useState("")
    let [to,setto]=useState("")
    let [costPerSeat,setcost]=useState("")
    let navigate=useNavigate()
    // console.log("add bus");
    let admin=JSON.parse(localStorage.getItem("admin"))
    console.log(admin);
    console.log(typeof(admin));
    let data={
      bus_name,busNumber,dateOfDeparture,numberOfSeats,from,to,costPerSeat
    }
 let verify=(e)=>{
  e.preventDefault();
  axios.post(`http://localhost:8080/api/buses/${admin.id}`,data)
  .then(()=>{alert("bus saved");navigate("/adminhomepage/viewbus")})
  .catch(()=>{alert("errorrr")})
 }
  return (
    <div className='addbus'>
        <form action="" onSubmit={verify}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="enter bus name" value={bus_name} onChange={(e)=>{setname(e.target.value)}}/>
            <label htmlFor="">BusNumber</label>
            <input type="text" placeholder="enter bus number" value={busNumber} onChange={(e)=>{setbusno(e.target.value)}}/>
            <label htmlFor="">DateOfDeparture</label>
            <input type="text" placeholder="enter date of departure" value={dateOfDeparture} onChange={(e)=>{setdatedept(e.target.value)}}/>
            <label htmlFor="">NumberOfSeats</label>
            <input type="text" placeholder="enter number of seats" value={numberOfSeats} onChange={(e)=>{setno_seats(e.target.value)}}/>
            <label htmlFor="">From location</label>
            <input type="text" placeholder="enter from location" value={from} onChange={(e)=>{setfrom(e.target.value)}}/>
            <label htmlFor="">to</label>
            <input type="text" placeholder="enter to location" value={to} onChange={(e)=>{setto(e.target.value)}}/>
            <label htmlFor="">costPerSeat</label>
            <input type="text" placeholder="enter to location" value={costPerSeat} onChange={(e)=>{setcost(e.target.value)}}/>
            <button>Add Bus</button>
        </form>
    </div>
  )
}
