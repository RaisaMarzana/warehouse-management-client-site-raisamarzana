import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-dark text-center m-2'>Questions and Answer</h1>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 1: Difference between Javascript and Nodejs</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                JavaScript is a programming language. It is running in any web browser with a proper browser engine. Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.
                            </p>
                            <p>
                                Nodejs is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately. t mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 2: When should you use nodejs and when should you use mongodb ?</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node JS.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 3: Differences between SQL and NoSQL databases.</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                SQL programming can be effectively used to insert, search, update, delete database records.. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.
                            </p>
                            <p>
                                NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
                <Card className='m-5'>
                    <Card.Header className='fw-bold'>Question 4: What is the purpose of jwt and how does it work ?</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                JWT, or JSON Web Token, is an open standard used to share security information between two parties - a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default Blogs;