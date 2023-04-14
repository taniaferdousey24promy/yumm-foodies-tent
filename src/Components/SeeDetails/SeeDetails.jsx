import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  CakeIcon,
  CurrencyBangladeshiIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

import "./SeeDetails.css";
import { addToDb } from "../../utilities/fakedb";
import OrderedFoods from "../OrderedFoods/OrderedFoods";

function SeeDetails() {
  const { foodAvailableId } = useParams();
  console.log(foodAvailableId);

  const foods = useLoaderData();
  console.log(foods);

  let singleFood = foods.find((food) => food.id === parseInt(foodAvailableId));
  console.log(singleFood);

  const banner =
    "https://cdn.shopify.com/s/files/1/2331/4061/files/Copy_of_Copy_of_Short_Bread_Banner_480x480.png?v=1661774905";


  const handleAddToDb = (singleFood)=>{
    addToDb(singleFood.id);
  }
  return (
    <div>
      <div className="bannerOnDetails">
        <img src={banner} alt="" />
      </div>

      <h3>Food Details</h3>

      <div className="flex-big">
        <div className="description-part">
          <p><strong>Food Description: </strong>{singleFood.foodDetails.foodDescription}</p>
          <p><strong>Food Ingridients: </strong>{singleFood.foodDetails.ingridients}</p>
          <p><strong>Dietary Preferences:</strong>{singleFood.foodDetails.dietaryPreferences}</p>
          <p><strong>Allergen Information:</strong>{singleFood.foodDetails.allergenInformation}</p>
        </div>

        <div className="details-card-with-button">
            <div className="details-card">
                
                <h3>Details</h3>
                <hr />

                <div className="flex">
                    <div className="icon">
                        <CurrencyBangladeshiIcon />
                    </div>

                    <div>
                    <p>Price: {singleFood.foodDetails.foodPrice} tk</p>
                    </div>
                </div>


                <div className="flex">
                    <div className="icon">
                    <FaceSmileIcon />
                    </div>

                    <div>
                    <p>Food Item: {singleFood.foodDetails.foodName}</p>
                    </div>
                </div>

                <h3>Contact Information</h3>
                <hr />

                <div className="flex">
                    <div className="icon">
                    <PhoneIcon />
                    </div>

                    <div>
                    <p>Phone Number: {singleFood.foodDetails.phone}</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="icon">
                    <EnvelopeIcon />
                    </div>

                    <div>
                    <p>Email: {singleFood.foodDetails.email}</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="icon">
                    <MapIcon />
                    </div>

                    <div>
                    <p>Location : {singleFood.foodDetails.location}</p>
                    </div>
                </div>
            </div>

          <div className="order-button">
            <Link to='/foodOrdering'><button onClick={()=>handleAddToDb(singleFood)}>Order Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeDetails;
