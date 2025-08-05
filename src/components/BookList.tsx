import React from 'react';
import BookCard from './BookCard';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    price: number;
    coverImage: string;
}

interface BookListProps {
    books: Book[];
    onAddToCart: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAddToCart }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-8'>
            {books.length === 0 ? (
                <p className='col-span-full text-center text-textSecondary text-xl py-10'>
                    No books found matching your criteria. Try adjusting your search or filters!
                </p>
            ) : (
                books.map((book) => (
                    <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
                ))
            )}
        </div>
    );
};

export default BookList;
