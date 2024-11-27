import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>}/>
        <Route path="/home" element={<h1>Desde el home</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation