import { db, firebaseConfig, auth } from "./firebaseconfig";
import 'firebase/firestore'; 
import { collection, getDocs, addDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

interface Product {
    nom_produit: string, 
    prix: number, 
    url_image: string,
    disponible: boolean; 
}

export const GetProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]); 
    
    // signInWithEmailAndPassword(auth, "adminadrien@gmail.com", "123456")
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     // ..
    //   });

    const fetchDoc = async () => {
        await getDocs(collection(db, 'Produit'))
            .then((querysnapShot) => {
                const newListDocs: Product[] = querysnapShot.docs
                    .map((doc) => ({...doc.data() as Product})); 
                    setProductList(newListDocs); 
            })
    }


    useEffect(()=> {
        fetchDoc(); 
    }, [])

    return(
        <div>
            ProductList : {productList.map((product, index) => {
                return <div key={index}>{product.nom_produit}</div>
            })}
        </div>
    )
}