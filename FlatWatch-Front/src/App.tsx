import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './component/Header';
import Home from './component/Home';
import Shop from './component/Shop'
import Authentification from './component/Authentification'
import Commande from './component/Commande'
import Panier from './component/Panier';
import GetProduct from './component/Product'
import { AuthProvider } from './context/AuthentificationProvider';

function App() {


  return (
    <div>
      <AuthProvider>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Authentification />} />
            <Route path="/order" element={<Commande />} />
            <Route path="/cart" element={<Panier />} />
            <Route path="/shop/:name" element={<GetProduct />} />
          </Routes>
        </div>
      </AuthProvider>

    </div>

  )
}

export default App
