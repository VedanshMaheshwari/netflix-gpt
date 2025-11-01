import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import {auth} from '../utils/firebase.js';
import Login from '../pages/Login.jsx'
import Browse from '../pages/Browse.jsx' // Added missing import
import { addUser, removeUser } from '../utils/useSlice.js';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
            children: [],
        },
        {
            path: "/Browse",
            element: <Browse />
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, name: displayName}));
         
            // ...
        } else {
            // User is signed out
            dispatch(removeUser());

            // ...
        }
        });
    }, []);

    return(
        <div>
            <RouterProvider router={appRouter}/> 
        </div>
    )

}

export default Body;
