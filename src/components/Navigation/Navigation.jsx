import logo from '../../assets/nike-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TbShoppingBag } from 'react-icons/tb';
import { NavList } from '../NavList/NavList';
import { useState } from 'react';

export const Navigation = () => {
    const [displayNav, setDisplayNav] = useState(true);
    return (
        <header className='flex flex-wrap justify-between items-center'>
            <a href='#'>
                <img src={logo} alt='logo Nike' className='h-20 w-20' />
            </a>
            <button className='button-menu' onClick={() => setDisplayNav(!displayNav)}>
                <RxHamburgerMenu size={25} />
            </button>
            <nav className={`${!displayNav ? 'hidden' : '' }hidden w-full lg:w-auto lg:block`}>
                <NavList />
            </nav>
            <div className='button-bag lg:mr-8 btn-press-animation z-10'>
                <TbShoppingBag />
            </div>
        </header>
    )
};