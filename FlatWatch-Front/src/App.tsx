import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop'
import Authentification from './components/Authentification'
import Commande from './components/Commande'
import Panier from './components/Panier';
import GetProduct from './components/Product'
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
