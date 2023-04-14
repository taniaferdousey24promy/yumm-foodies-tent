import React, { useEffect, useState } from 'react';
import './OrderedFoods.css'
import { getShoppingCart } from '../../utilities/fakedb';

const OrderedFoods = () => {
    const [foods, setFoodsducts] = useState([]);
    useEffect(() => {
        fetch('allfoods.json')
            .then(res => res.json())
            .then(data => setFoodsducts(data))
    }, []);

    const [cart,setCart] =useState([]);
    useEffect(() => {

        const storedCart = getShoppingCart();
        console.log(storedCart);

    },[])
    return (
        <div>
            <p>dumbo</p>
            
        </div>
    );
};

export default OrderedFoods;