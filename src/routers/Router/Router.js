import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../../pages/home/Home/About/About";
import Home from "../../pages/home/Home/Home";
import Products from "../../pages/home/Home/products/Products";
import Services from "../../pages/home/Home/services/Services";
import Login from "../../pages/pages/login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:
        [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/product',
                element:<Products></Products>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;