import React from 'react'
import ErrorPage from './component/ErrorPage'
import Home from './component/Home'
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
  
function AppRoutes() {
  return (<>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>

    <ToastContainer />
  </>
  )
}
}

export default App
App