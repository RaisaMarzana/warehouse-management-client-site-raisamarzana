import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AllMyItems from '../AllMyItems/AllMyItems';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email
            const url = `http://localhost:5000/myitems?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyItems(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyItems()
    }, [user, myItems])
    return (
        <div className='container'>
            <h3 className='text-center'>My Items</h3>
            <div className='row'>
                {
                    myItems.map(myItem => <AllMyItems
                        key={myItem._id}
                        myItem={myItem}
                    ></AllMyItems>)
                }
            </div>
        </div>
    );
};

export default MyItems;