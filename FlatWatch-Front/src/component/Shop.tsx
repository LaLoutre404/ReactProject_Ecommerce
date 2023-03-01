import { useState, useEffect } from 'react'
import watch_1 from '../assets/shop/watch_1.webp'
import { db, firebaseConfig } from "../../firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getDatabase, ref, onValue} from "firebase/database";
import {GetProductList} from './GetProductList'


    interface Product {
        nom_produit: string, 
        prix: number, 
        url_image: string
    }
    
    export const getProductList = () => {
        const [productList, setProductList] = useState<Product[]>([]); 
        return(
            <div>
                ProductList : {productList.map((product, index) => {
                    return <div key={index}>{product.nom_produit}</div>
                })} 
            </div>
        )
    }

function Shop() {
    
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Notre Sélection de Montres Classiques</h2>

                <div>
                    <GetProductList />
                </div>
            </div>
        </div>

    )
}

export default Shop
