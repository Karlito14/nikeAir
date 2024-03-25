import { Select } from '../Select/Select';
import { SIZE, QUANTITY } from '../../config/constantes';

export const ShoesDetails = ({shoe}) => {
    return (
        <main className="flex flex-col lg:flex-row-reverse mt-4 space-y-4 lg:space-y-0">
            <div className="flex-1 lg:-mt-36 -z-10 lg:ml-28">
                <div className="h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
                    <img src={shoe.src} alt="chaussure Nike" className='animate-float -mr-10' />
                </div>
            </div>
            <div className="flex-1 space-y-6 lg:mr-5">
                <h1 className="text-5xl md:text-8xl">{shoe.title}</h1>
                <p className="font-medium md:text-xl">{shoe.description}</p>
                <div className='flex items-center space-x-2 md:space-x-6'>
                    <p className="text-3xl font-extrabold md:text-6xl">{shoe.price} €</p>
                    <Select title={'Qté'} listOption={QUANTITY} />
                    <Select title={'Taille'} listOption={SIZE} />
                </div>
                <div className="space-y-4 flex flex-col sm:flex-row sm:space-x-4">
                    <button className="btn-press-animation h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">Ajouter au panier</button>
                    <a href="#" className="underline underline-offset-4 text-lg font-bold">Plus de détails</a>
                </div>
            </div>
        </main>
    )
};