import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import { getCartAndProductData } from '../Loaders/GetCartAndProductData';
import Root from '../Root/Root';
import About from './About';
import Cart from './Cart';
import Home from './Home';
import Shop from './Shop';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            loader:getCartAndProductData,
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
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
                    path:'/shop',
                    element:<Shop></Shop>
                },
                {
                    path:'/cart',
                    element:<Cart></Cart>
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;