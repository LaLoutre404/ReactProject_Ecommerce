import { db, firebaseConfig, auth } from "./firebaseconfig";
import 'firebase/firestore';
import { collection, getDocs, addDoc } from "firebase/firestore";
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
                    .map((doc) => ({ ...doc.data() as Product }));
                setProductList(newListDocs);
            })
    }

    useEffect(() => {
        fetchDoc();
    }, [])

    return (
        <div className="grid gap-4 grid-cols-3">
            {productList.map((product, index) => {
                return(
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a>
                        <img className="p-8 rounded-t-lg" src={product.url_image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.nom_produit}</h5>
                        </a>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.prix}$</span>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {product.disponible == true &&
                                    <a> Ce produit est disponible </a>
                                }
                                {product.disponible == false &&
                                    <a> Ce produit n'est pas disponible </a>
                                }
                            </a>
                        </div>
                    </div>
                </div>
            )})}
        </div>
    )
}