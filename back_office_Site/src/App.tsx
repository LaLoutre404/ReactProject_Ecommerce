import { useEffect, useState } from 'react'
import CommandList from './components/CommandDashboard'
import ProductList from './components/ProductList'
import StatsPage from './components/StatistiqueDashboard'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HyperLinkProps } from './components/Header'
import MyHeader from './components/Header'
import { AuthProvider, useAuth } from './components/AuthentificationProvider'
import Authentification from './components/AuthentificationPage'

function App() {
    const linkprops = [{ href: "/dashboard", linkname: "Dashboard" },
    { href: "/statistique", linkname: "Statistique" },
    { href: "/liste-produit", linkname: "Liste Produits" }];
    const navigate = useNavigate()
    
    return (
        <>
            <AuthProvider>
                <MyHeader links={linkprops}></MyHeader>
                <Routes>
                    <Route path='/' element={<Authentification />}></Route>
                    <Route path='/dashboard' element={<CommandList />} />
                    <Route path='/statistique' element={<StatsPage />} />
                    <Route path='/liste-produit' element={<ProductList />}></Route>
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
