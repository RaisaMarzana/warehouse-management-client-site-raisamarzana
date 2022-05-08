import React from 'react';
import { Card, Button } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';

const AllMyItems = ({ myItem }) => {
    const { _id, name, about, price, quantity, author, picture } = myItem;
    const [inventories, setInventories] = useInventory()
    const DeleteItem = _id => {

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
        <div className='col col-12 col-lg-12'>
            <Card className='shadow-sm my-3'>
                <Card.Body>
                    <Card.Title>Product: {name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                        <br />
                        Quantity: {quantity}
                        <br />
                        Author: {author}
                    </Card.Text>
                    <Button variant="primary" onClick={() => DeleteItem(_id)}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllMyItems;