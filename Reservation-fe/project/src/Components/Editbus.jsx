import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function Editbus() {
  let obj=useParams()
    let [bus_name,setname]=useState("");
    let [busNumber,setbusno]=useState("");
    let [dateOfDeparture,setdatedept]=useState("")
    let [numberOfSeats,setno_seats]=useState("")
    let [from,setfrom]=useState("")
    let [to,setto]=useState("")
    let [id,setid]=useState("")
    let [costPerSeat,setcostperseats]=useState("")
    let navigate=useNavigate()
    
  useEffect(()=>{
    axios.get(`http://localhost:8080/api/buses/${obj.abc}`)
    .then((e)=>{
      console.log(e.data.data);
      setname(e.data.data.bus_name);
      setbusno(e.data.data.busNumber);
      setdatedept(e.data.data.dateOfDeparture);
      setno_seats(e.data.data.numberOfSeats);
      setfrom(e.data.data.from);
      setto(e.data.data.to);
      setid(e.data.data.id);
      setcostperseats(e.data.data.costPerSeat);
    })
    .catch(()=>{console.log("error");})
  },[obj.abc])
  let data={
    bus_name,busNumber,dateOfDeparture,numberOfSeats,from,to,costPerSeat
  }
let update=(e)=>{ 
  e.preventDefault();
  axios.put(`http://localhost:8080/api/buses/${id}`,data)
  .then(()=>{alert("updated successfully"); navigate(`/adminhomepage/viewbus`)})
  .catch(()=>{alert("errorrr")})
}
  return (
    <div>
            <form action=""  onSubmit={update}>
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
            <label htmlFor="">Cost of seat</label>
            <input type="text" placeholder="enter seat cost" value={costPerSeat} onChange={(e)=>{setcostperseats(e.target.value)}}/>
            <button>Add Bus</button>
        </form>
    </div>
  )
}
