import { ROUTES } from '../../config/constantes';

export const NavList = () => {
    return (
        <ul className="ul-element">
            {ROUTES.map((route, index) => {
                return <li 
                    className={`lg:dark:text-white z-10 lg:hover:bg-transparent lg:hover:text-blue-500 px-3 py-2 transition-all cursor-pointer rounded ${index === 0 ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500': 'hover:bg-gray-100'} ${index >= 3 ? 'lg:text-white' : ''}`} 
                    key={index}>{route}
                </li>;
            })}
        </ul>
    );
};