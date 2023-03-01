function StatsPage () {
    return (
        <div>
            <header className="bg-white shadow md:pt-20">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Liste Produit</h1>
                </div>
            </header>
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
                                        Client
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition-colors">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Commande1
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        Jaeger LeCoultre
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        zirgybqidUFBief
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Commande2
                                    </th>
                                    <td className="px-6 py-4">
                                        2
                                    </td>
                                    <td className="px-6 py-4">
                                        Rollex
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4">
                                        eoighJFNauefob
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Commande3
                                    </th>
                                    <td className="px-6 py-4">
                                        2
                                    </td>
                                    <td className="px-6 py-4">
                                        Audemart-Piguet
                                    </td>
                                    <td className="px-6 py-4">
                                        $9999
                                    </td>
                                    <td className="px-6 py-4">
                                        EAFJMBqoifbNQ
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </div>
    )
}
export default StatsPage; 