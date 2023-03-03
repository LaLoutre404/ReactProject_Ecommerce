import CommandList from './components/CommandDashboard'
import ProductList from './components/ProductList'
import { Route, Routes} from 'react-router-dom'
import MyHeader from './components/Header'
import { AuthProvider } from './components/AuthentificationProvider'
import Authentification from './components/AuthentificationPage'

function App() {
    const linkprops = [{ href: "/dashboard", linkname: "Dashboard" },
    { href: "/liste-produit", linkname: "Liste Produits" }];
    
    return (
        <>
            <AuthProvider>
                <MyHeader links={linkprops}></MyHeader>
                <Routes>
                    <Route path='/' element={<Authentification />}></Route>
                    <Route path='/dashboard' element={<CommandList/>} />
                    <Route path='/liste-produit' element={<ProductList />}></Route>
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
