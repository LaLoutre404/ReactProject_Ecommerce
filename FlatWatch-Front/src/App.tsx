import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './component/Header';
import Home from './component/Home';
import Shop from './component/Shop'
import Authentification from './component/Authentification'
import Commande from './component/Commande'
import Panier from './component/Panier';
import GetProduct from './component/Product'

function App() {


  return (
    <div>
      <Header />

      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Authentification />} />
        <Route path="/order" element={<Commande />} />
        <Route path="/cart" element={<Panier />} />
        <Route path="/product" element={<GetProduct />} />
      </Routes>
      </div>
    </div>

  )
}

export default App
