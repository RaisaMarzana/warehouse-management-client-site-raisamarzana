import React from 'react';
import useInventory from '../../hooks/useInventory';

const ManageInventories = ({ inventory }) => {
    const [inventories, setInventories] = useInventory()
    const { _id, name, price, quantity, author, picture, about } = inventory;


    const deleteItem = _id => {
        const check = window.confirm('Do you really want to delete ?')
        if (check) {
            const url = `https://blooming-beyond-59766.herokuapp.com/stock/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .them(data => {
                    const inventoriesLeft = inventories.filter(inventory => inventory._id !== _id)
                    setInventories(inventoriesLeft)
                })
        }
    }
    return (
        <div className='col col-12 my-2'>
            <div className="card my-3">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Author: {author}</p>
                            <p className="card-text">Price: ${price}</p>
                            <p className="card-text">Quantity: {quantity} pieces</p>
                            <p className="card-text">{about}</p>
                        </div>
                        <button onClick={() => deleteItem(_id)} className='ms-3 mb-3 btn btn-primary' >Delete</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ManageInventories;