import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import OrderFood from './Components/OrderFood/OrderFood';
import FoodCart from './Components/FoodCart/FoodCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch ('allfoods.json')
      },

      {
        path:'order-food',
        element:<OrderFood></OrderFood>
      },
      {
        path:'food-cart',
        element:<FoodCart></FoodCart>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
