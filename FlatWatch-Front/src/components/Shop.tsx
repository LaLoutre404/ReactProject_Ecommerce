import {GetProductList} from './GetProductList'


   

function Shop() {
    
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Notre Sélection de Montres Classiques</h2>
                <div>
                    <GetProductList />
                </div>
            </div>
        </div>

    )
}

export default Shop
