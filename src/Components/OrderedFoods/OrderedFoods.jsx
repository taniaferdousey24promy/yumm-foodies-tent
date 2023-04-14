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

        console.log('foods',foods);

        const storedCart = getShoppingCart();
        const savedCart =[];
        for(const id in storedCart){
            console.log(id);
            let addedFood = foods.find(food => food.id === parseInt(id));
            console.log(addedFood);
            // const quantity = storedCart[id];
            // addedFood.quantity=parseInt(quantity);
            // console.log(typeof(quantity));
            if(addedFood){
                const quantity=storedCart[id];
                addedFood.quantity =quantity;
                console.log(addedFood.quantity);
                savedCart.push(addedFood);

            }


        }
        setCart(savedCart)

    },[foods])

    console.log(cart);

    let quantity=0;
    for (const food of cart){
        quantity=quantity + food.quantity
    }
    return (
        <div>

            <h3>
                Ordered Foods


            </h3>

            <h4>
            Total Selected Food Items:{quantity}


            </h4>
 
            <div >
            {
                cart.map(food=> 

                <div className='container-for-each'>

                    <div className='food-pic flex-row'>
                        {
                            <img src={food.foodDetails.foodPicture} alt="" />

                        }
                        

                    </div>
                    <div className='food-name flex-row'>

                    {
                    food.foodDetails.foodName
                    }


                    </div>
                    <div className='detail-button flex-row'>
                        <button>View Details</button>

                    </div>
                </div>)
            }

            </div>

            {/* <p>food:{cart[0].foodCategory}</p> */}
            
        </div>
    );
};

export default OrderedFoods;