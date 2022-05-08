import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    // if (user) {
    //     navigate(from, { replace: true });
    // }

    const handleSignIn = async e => {
        await signInWithGoogle()
        const accessToken = async user => {
            const { data } = await axios.post('http://localhost:5000/login')
            localStorage.setItem('accessToken', data.accessToken)
            navigate(from, { replace: true });
            console.log(user?.email)
        }
        accessToken()
    }



    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <h6 className='text-center'>Login using</h6>
            {errorElement}
            <div className='d-flex justify-content-around'>
                <button onClick={handleSignIn} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className=" w-25 inline-block px-6 py-2.5 mb-5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-gray-300">
                    <h6 className='mt-2 text-black'>Google</h6>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;