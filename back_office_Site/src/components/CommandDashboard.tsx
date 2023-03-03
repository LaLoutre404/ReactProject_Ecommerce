import { GetCommandeList } from "./FirebaseCommandeList";

function CommandList () {
    return (
        <div>
            <header className="bg-white shadow md:pt-20">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Liste des commandes</h1>
                </div>
            </header>
            <main>
                <GetCommandeList></GetCommandeList>
            </main>
        </div>
    )
}
export default CommandList; 