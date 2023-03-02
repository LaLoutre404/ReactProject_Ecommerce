import { useAuth } from "./AuthentificationProvider"
export type HyperLinkProps = {
    links: {
        href: string,
        linkname: string
    }[]
}

const MyHeader = (links: HyperLinkProps) => {
    const { user } = useAuth()

    return (
        <div>
            {user?.email &&
                < nav className="bg-light-purple border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FlatWatch</span>
                        </a>
                        <div className="flex items-center md:order-2">
                            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                            </button>
                        </div>
                        <div className=" bg-light-purple items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-light-purple md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-light-purple dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {links.links.map((link, index) => (
                                    <li className="bg-light-purple">
                                        <a key={index} href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-purple dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{link.linkname}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </div >
    )
}
export default MyHeader
