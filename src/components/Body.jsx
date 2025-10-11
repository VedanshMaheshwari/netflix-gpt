import React from 'react'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Login from '../pages/Login.jsx'
import Browse from '../pages/Browse.jsx' // Added missing import

const Body = () => {

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

    return(
        <div>
            <RouterProvider router={appRouter}/> 
        </div>
    )

}

export default Body;
