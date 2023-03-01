import { db } from "../../firebaseconfig";
import 'firebase/firestore';
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Order {
    nom_commande: string,
    nom_client: string,
    nom_produit: string,
    prix: number,
    quantite: number,
    date_livraison : string,

}

export const GetOrderList = () => {
    const [orderList, setOrderList] = useState<Order[]>([]);

    const fetchDoc = async () => {
        await getDocs(collection(db, 'Commande'))
            .then((querysnapShot) => {
                const newListDocs: Order[] = querysnapShot.docs
                    .map((doc) => ({ ...doc.data() as Order }));
                setOrderList(newListDocs);
            })
    }
    useEffect(() => {
        fetchDoc();
    }, [])

    return (
        <div>
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
                        </tr>
                    </tbody>
                )
            })}
        </div>
    )
}