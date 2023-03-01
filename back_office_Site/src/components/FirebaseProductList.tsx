import { db, firebaseConfig } from "./firebaseconfig";
import 'firebase/firestore'; 
import { collection, getDocs, addDoc    } from "firebase/firestore";
import { useState } from "react";

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