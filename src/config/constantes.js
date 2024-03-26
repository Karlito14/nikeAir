import nike1 from '../assets/n1-min.png';
import nike2 from '../assets/n2-min.png';
import nike3 from '../assets/n3-min.png';
import nike4 from '../assets/n4-min.png';

const SIZE = [40, 41, 42, 43, 44, 45];
const QUANTITY = [1, 2, 3, 4, 5];
const ROUTES = ['Accueil', 'A propos', 'Services', 'Prix', 'Contact'];
const SHOE_LIST = [
    {
        id: 1,
        src: nike1,
        className: 'bg-[#EEFFA4]',
        title: 'Nike Air Max 270',
        description:
        'La Nike Air Max 270 est une chaussure lifestyle qui ne manquera pas de faire tourner les têtes avec son dégradé de couleurs vibrantes.',
        price: 160,
    },
    {
        id: 2,
        src: nike2,
        className: 'bg-[#DDCEFD]',
        title: 'Nike Air Vapor',
        description:
        'La Nike Air Vapor est une chaussure élégante et stylée, parfaite pour toutes les occasions. C\'est la chaussure idéale pour tout style de vie actif.',
        price: 100,
    },
    {
        id: 3,
        src: nike3,
        className: 'bg-[#DAFFA2]',
        title: 'Nike Air Max 2090',
        description:
        'La Nike Air Max 2090 est une chaussure à la fois élégante et confortable. C\'est la chaussure parfaite pour tout individu à la pointe de la mode.',
        price: 150,
    },
    {
        id: 4,
        src: nike4,
        className: 'bg-[#FCC4EA]',
        title: 'Nike Air Blazer',
        description:
        'La Nike Air Blazer est une chaussure classique, parfaite pour toutes les occasions décontractées. C\'est la chaussure idéale pour tout individu décontracté.',
        price: 110,
    },
];

export { SIZE, QUANTITY, ROUTES, SHOE_LIST };
