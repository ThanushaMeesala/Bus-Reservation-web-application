import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Styles/view.css"
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
export default function ViewBus() {
    let [bus,setbus]=useState([])
    let [load,setload]=useState(false)
    let navigate=useNavigate()
useEffect(()=>{
    axios.get(`http://localhost:8080/api/buses`)
    .then((res)=>{console.log(res.data.data);
        setbus(res.data.data)
    })
    .catch(()=>{console.log("error");})
},[load])
let removebus=(id,bus_no)=>{
    axios.delete(`http://localhost:8080/api/buses/${id}`)
    .then(()=>{alert(`bus number ${bus_no} is removed`);setload(true)})
    .catch(()=>{alert("error")})
}
let change=(id)=>{
    navigate(`/adminhomepage/editbus/${id}`);
}
  return (
    <div className='viewbus'>
       {bus.map((item)=>{
        return(
            <div className='viewpage'>
                <h4>{item.bus_name}</h4>
                <p><h6>Seats:</h6> {item.numberOfSeats}</p>
                <p><h6>From :</h6> {item.from}</p>
                <p><h6>To : </h6>{item.to}</p>
                <p><h6>Date: </h6>{item.dateOfDeparture}</p>
                <p><h6>Bus Number: </h6>{item.busNumber}</p>
                <p><h6>Cost of seat: </h6>{item.costPerSeat}</p>
                {/* <button><Link to={`/adminhomepage/editbus/${item.id}`}>EDIT</Link></button> */}
                <button onClick={()=>{change(item.id)}}>EDIT</button>
                <button onClick={()=>{
                    removebus(item.id,item.busNumber)
                }}>DELETE</button>
            </div>
        )
       })} 
    </div>
  )
}
