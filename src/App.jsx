import { CardItemBag } from './components/CardItemBag/CardItemBag';
import { CardList } from './components/CardList/CardList';
import { Navigation } from './components/Navigation/Navigation';
import { ShoesDetails } from './components/ShoesDetails/ShoesDetails';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SHOE_LIST } from './config/constantes';
import { useState } from 'react';

export const App = () => {
    const [data, setData] = useState(SHOE_LIST[0]);
    const [displayAside, setDisplayAside] = useState(false);
    const [bag, setBag] = useState([]);
    
    return (
        <div className={'p-10 xl:px-24 animate-fadeIn'} onClick={() => setDisplayAside(false)}>
            <Navigation openSidebar={setDisplayAside} />
            {data && <ShoesDetails shoe={data} updateBag={setBag} />}
            {SHOE_LIST.length > 0 && <CardList data={SHOE_LIST} updateShoe={setData} />}
            <Sidebar isOpen={displayAside} closeSidebar={setDisplayAside}>
                <CardItemBag itemList={bag} />
            </Sidebar>
        </div>
    )
};