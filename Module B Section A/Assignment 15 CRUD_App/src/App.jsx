import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Screen/Home/Home'
import CreateUser from './Screen/CreateUser/CreateUser'
import EditUser from './Components/EditUser'

const App = () => {
  return (
   <Routes>
    <Route index element={<Home />}/>
    <Route path='createuser' element={<CreateUser />}/>
    <Route path="/edituser/:id" element={<EditUser />} />


    </Routes>
  )
}

export default App