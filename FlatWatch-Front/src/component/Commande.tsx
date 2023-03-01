import { GetOrderList } from "./GetOrderList";


function Commande() {
    return (
        <div>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto">
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
                                </tr>
                            </thead>
                            <GetOrderList />
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Commande