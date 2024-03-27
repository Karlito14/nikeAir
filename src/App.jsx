import { CardItemBag } from './components/CardItemBag/CardItemBag';
import { CardList } from './components/CardList/CardList';
import { Navigation } from './components/Navigation/Navigation';
import { ShoesDetails } from './components/ShoesDetails/ShoesDetails';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SHOE_LIST } from './config/constantes';
import { useEffect, useState } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

export const App = () => {
    const [data, setData] = useState(SHOE_LIST[0]);
    const [displayAside, setDisplayAside] = useState(false);
    const [bag, setBag] = useState([]);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('isDark');
        if(isDarkMode === 'true') {
            window.document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkmode = () => {
        window.document.documentElement.classList.toggle('dark');
        if(window.document.documentElement.classList.contains('dark')) {
            localStorage.setItem('isDark', 'true');
        } else {
            localStorage.setItem('isDark', 'false');
        }
    };
    
    return (
        <div className={'p-10 xl:px-24 animate-fadeIn dark:bg-slate-900'} onClick={() => setDisplayAside(false)}>
            <Navigation openSidebar={setDisplayAside} />
            {data && <ShoesDetails shoe={data} updateBag={setBag} />}
            {SHOE_LIST.length > 0 && <CardList data={SHOE_LIST} updateShoe={setData} />}
            <Sidebar isOpen={displayAside} closeSidebar={setDisplayAside} >
                {bag.length > 0 && <CardItemBag itemList={bag} updateBag={setBag} />}
                {bag.length === 0 && <p className='text-center mt-10 text-xl'>Votre panier est vide</p>}
            </Sidebar>
            <div className='fixed bottom-4 right-4 px-4 py-2 cursor-pointer bg-gray-900 rounded-full flex-center text-white dark:bg-white dark:text-black dark:shadow-[0_5px_8px_rgba(0,0,0,0.3)]' onClick={toggleDarkmode}>
                <button>
                    <BiSun className='hidden dark:block' />
                    <BiMoon className='block dark:hidden' />
                </button>
            </div>
        </div>
    );
};