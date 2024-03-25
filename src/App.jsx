import { CardList } from './components/CardList/CardList';
import { Navigation } from './components/Navigation/Navigation';
import { ShoesDetails } from './components/ShoesDetails/ShoesDetails';
import { SHOE_LIST } from './config/constantes';
import { useState } from 'react';

export const App = () => {
    const [data, setData] = useState(SHOE_LIST[0]);
    return (
        <div className='p-10 xl:px-24 animate-fadeIn'>
            <Navigation />
            {data && <ShoesDetails shoe={data} />}
            {SHOE_LIST.length > 0 && <CardList data={SHOE_LIST} />}
        </div>
    )
};