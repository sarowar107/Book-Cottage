import React from 'react';

interface FilterProps {
    genres: string[];
    authors: string[];
    onFilterGenre: (genre: string) => void;
    onFilterAuthor: (author: string) => void;
}

const Filter: React.FC<FilterProps> = ({ genres, authors, onFilterGenre, onFilterAuthor }) => {
    return (
        <div className='bg-surface p-6 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 border border-border'>
            <div className='flex-grow w-full md:w-auto'>
                <label htmlFor='genre-filter' className='sr-only'>Filter by Genre</label>
                <select
                    id='genre-filter'
                    onChange={(e) => onFilterGenre(e.target.value)}
                    className='w-full p-3 bg-background border border-border rounded-lg text-text text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 appearance-none cursor-pointer'
                >
                    <option value=''>All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            <div className='flex-grow w-full md:w-auto'>
                <label htmlFor='author-filter' className='sr-only'>Filter by Author</label>
                <select
                    id='author-filter'
                    onChange={(e) => onFilterAuthor(e.target.value)}
                    className='w-full p-3 bg-background border border-border rounded-lg text-text text-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 appearance-none cursor-pointer'
                >
                    <option value=''>All Authors</option>
                    {authors.map((author) => (
                        <option key={author} value={author}>
                            {author}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
