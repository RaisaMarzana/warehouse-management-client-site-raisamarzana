import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [inventory, setInventory] = useState([])
    const [reload, setReload] = useState(0)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const url = `http://localhost:5000/stock/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInventory(data)
                setQuantity(inventory.quantity)
            })

    }, [reload, inventory])

    const handleDeliver = () => {
        const quantity = inventory.quantity
        const newQuantity = { quantity: quantity - 1 }
        const url = `http://localhost:5000/stock/${_id}`
        axios.put(url, newQuantity)
        setReload(reload + 1)
    }


    const handleNewQuantity = event => {
        event.preventDefault()
        const quantity = inventory.quantity
        const newQuantityValue = event.target.quantity.value;
        const newQuantity = { quantity: parseInt(quantity) + parseInt(newQuantityValue) }
        const url = `http://localhost:5000/stock/${_id}`
        axios.put(url, newQuantity)
        setReload(reload + 1)
        event.target.reset();
    }

    const viewInventory = () => {
        navigate('/stock');
    }

    return (
        <div className='container'>
            <div>
                <h3 className='my-2 text-center'>Update Inventory</h3>
                <div className='d-flex justify-end my-1'>
                    <button onClick={viewInventory} className='btn btn-primary'>Manage Inventory</button>
                </div>
                <div className="card my-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={inventory.picture} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{inventory.name}</h5>
                                <p className="card-text">Author: {inventory.author}</p>
                                <p className="card-text">Price: ${inventory.price}</p>
                                <p className="card-text">Quantity: {reload > 0 ? quantity : inventory.quantity} pieces</p>
                                <p className="card-text">{inventory.about}</p>
                            </div>
                            <button onClick={handleDeliver} className='btn btn-primary ms-3'>Delivered</button>

                            <form onSubmit={handleNewQuantity}>
                                <label className='ms-3 form-label'>
                                    Restock the item:
                                    <div className=' d-flex'>
                                        <input className='w-50 form-control' name='quantity' placeholder='Amount' />
                                        <input className='btn btn-primary ms-3' type="submit" value="Restock" />
                                    </div>
                                </label>

                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default InventoryDetail;