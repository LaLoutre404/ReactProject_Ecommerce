import { db } from "./firebaseconfig";
import 'firebase/firestore';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Commande {
    nom_commande: string,
    quantite: number,
    nom_produit: string,
    prix: number,
    nom_client: string,
    date_livraison: string,
    ref: string

}

export const GetCommandeList = () => {
    const [orderList, setOrderList] = useState<Commande[]>([]);

    //On récupère toute les commandes en bdd
    const fetchDoc = async () => {
        console.log("hello")
        await getDocs(collection(db, 'Commande'))
            .then((querysnapShot) => {
                const newListDocs: Commande[] = querysnapShot.docs
                    .map((doc) => ({ ...doc.data() as Commande }));
                setOrderList(newListDocs);
            })
    }
    //on supprime une commande en bdd et on récupère la liste actualisé des commandes
    const deleteDocument = async (commande: Commande) => {
        const productToDelete = doc(db, "Commande", commande.ref);
        await deleteDoc(productToDelete).then((querySnapshot) => {
            console.log(querySnapshot);
        });
        fetchDoc();
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
                        <th scope="col" className="px-6 py-3">
                            Supprimer la commande
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
                                <td className="px-6 py-4">
                                    <button onClick={() => deleteDocument(order)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                        supprimer
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}