import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, Trash2 } from 'lucide-react'; // Import icons for close and delete

interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    coverImage: string;
}

interface ShoppingCartProps {
    cartItems: Book[];
    onRemoveItem: (id: number) => void; // New prop for removing items
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems, onRemoveItem }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='p-6 bg-surface rounded-xl shadow-2xl border border-border relative'>
            <div className='flex justify-between items-center mb-6 border-b-2 border-accent pb-2'>
                <h2 className='text-4xl font-extrabold text-primary'>Your Shopping Cart</h2>
                <Link to='/' className='text-textSecondary hover:text-accent transition-colors duration-300'>
                    <button className='flex items-center px-4 py-2 bg-background rounded-lg text-lg font-semibold hover:bg-primary/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface'>
                        <XCircle className='h-6 w-6 mr-2' /> Continue Shopping
                    </button>
                </Link>
            </div>

            {cartItems.length === 0 ? (
                <p className='text-textSecondary text-xl text-center py-12 animate-fade-in'>
                    Your cart is empty. Explore our amazing collection and add some books!
                </p>
            ) : (
                <>
                    <div className='space-y-6 max-h-[60vh] overflow-y-auto pr-2'> {/* Added max-height and scroll */}
                        {cartItems.map((item) => (
                            <div key={item.id} className='flex items-center bg-background p-5 rounded-lg shadow-md border border-border/50 transform transition-transform duration-300 hover:scale-[1.01]'>
                                <img src={item.coverImage} alt={item.title} className='w-24 h-24 object-cover rounded-lg mr-6 shadow-sm' />
                                <div className='flex-grow'>
                                    <h3 className='text-2xl font-semibold text-text mb-1'>{item.title}</h3>
                                    <p className='text-textSecondary text-base'>By {item.author}</p>
                                </div>
                                <div className='flex items-center space-x-4'>
                                    <p className='text-accent text-2xl font-bold'>${item.price.toFixed(2)}</p>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className='p-2 rounded-full bg-error/20 text-error hover:bg-error hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background'
                                        title='Remove item'
                                    >
                                        <Trash2 className='h-6 w-6' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-10 pt-6 border-t-2 border-border flex justify-between items-center'>
                        <p className='text-3xl font-bold text-text'>Total:</p>
                        <p className='text-4xl font-extrabold text-primary'>${total.toFixed(2)}</p>
                    </div>
                    <Link to='/checkout'>
                        <button className='mt-8 w-full bg-accent text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-primary transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface shadow-lg'>
                            Proceed to Checkout
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
