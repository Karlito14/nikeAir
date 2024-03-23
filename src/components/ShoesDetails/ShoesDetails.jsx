export const ShoesDetails = ({img}) => {
    return (
        <main className="flex flex-col lg:flex-row-reverse space-y-4">
            <div className="flex-1">
                <img src={img} alt="chaussure Nike" />
            </div>
            <div className="flex-1 space-y-6">
                <h1 className="text-5xl md:text-8xl">Nike Air Max 270</h1>
                <p className="font-medium md:text-xl">La Nike Air Max 270 est une chaussure lifestyle qui ne manquera pas de faire tourner les têtes avec son dégradé de couleurs vibrantes.</p>
                <p className="text-3xl font-extrabold md:text-6xl">100 €</p>
                <div className="space-y-4 flex flex-col sm:flex-row sm:space-x-4">
                    <button className="h-14 w-44 bg-black text-white transition-all hover:bg-gray-900 active:bg-gray-700">Ajouter au panier</button>
                    <a href="#" className="underline underline-offset-4 text-lg font-bold">Plus de détails</a>
                </div>
            </div>
        </main>
    )
};