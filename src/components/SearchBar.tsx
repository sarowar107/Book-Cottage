import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className='relative flex items-center w-full max-w-md'>
            <input
                type='text'
                placeholder='Search books, authors...'
                value={searchTerm}
                onChange={handleChange}
                className='w-full p-3 pl-12 bg-background border border-border rounded-full text-text text-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-colors duration-200 shadow-inner'
            />
            <Search className='absolute left-4 text-textSecondary h-6 w-6' />
        </div>
    );
};

export default SearchBar;
