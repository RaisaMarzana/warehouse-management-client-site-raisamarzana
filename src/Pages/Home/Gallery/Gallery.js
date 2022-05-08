import React from 'react';

const Gallery = () => {
    return (
        <div >
            <h3 className='text-center'>Books that go out of stock quick</h3>
            <div className="row row-cols-1 row-cols-md-2 g-0 mx-3">
                <div className="col">
                    <div className="card m-2">
                        <img src="https://i.ibb.co/TwBDZYn/rec1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">A walk to remember</h5>
                            <p className="card-text">It is a Romantic Fiction Book written by Nicolas Sparks. It is a must read book.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2">
                        <img src="https://i.ibb.co/YcMthFb/rec2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Next</h5>
                            <p className="card-text">Written by Md. Nizam Uddin. It is one of his best crime fiction book.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2">
                        <img src="https://i.ibb.co/MSzkzkP/rec3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Deyal</h5>
                            <p className="card-text">This book was about authors childhood and it is described very nicely in this book.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2">
                        <img src="https://i.ibb.co/MSzkzkP/rec3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Deyal</h5>
                            <p className="card-text">This book was about authors childhood and it is described very nicely in this book.</p>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Gallery;