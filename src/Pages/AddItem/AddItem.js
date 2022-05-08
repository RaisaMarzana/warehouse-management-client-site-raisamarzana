import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleAddNewItem = event => {
        event.preventDefault();
        const newItem = {
            email: user?.email,
            picture: event.target.picture.value,
            name: event.target.name.value,
            author: event.target.author.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            about: event.target.about.value,
        }
        axios.post('https://blooming-beyond-59766.herokuapp.com/stock', newItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('New item added. Check Stocks')
                    event.target.reset();
                }
            })


    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add new Item</h2>
            <form className='d-flex flex-column' onSubmit={handleAddNewItem}>
                <label >Adding as: {user?.email}</label>
                <label className='form-label'>
                    Picture: <br />
                    <input className='mb-2 w-100 form-control' placeholder='Only URL are acceptable' name='picture' />
                </label>
                <label className='form-label'>
                    Product Name: <br />
                    <input className='mb-2 w-100 form-control' name='name' required />
                </label>
                <label className='form-label'>
                    Author: <br />
                    <input className='mb-2 w-100 form-control' name='author' required />
                </label>
                <label className='form-label'>
                    Price: <br />
                    <input className='mb-2 w-100 form-control' type="number" name='price' required />
                </label>
                <label className='form-label'>
                    Quantity: <br />
                    <input className='mb-2 w-100 form-control' type="number" name='quantity' required />
                </label>
                <label className='form-label'>
                    About: <br />
                    <textarea className='mb-2 w-100 form-control' name='about' required />
                </label>
                <input className='btn btn-primary my-2' type='submit' />
            </form>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default AddItem;