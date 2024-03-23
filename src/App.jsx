import { Navigation } from './components/Navigation/Navigation';
import { ShoesDetails } from './components/ShoesDetails/ShoesDetails';
import shoesImg from './assets/n1-min.png';
import { useState } from 'react';

export const App = () => {
    const [image, setImage] = useState(shoesImg)
    return (
        <div className='p-10 xl:px-24'>
            <Navigation />
            <ShoesDetails img={image} />
        </div>
    )
};