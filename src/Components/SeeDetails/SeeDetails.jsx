import { useLoaderData, useParams } from 'react-router-dom';
import './SeeDetails.css'

function SeeDetails () {
    const {foodAvailableId} =useParams();
    console.log(foodAvailableId);

    const foods = useLoaderData();
    console.log(foods);

    let singleFood = foods.find(food => food.id === parseInt(foodAvailableId));
    console.log(singleFood);
    
    const banner = "https://cdn.shopify.com/s/files/1/2331/4061/files/Copy_of_Copy_of_Short_Bread_Banner_480x480.png?v=1661774905";








    return (


        <div>
            <div className='bannerOnDetails'>

                <img src={banner} alt="" />


            </div>

            <h3>Food Details</h3>
            <div>
                <div>


                </div>
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>

                    

            {/* <button>Apply Now{singleFood.foodDetails.foodName}</button> */}

        </div>
)};

export default SeeDetails;