import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend
        console.log('Order Confirmed with Address:', formData);
        navigate('/order-confirmation');
    };

    return (
        <div className='p-8 bg-surface rounded-xl shadow-2xl border border-border max-w-2xl mx-auto my-10'>
            <h2 className='text-4xl font-extrabold text-primary mb-8 border-b-2 border-accent pb-4 text-center'>
                Shipping Information
            </h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor='fullName' className='block text-text text-lg font-semibold mb-2'>
                        Full Name
                    </label>
                    <input
                        type='text'
                        id='fullName'
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleChange}
                        className='w-full p-4 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='addressLine1' className='block text-text text-lg font-semibold mb-2'>
                        Address Line 1
                    </label>
                    <input
                        type='text'
                        id='addressLine1'
                        name='addressLine1'
                        value={formData.addressLine1}
                        onChange={handleChange}
                        className='w-full p-4 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='addressLine2' className='block text-text text-lg font-semibold mb-2'>
                        Address Line 2 (Optional)
                    </label>
                    <input
                        type='text'
                        id='addressLine2'
                        name='addressLine2'
                        value={formData.addressLine2}
                        onChange={handleChange}
                        className='w-full p-4 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200'
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div>
                        <label htmlFor='city' className='block text-text text-lg font-semibold mb-2'>
                            City
                        </label>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                            className='w-full p-4 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='state' className='block text-text text-lg font-semibold mb-2'>
                            State
                        </label>
                        <input
                            type='text'
                            id='state'
                            name='state'
                            value={formData.state}
                            onChange={handleChange}
                            className='w-full p-4 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='zipCode' className='block text-text text-lg font-semibold mb-2'>
                            Zip Code
                        </label>
                        <input
                            type='text'
                            id='zipCode'
                            name='zipCode'
                            value={formData.zipCode}
                            onChange={handleChange}
                            className='w-full p-4 bg-background border border-border rounded-lg text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200'
                            required
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='w-full bg-accent text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-primary transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface shadow-lg'
                >
                    Confirm Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
