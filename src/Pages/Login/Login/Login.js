import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            toast('Reset email send');
            await sendPasswordResetEmail(email);
        }
        else {
            toast('Please enter your email address');
        }
    }
    if (loading) {
        return <Loading></Loading>
    }


    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col col-lg-6 col-sm-8 container w-25 mx-auto '>
                        <h2 className='text-dark text-center m-3'>Login to your account</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="m-3" controlId="formBasicEmail">
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <Form.Group className="m-3" controlId="formBasicPassword">
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                                Login
                            </Button>
                        </Form>
                        {errorElement}
                        <p className='text-center'>Don't have an account ? <CustomLink to="/register" className='text-primary pe-auto text-decoration-none'>Register Now</CustomLink> </p>
                        <p className='text-center'><Button onClick={resetPassword} className='btn btn-primary border pe-auto text-decoration-none'>Forget Password?</Button></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;