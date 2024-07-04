import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Error from "../components/Error";
import Root from "../Root/Root";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
            , {
                path: '/portfolio',
                element: <Portfolio />
            }
        ],
    },


]);