import watch_1 from '../assets/shop/watch_1.webp'
import { db } from "../../firebaseconfig";
import 'firebase/firestore';
import { useEffect, useState, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { DataContext } from "../context/contextPanier";

interface Product {
    nom_produit: string,
    prix: number,
    url_image: string,
    disponible: boolean;
    description:string,
}



export const GetProduct = () => {

    const { addToCart, removeItem } = useContext(DataContext);

    const addItemToCart = (product: Product) => {
       // addToCart(product);
    };
    
    const removeItemFromCart = (product: Product) => {
        // removeItem(product);
    };

    const { name } = useParams();

    const [productList, setProductList] = useState<Product[]>([]);
    
    const q = query(collection(db, "Produit"), where("nom_produit", "==", name)); 

    const fetchDoc = async () => {
        await getDocs(q)
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
        <div className="bg-white">
            {productList.map((product, index) => {
            return (
                <div className="pt-6" key={index}>
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div className="flex items-center">
                                <a href="/shop" className="mr-2 text-sm font-medium text-gray-900">Montre</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{product.nom_produit}</a>
                        </li>
                    </ol>
                </nav>
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <img src={product.url_image} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                    </div>
                </div>
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.nom_produit}</h1>
                    </div>
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">${product.prix}</p>
                        <form className="mt-10">
                            <button type='button' onClick={() => addItemToCart(product)} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-dark-purple py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to Cart</button>
                        </form>
                    </div>
                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    <li className="text-gray-400"><span className="text-gray-600">Hand made probably</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">inclus dans la livraison : La montre </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            })}
        </div>
    )
}

export default GetProduct