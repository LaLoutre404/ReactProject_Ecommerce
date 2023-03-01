import { useState } from 'react'
import CommandList from './components/CommandDashboard'
import ProductList from './components/ProductList'
import StatsPage from './components/StatistiqueDashboard'
import { Route, Routes } from 'react-router-dom'
import { HyperLinkProps } from './components/Header'
import MyHeader  from './components/Header'
import { AuthProvider } from './components/AuthentificationProvider'
function App() {
    const linkprops = [{ href: "/", linkname: "Dashboard" },
    { href: "/statistique", linkname: "Statistique" },
    { href: "/liste-produit", linkname: "Liste Produits" }];

    return (
        <>
        <AuthProvider>
            <MyHeader links={linkprops} />
            <Routes>
                <Route path='/' element={<CommandList />} />
                <Route path='/statistique' element={<StatsPage />} />
                <Route path='/liste-produit' element={<ProductList />}></Route>
            </Routes>
        </AuthProvider>
        </>
    )
}

export default App
