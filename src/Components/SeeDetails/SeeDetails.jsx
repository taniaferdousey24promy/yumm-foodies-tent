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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SeeDetails() {
  const { foodAvailableId } = useParams();
  console.log(foodAvailableId);

  const foods = useLoaderData();
  console.log(foods);

  let singleFood = foods.find((food) => food.id === parseInt(foodAvailableId));
  console.log(singleFood);

  const banner ="https://t4.ftcdn.net/jpg/02/62/27/45/240_F_262274583_fbVsQxJVRYLgkaQHrRoxNKpMdDYmhLJD.jpg";


  const handleAddToDb = (singleFood)=>{
    addToDb(singleFood.id);
    toast("Added to the Ordered Food Cart");
  }
  return (
    <div>
      <div className="bannerOnDetails">
        <img  src={banner} alt="" />
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
            <button onClick={()=>handleAddToDb(singleFood)}>Order Now</button>
            <div className="toastify-shape">
            <ToastContainer />


            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeDetails;
