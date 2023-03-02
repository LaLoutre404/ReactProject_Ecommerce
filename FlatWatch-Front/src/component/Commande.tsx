import { GetOrderList } from "./GetOrderList";


function Commande() {
    return (
        <div>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto">
                       
                            <GetOrderList />
                        
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Commande