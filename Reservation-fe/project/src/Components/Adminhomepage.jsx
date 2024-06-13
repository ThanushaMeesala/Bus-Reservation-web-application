import React from 'react'
import AdminNavbar from './AdminNavbar'
import Admindashboard from './Admindashboard'
import AddBus from './AddBus'
import { Route,Routes } from 'react-router-dom'
import ViewBus from './ViewBus'
import Editbus from './Editbus'
import BookBus from './BookBus'
// import Searchbus from './Searchbus'
export default function Adminhomepage() {
  return (
    <div>
        <AdminNavbar/>
        <Routes>
            <Route path='/' element={<Admindashboard/>}/>
            <Route path='/addbus' element={<AddBus/>}/>
            <Route path='/viewbus' element={<ViewBus/>}></Route>
            <Route path='/editbus/:abc' element={<Editbus/>}></Route>
            <Route path='/bookbus/:id' element={<BookBus/>}/>
          </Routes>
        
    </div>
  )
}
