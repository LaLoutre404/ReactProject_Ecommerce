import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './component/Header';
import Home from './component/Home';
import Shop from './component/Shop'


function App() {


  return (
    <div>
      <Header />

      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      </div>
    </div>

  )
}

export default App
