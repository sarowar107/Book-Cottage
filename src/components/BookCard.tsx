import React from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    price: number;
    coverImage: string;
}

interface BookCardProps {
    book: Book;
    onAddToCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
    return (
        <div className='bg-surface rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-border/50'>
            <img src={book.coverImage} alt={book.title} className='w-full h-64 object-cover' />
            <div className='p-5 flex flex-col flex-grow'>
                <h3 className='text-2xl font-semibold text-text mb-1 leading-tight'>{book.title}</h3>
                <p className='text-textSecondary text-base mb-3'>By {book.author}</p>
                <p className='text-accent text-2xl font-bold mt-auto'>${book.price.toFixed(2)}</p>
                <button
                    onClick={() => onAddToCart(book)}
                    className='mt-5 bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface shadow-md'
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookCard;
