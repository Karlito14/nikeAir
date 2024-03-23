const ROUTES = ['Accueil', 'A propos', 'Services', 'Prix', 'Contact'];

export const NavList = () => {
    return (
        <ul className="bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 flex flex-col lg:flex-row lg:border-none lg:bg-transparent lg:space-x-8">
            {ROUTES.map((route, index) => {
                return <li 
                    className={`lg:hover:bg-transparent lg:hover:text-blue-500 px-3 py-2 transition-all cursor-pointer rounded ${index === 0 ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500': 'hover:bg-gray-100'} ${index >= 3 ? 'lg:text-white' : ''}`} 
                    key={index}>{route}
                </li>
            })}
        </ul>
    )
};