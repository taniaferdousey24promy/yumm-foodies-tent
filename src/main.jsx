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
import FoodCart from './Components/FoodCart/FoodCart';
import SeeDetails from './Components/SeeDetails/SeeDetails';
import FoodAvailable from './Components/FoodAvailable/FoodAvailable';

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
        path: '/foodAvailable/:foodAvailableId',
        element: <SeeDetails></SeeDetails>,
        loader:()=>fetch ('/allfoods.json')
        // loader: async ({params}) => {
        //   const res = await fetch('/allfoods.json');
        //   const data = await res.json();
        //   const singleFood = data.find(info => info.id === params);
        //   return singleFood; // Return the found object
        // }
        

      },
      // {
      //   path:'food-cart',
      //   element:<FoodCart></FoodCart>
      // }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
