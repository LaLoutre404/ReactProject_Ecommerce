import { db } from "./firebaseconfig";
import 'firebase/firestore';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export interface Product {
    nom_produit: string,
    prix: number,
    url_image: string,
    disponible: boolean,
    id: number,
}

export const GetProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const q = query(collection(db, "Produit"), where("disponible", "==", true));

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
        <div className="grid md:grid-cols-4 lg:gap-4 mt-6  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productList.map((product, index) => {
                return (
                    <div key={index} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img src={product.url_image} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={"/shop/" + product.nom_produit}>
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {product.nom_produit}
                                    </a>
                                </h3>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${product.prix}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}