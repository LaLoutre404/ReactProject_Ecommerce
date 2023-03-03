import { db, firebaseConfig, auth } from "./firebaseconfig";
import 'firebase/firestore';
import { collection, getDocs, addDoc, updateDoc, doc, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

interface Product {
    nom_produit: string,
    prix: number,
    url_image: string,
    disponible: boolean,
    ref: string
}

export const GetProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    //on récupère tout les produits en bdd
    const fetchDoc = async () => {
        await getDocs(collection(db, 'Produit'))
            .then((querysnapShot) => {
                const newListDocs: Product[] = querysnapShot.docs
                    .map((doc) => ({ ...doc.data() as Product}));
                setProductList(newListDocs);
            })
    }

    //on modifie un element, à l'aide de sa reference
    //on récupère une liste actualisé des produits en bdd
    const modifyDoc = async (product: Product, value: boolean) => {
        const oldProductRef = doc(db, "Produit", product.ref);
        updateDoc(oldProductRef, {
            disponible: value
        }).then((querySnapshot) => {
            console.log(querySnapshot); 
        });

        fetchDoc(); 
    }

    useEffect(() => {
        fetchDoc(); 
            
    }, []);

    return (
        <div className="grid gap-4 grid-cols-3">
            {productList.map((product, index) => {
                return (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img className="p-8 rounded-t-lg" src={product.url_image} alt="product image" />
                        </a>
                        <div className="px-5 pb-5">
                            <a>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.nom_produit}</h5>
                            </a>
                            <div className="grid gap-4 grid-cols-1">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.prix}$</span>
                                <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {product.disponible == true &&
                                        <a> Ce produit est disponible </a>
                                    }
                                    {product.disponible == false &&
                                        <a> Ce produit n'est pas disponible </a>
                                    }
                                </a>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" checked={product.disponible} className="sr-only peer" onChange={() => modifyDoc(product, !product.disponible)}/>
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}