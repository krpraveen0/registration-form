import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Component/Register'
import Login from './Component/login'
import Dashboard from './Component/dashboard'


function App(props){
  return(
    <BrowserRouter>
   

    <Routes>
      <Route path = {`/`} element ={<Register/>}/>
      <Route path = {'/login'} element={<Login/>}/>
      <Route path= {'/dashboard'} element={<Dashboard/>}/>
    </Routes>
   
    </BrowserRouter>
  )
}

export default App