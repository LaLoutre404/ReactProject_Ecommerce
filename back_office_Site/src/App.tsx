import { useState } from 'react'
import CommandList from './components/CommandDashboard'
import ProductList from './components/ProductList'
import StatsPage from './components/StatistiqueDashboard'
import { Route, Routes } from 'react-router-dom'

function App() {

    return (
        <Routes>
            <Route path='/' element={<CommandList/>}/>
            <Route path='/statistique' element={<ProductList/>}/>
            <Route path='/liste-produit' element={<StatsPage/>}></Route>
        </Routes>
    )
}

export default App
