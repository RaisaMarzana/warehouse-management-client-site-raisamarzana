import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, about, price, quantity, author, picture } = inventory;
    const navigate = useNavigate();

    const updateInventory = _id => {
        navigate(`/stock/${_id}`);
    }
    return (
        <div className='col col-12 col-md-6 col-lg-4 my-3'>
            <CardGroup className='d-flex h-100 shadow rounded'>
                <Card>
                    <Card.Img variant="top" src={picture} width='160' height='281' fluid />
                    <Card.Body >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Author: {author}</Card.Text>
                        <Card.Text>Price: ${price}</Card.Text>
                        <Card.Text>Quantity: {quantity} pieces</Card.Text>
                        <Card.Text>
                            {about}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => updateInventory(_id)} className='w-50 mx-auto m-2' variant="primary">Update</Button>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Inventory;