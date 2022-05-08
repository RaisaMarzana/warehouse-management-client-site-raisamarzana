import React from 'react';
import { Card } from 'react-bootstrap';
import './AppSection.css'

const AppSection = () => {
    return (
        <div className='my-5'>
            <h3 className='text-center my-3'>Why you should use us</h3>
            <Card className="bg-dark text-white">
                <Card.Img src="https://i.ibb.co/4Fds2ft/why-1.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>We are leading book stock inventory service</Card.Title>
                    <Card.Text>
                        Stock of any book can be added and this will be added to you current stock number efficiently and effectively. You can also keep track of you delivered goods. When a book is delivered the amount of stocks available are decreased in click of a button. You can add new books to you inventories along with proper description and stock amount.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div >
    );
};

export default AppSection;