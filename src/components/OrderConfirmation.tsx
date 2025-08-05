import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
    return (
        <div className='p-8 bg-surface rounded-xl shadow-2xl border border-border max-w-xl mx-auto my-20 text-center'>
            <CheckCircle className='h-24 w-24 text-success mx-auto mb-6 animate-bounce-in' />
            <h2 className='text-5xl font-extrabold text-primary mb-4'>Order Confirmed!</h2>
            <p className='text-text text-xl mb-8'>
                Your amazing books are on the way to deliver.
            </p>
            <p className='text-textSecondary text-lg mb-10'>
                Thank you for shopping with BookVerse. We hope you enjoy your new reads!
            </p>
            <Link to='/'>
                <button className='bg-accent text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-primary transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface shadow-lg'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
};

export default OrderConfirmation;
