import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Filter from './components/Filter';
import ShoppingCart from './components/ShoppingCart';
import CheckoutForm from './components/CheckoutForm'; // New import
import OrderConfirmation from './components/OrderConfirmation'; // New import
import { books } from './constants/books';

import './index.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [genreFilter, setGenreFilter] = useState('');
    const [authorFilter, setAuthorFilter] = useState('');
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [filteredBooks, setFilteredBooks] = useState(books);

    useEffect(() => {
        let results = books;

        if (searchTerm) {
            results = results.filter(
                (book) =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (genreFilter) {
            results = results.filter((book) => book.genre === genreFilter);
        }

        if (authorFilter) {
            results = results.filter((book) => book.author === authorFilter);
        }

        setFilteredBooks(results);
    }, [searchTerm, genreFilter, authorFilter]);

    const handleAddToCart = (book: any) => {
        setCartItems((prevItems) => [...prevItems, book]);
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const handleFilterGenre = (genre: string) => {
        setGenreFilter(genre);
    };

    const handleFilterAuthor = (author: string) => {
        setAuthorFilter(author);
    };

    const genres = [...new Set(books.map((book) => book.genre))];
    const authors = [...new Set(books.map((book) => book.author))];

    return (
        <Router>
            <div className='bg-background text-text min-h-screen'>
                <Navbar onSearch={handleSearch} cartCount={cartItems.length} />
                <div className='container mx-auto p-4'>
                    <Filter
                        genres={genres}
                        authors={authors}
                        onFilterGenre={handleFilterGenre}
                        onFilterAuthor={handleFilterAuthor}
                    />
                    <Routes>
                        <Route
                            path='/'
                            element={<BookList books={filteredBooks} onAddToCart={handleAddToCart} />}
                        />
                        <Route
                            path='/cart'
                            element={<ShoppingCart cartItems={cartItems} onRemoveItem={handleRemoveFromCart} />}
                        />
                        <Route path='/checkout' element={<CheckoutForm />} /> {/* New Route */}
                        <Route path='/order-confirmation' element={<OrderConfirmation />} /> {/* New Route */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
