import React from 'react';
import './FoodAvailable.css'
import { Link } from 'react-router-dom';
// this FoodAvailable is accepting all seven foods to show in the available section

const FoodAvailable = ({food}) => {
    const {foodDetails}=food;
    console.log(foodDetails);
    const {foodName,foodPicture,placedOrders,foodPrice,tasteBarOneAvailable,tasteBarTwoAvailable,id}= foodDetails;
    console.log(food.id);
    return (
        
        <div >
            <div>

            {

                <div className='border'>
    <div>
        <div className='logo' >
        <img src={foodPicture} alt="" />
        <h3>{foodName}</h3>
        <p>Placed total {placedOrders} orders</p>
        <div className='flex'>
            <div className='bordering'>
                <p>{tasteBarOneAvailable}</p>
            </div>
            <div className='bordering'>
                <p>{tasteBarTwoAvailable}</p>
            </div>

        </div>
        
        <p><small>Price: {foodPrice}</small></p>
        <Link to={`foodAvailable/${food.id}`}><button>See details</button></Link>


        


        </div>
      
        
    </div>

                </div>


            }
                
            </div>

            

            







            
        </div>
    );
};

export default FoodAvailable;