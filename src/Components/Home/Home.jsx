import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import FoodCategory from '../FoodCategory/FoodCategory';
import FoodAvailable from '../FoodAvailable/FoodAvailable';


const Home = () => {
    const homeCoverPic = "https://static01.nyt.com/images/2014/12/14/magazine/14eat1/14mag-14eat.t_CA0-jumbo.jpg?quality=75&auto=webp";
    const foods = useLoaderData();
    console.log(foods);
    const foodsToShow = foods.slice(0, 4);
    return (
        <div>

            {/* Banner section inside Home */}
            <section className='flex '>
                <div className='flex-item text-leftalligned sizing'>
                    <h1>Bringing you close to your favourite food</h1>
                    <p><small>Food lovers can indulge in a plethora of delectable choices at a restaurant, including crispy calamari appetizers, fresh salads, juicy burgers with flavorful toppings, tempting pizzas, classic pasta dishes, mouthwatering seafood, tender steaks, delicate sushi rolls, spicy Mexican cuisine, and sweet desserts. With a diverse range of food categories, there's something to please every palate and satisfy the cravings of food enthusiasts.</small></p>
                    <button>Get started</button>
                </div>


                <div className='flex-item'>
                <img src={homeCoverPic} />



                </div>


            </section>

            {/* Food category List Section inside Home */}
            <section>
                <div className='centering'>
                    <h2 className='title'>Available Food Categories</h2>
                    <small><p>Explore hundreds of food items with all the kind you need. Its your taste</p></small>
                    <div className='flex '>
                        {
                            foodsToShow.map(food=><FoodCategory
                            key={food.id}
                            food={food}
                            ></FoodCategory>)
                        }

                    </div>

                </div>
                

            </section>

            {/* Available foods showing with button for details */}
            <section>
                <div>

                    <div>

                        <h2>Available To Order</h2>
                        <small><p>Explore hundreds of food items with all the kind you need. Its your taste</p></small>

                    </div>

                    
                    <div className='grid'>
                        {
                      

                            foods.map(food=><FoodAvailable
                                key={food.id}
                                food={food}
                            ></FoodAvailable>)
                        }

                    </div>

                    

                


                </div>





            </section>
            <section className='view-more-button'>
                <button>View More</button>
                


            </section>



            





            
            
        </div>
    );
};

export default Home;