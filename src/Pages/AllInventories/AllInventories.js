import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventories from '../ManageInventories/ManageInventories';

const AllInventories = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/stock`)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [inventories])





    return (
        <div className='container'>
            <div className='d-flex justify-content-between my-3'>
                <h3 className='text-center'>Full Inventory</h3>
                <Link to='/additem' className='btn btn-primary '>Add New Item</Link>
            </div>

            <div className='row'>
                {
                    inventories.map(inventory => <ManageInventories
                        key={inventory._id}
                        inventory={inventory}
                    ></ManageInventories>)
                }
            </div>
        </div>
    );
};

export default AllInventories;