import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import SearchBar from './SearchBar';

interface NavbarProps {
    onSearch: (searchTerm: string) => void;
    cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, cartCount }) => {
    return (
        <nav className='bg-gradient-to-r from-sky-900 to-pink-800 text-text p-2 flex items-center justify-between shadow-lg sticky top-0 z-20 border-b border-primary/20'>
            <Link to='/' className='text-4xl font-extrabold text-primary hover:text-accent transition-colors duration-300 tracking-wide'>
                Book<span className='text-secondary'>Cottage</span>
            </Link>
            <div className='flex items-center space-x-8'>
                <SearchBar onSearch={onSearch} />
                <Link to='/cart' className='relative p-3 rounded-full bg-background hover:bg-primary/20 transition-colors duration-300 group transform hover:scale-110'>
                    <ShoppingCart className='h-8 w-8 text-text group-hover:text-primary transition-colors duration-300' />
                    {cartCount > 0 && (
                        <span className='absolute -top-1 -right-1 bg-accent text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center animate-bounce-once border-2 border-background'>
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
