function ProductList () {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FlatWatch</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                        </button>
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/statistique" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Statistiques</a>
                                </li>
                                <li>
                                    <a href="/liste-produit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Liste Produits</a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
                            </li>
                            <li>
                                <a href="/statistique" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Statistiques</a>
                            </li>
                            <li>
                                <a href="/liste-produit" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Liste Produits</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="bg-white shadow md:pt-20">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
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
export default ProductList; 