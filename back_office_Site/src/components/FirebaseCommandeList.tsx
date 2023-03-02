import { db } from "./firebaseconfig";
import 'firebase/firestore';
import { collection, getDocs, updateDoc, doc} from "firebase/firestore";
import { useEffect, useState } from "react";

interface Commande {
    nom_commande: string,
    quantite: number,
    nom_produit: string,
    prix: number,
    nom_client: string, 
    date_livraison: string, 

}

export const GetCommandeList = () => {
    const [orderList, setOrderList] = useState<Commande[]>([]);

    const fetchDoc = async () => {
        console.log("hello")
        await getDocs(collection(db, 'Commande'))
            .then((querysnapShot) => {
                const newListDocs: Commande[] = querysnapShot.docs
                    .map((doc) => ({ ...doc.data() as Commande }));
                setOrderList(newListDocs);
            })
    }

    const modifyDoc = async (commande: Commande, value: boolean) => {
        const oldProductRef = doc(db, "Commande", commande.nom_produit);
        updateDoc(oldProductRef, {
            disponible: value
        }).then((querySnapshot) => {
            console.log(querySnapshot);
        });
    }

    useEffect(() => {
        fetchDoc(); 
            
    }, []);

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Commande
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantité
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nom produit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Prix
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date de Livraison
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nom Client
                        </th>
                    </tr>
                </thead>
                {orderList.map((order, index) => {
                    return (
                        <tbody key={index}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition-colors">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {order.nom_commande}
                                </th>
                                <td className="px-6 py-4">
                                    {order.quantite}
                                </td>
                                <td className="px-6 py-4">
                                    {order.nom_produit}
                                </td>
                                <td className="px-6 py-4">
                                    {order.prix}$
                                </td>
                                <td className="px-6 py-4">
                                    {order.date_livraison}
                                </td>
                                <td className="px-6 py-4">
                                    {order.nom_client}
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}