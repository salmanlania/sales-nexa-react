import React, {useEffect} from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../pages/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";
import Error from "../pages/Error.jsx";
import Tasks from "../pages/Tasks.jsx";
import Contact from "../pages/Contact.jsx";
import GoogleMap from "../pages/GoogleMap.jsx";
// import LinkedinScrapping from "../pages/LinkedinScrapping.jsx";
import LinkedinScrapper from "../pages/LinkedinScrapper.jsx";
import EmailAutomation from "../pages/EmailAutomation.jsx";
import WhatsappAutomation from "../pages/WhatsappAutomation.jsx";
import Services from "../pages/Services.jsx";
import Footer from "../pages/Footer.jsx"

function isAuthenticated() {
    return !!localStorage.getItem("token");
  }
  
  function AuthenticatedRoute({ element }) {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isAuthenticated()) {
        navigate("/login");
      }
    }, []);
  
    return <>{element}</>;
  }

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/tasks',
                element: <Tasks />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/google-map',
                element: <AuthenticatedRoute element={<GoogleMap />} />
            },
            {
                path: '/linkedin-scrapping',
                element: <AuthenticatedRoute element={<LinkedinScrapper />} />
            },
            {
                path: '/service',
                element: <Services />,
            },
            {
                path: '/email-automation',
                element: <AuthenticatedRoute element={<EmailAutomation />} />
            },
            {
                path: '/whatsapp-automation',
                element: <AuthenticatedRoute element={<WhatsappAutomation />} />
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
    const location = useLocation();
    return (
        <div>
            {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />}
            <Outlet />
            {location.pathname !== '/google-map' && location.pathname !== '/linkedin-scrapping' && location.pathname !== '/email-automation' && location.pathname !== '/whatsapp-automation' && location.pathname !== '/tasks' && location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/contact' && <Footer />}
            {/* <Footer /> */}
        </div>
    )
}
export default Router