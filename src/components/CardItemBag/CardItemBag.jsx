import { CiTrash } from 'react-icons/ci';
import { SIZE, QUANTITY } from '../../config/constantes';
import { Select } from '../Select/Select';

export const CardItemBag = ({ itemList, updateBag }) => {
    const deleteProduct = (itemClicked) => {
        updateBag(bag => {
            return bag.filter(item => {
                return item.id !== itemClicked.id || item.quantity !== itemClicked.quantity || item.size !== itemClicked.size;
            });
        });
    };

    return itemList.map(item => {
        return (
            <div key={`${item.id}-${item.size}-${item.quantity}`} className='div-cart'>
                <div className="flex space-x-2">
                    <img className="h-24" src={item.src} />
                    <div className="space-y-2">
                        <h3 className="font-bold dark:text-white">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="font-bold dark:text-white">{item.price}€</span>
                </div>
                <div className='flex justify-between ml-5'>
                    <div className='flex space-x-6'>
                        <div>
                            <label htmlFor={`${item.id}-${item.quantity}-${item.size}`} className='font-bold dark:text-white'>Qté</label>
                            <Select title='' id={`${item.id}-${item.quantity}-${item.size}`} defaultValue={item.quantity} listOption={QUANTITY} sizeSelect={'w-16'} padding={'p-2'} />
                        </div>
                        <div>
                            <label htmlFor={`${item.id}-${item.size}-${item.quantity}`} className='font-bold dark:text-white'>Taille</label>
                            <Select title='' id={`${item.id}-${item.size}-${item.quantity}`} defaultValue={item.size} listOption={SIZE} sizeSelect={'w-16'} padding={'p-2'} />
                        </div>
                    </div>
                    <button>
                        <CiTrash size={25} className='text-black transition hover:text-red-500 dark:text-white dark:hover:text-red-500' onClick={() => deleteProduct(item)} />
                    </button>
                </div>
            </div>
        );
    });
};
