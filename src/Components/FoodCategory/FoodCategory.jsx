import React from 'react';
import './FoodCategory.css'
import Beaker from '../Beaker/Beaker';

// this FoodCategory is accepting only four foods to show in the category section
const FoodCategory = ({food}) => {
    const {foodCategory,numberOfOrdersTaken,id}=food;
    // console.log(foodCategory);
    return (
        <div >
            {
                <div className='div-style'>
                    <div className='size-beaker'>
                        
                        <Beaker food={food}/>

                        


                    </div>
                    
                    


                    
   
                    <h3>{foodCategory}</h3>
                    <small>{numberOfOrdersTaken} times placed order to our customers</small>


                    

                </div>
            }




            
        </div>
    );
};

export default FoodCategory;