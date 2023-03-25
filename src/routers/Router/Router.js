import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Checkout from "../../pages/checkout/Checkout";
import About from "../../pages/home/Home/About/About";
import Home from "../../pages/home/Home/Home";
import Products from "../../pages/home/Home/products/Products";
import Services from "../../pages/home/Home/services/Services";
import Login from "../../pages/pages/login/Login";
import Singup from "../../pages/pages/singup/Singup";

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
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader:({params})=>{
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            }
        ]
    }
])

export default router;