import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import { useState, useEffect } from "react";

import Navbar from "../pages/Navbar.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import Error from "../pages/Error.jsx";
import Notification from "../pages/Notification.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/notification',
                element: <Notification />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/*',
                element: <Error />,
            },
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (

        <div >
            
            <Navbar />
            <Outlet />
        </div>

    )
}
// Main()
export default Router