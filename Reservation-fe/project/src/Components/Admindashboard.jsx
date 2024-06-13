import React, { useState } from 'react'
import "../Styles/admindashpage.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Admindashboard() {
  let [from,setfrom]=useState("")
  let [to,setto]=useState("")
  let [date,setdate]=useState("")
  let [buses,setbuses] = useState([])
  let navigate = useNavigate()
  let verify=(e)=>{
    e.preventDefault()
    axios.get(`http://localhost:8080/api/buses/find?from=${from}&to=${to}&dateOfDeparture=${date}`)
    .then((res)=>{console.log(res.data.data);alert("searching");setbuses(res.data.data)})
    .catch(()=>{alert("error");})
  }
  function bookbus(id){
    navigate(`/adminhomepage/bookbus/${id}`)
  }
  return (
    <div className='admindashpage'>
      <h1>BOOK BUS TICKETS</h1>
      <form action="" onSubmit={verify}>
        <div className='box'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#ad0505" viewBox="0 0 23 22"><path fill="#ad0505" fill-rule="evenodd" d="M3.552.065c-.74.18-1.384.81-1.643 1.608-.068.21-.08.488-.101 2.509l-.024 2.272-.27.097A2.378 2.378 0 0 0 .066 8.144C.019 8.324 0 8.61 0 9.138c0 .91.053 1.096.41 1.453.297.298.583.409 1.05.409h.341l.013 3.643.013 3.642.1.278c.147.407.293.634.61.948.281.278.7.529.976.584l.13.026.02.417c.031.656.265 1.056.777 1.326l.223.118 1.228.013c1.17.012 1.24.008 1.476-.08.17-.064.319-.164.476-.321.298-.299.41-.584.41-1.054v-.342h5.5v.342c0 .47.112.756.41 1.054.157.157.306.257.476.321.237.088.306.092 1.476.08l1.228-.013.223-.118c.512-.27.746-.67.778-1.326l.02-.418.129-.025c.276-.055.695-.306.975-.584.318-.314.465-.541.611-.948l.1-.278.013-3.642.013-3.643h.34c.467 0 .754-.111 1.051-.408a1.34 1.34 0 0 0 .305-.437 1.34 1.34 0 0 1 .112-.249c.048-.055.047-1.625-.002-1.596-.02.013-.049-.05-.063-.14-.045-.278-.32-.77-.58-1.035-.301-.306-.529-.458-.876-.584l-.27-.097-.024-2.272c-.026-2.5-.021-2.45-.308-2.993-.17-.319-.606-.755-.928-.927-.523-.279-.079-.264-7.98-.26-6.046.002-7.218.012-7.43.063Zm1.964 1.86a1.35 1.35 0 0 0-.548 2.198c.102.109.278.245.392.303l.206.105H16.44l.207-.105a1.73 1.73 0 0 0 .39-.303c.62-.662.42-1.736-.396-2.137l-.244-.12-5.33-.009c-5.028-.01-5.342-.005-5.551.067Zm-.73 3.618c-.397.08-.742.333-.942.694l-.126.229-.012 2.627c-.012 2.563-.01 2.634.076 2.864.118.316.446.644.759.761.23.086.308.087 6.462.087s6.232 0 6.462-.087c.314-.117.64-.445.759-.76.086-.231.088-.302.076-2.865l-.012-2.627-.126-.229c-.154-.278-.352-.457-.667-.605l-.238-.112-6.147-.006c-3.38-.004-6.226.01-6.324.029ZM.018 9.13c0 .45.006.627.014.396.008-.232.008-.6 0-.817-.008-.217-.014-.028-.014.421Zm5.505 5.623a1.418 1.418 0 0 0-.837.828c-.318.843.279 1.749 1.193 1.812a1.374 1.374 0 0 0 1.3-.75c.149-.294.168-.763.044-1.093a1.434 1.434 0 0 0-.76-.766c-.263-.099-.728-.114-.94-.03Zm10.009.03c-.304.12-.632.456-.75.767-.123.33-.104.799.045 1.094.245.484.769.786 1.3.749 1.148-.08 1.692-1.432.91-2.267-.274-.293-.524-.404-.94-.418-.265-.009-.396.009-.565.076Z" clip-rule="evenodd"></path></svg>
        <input type="text" name="" id="" placeholder='from station' value={from} onChange={(e)=>{setfrom(e.target.value)}}/>
        </div>
        <div className='box'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#ad0505" viewBox="0 0 10 12"><path d="M5 0a4.789 4.789 0 0 0-5 4.532c0 3.552 4.53 7.218 4.723 7.373a.453.453 0 0 0 .554 0C5.47 11.751 10 8.084 10 4.532A4.789 4.789 0 0 0 5 0Zm0 7a2.514 2.514 0 1 1 2.778-2.5A2.652 2.652 0 0 1 5 7Z" data-name="Path 1660"></path></svg>
        <input type="text"  placeholder='to station' value={to} onChange={(e)=>{setto(e.target.value)}}/>
        </div>
        <div className='box'>
        <input type="text" name="" id="" value={date} onChange={(e)=>{setdate(e.target.value)}} placeholder='enter date to travel'/>
        </div>
        <button>SEARCH</button>
      </form> 
      {buses.map((item)=>{
        return (
          <div style={{display:"flex",justifyContent:"space-evenly",boxShadow:"0px 0px 10px grey",margin:"2px"}} className="bus_list">
            <h4>{item.bus_name}</h4>
            <p><i>Seats : {item.numberOfSeats}</i></p>
            <p>From : {item.from}</p>
            <p>To : {item.to}</p>
            <p>Date : {item.dateOfDeparture}</p>
            <p>Bus Number :{item.busNumber}</p>
            <button className='btn btn-danger' onClick={()=>{bookbus(item.id)}}>Book Bus</button>          
          </div>
        )
      })}
      <h1>Bus Booking Discount Offers</h1>
    </div>

  )
}
