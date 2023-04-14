import React, { useEffect, useState } from "react";
import "./OrderedFoods.css";
import { getShoppingCart } from "../../utilities/fakedb";
import {CurrencyBangladeshiIcon, MapPinIcon} from "@heroicons/react/24/solid";

const OrderedFoods = () => {
    const banner = "https://t4.ftcdn.net/jpg/02/62/27/45/240_F_262274583_fbVsQxJVRYLgkaQHrRoxNKpMdDYmhLJD.jpg";

  const [foods, setFoodsducts] = useState([]);
  useEffect(() => {
    fetch("allfoods.json")
      .then((res) => res.json())
      .then((data) => setFoodsducts(data));
  }, []);

  //trying
//   cont [anotherFoods,setAnotherFoods] =useState(foods);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("foods", foods);

    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      console.log(id);
      let addedFood = foods.find((food) => food.id === parseInt(id));
      console.log(addedFood);

      if (addedFood) {
        const quantity = storedCart[id];
        addedFood.quantity = quantity;
        console.log(addedFood.quantity);
        savedCart.push(addedFood);
      }
    }
    setCart(savedCart);
  }, [foods]); 



  console.log(cart);


  let quantity = 0;
  for (const food of cart) {
    quantity = quantity + food.quantity;
  }

  const filteringExtra = ()=>{
    const filteredExtra = cart.filter(food => food.foodDetails.tasteBarOneAvailable === "Extra" );
    setCart(filteredExtra);
  }

  const filteringSpicy = ()=>{
    const filteredSpicy = cart.filter(food => food.foodDetails.tasteBarOneAvailable === "Spicy" );
    setCart(filteredSpicy);
  }







  return (
    <div>
        <div className="bannerOnDetails">
            <img src={banner} alt="" />
        </div>
      <h3>Ordered Foods</h3> 
      {/* for taste one */}
      <button onClick={filteringExtra}>Extra</button>
      <button onClick={filteringSpicy}>Spicy</button>



      <div>
        {cart.map((food) => (
          <div className="container-for-each">
            <div className="food-pic flex-row">
              {<img src={food.foodDetails.foodPicture} alt="" />}
            </div>
            <div className="food-name flex-row">
              <h4>{food.foodDetails.speciality}</h4>

              <p>
                {food.foodCategory} {food.foodDetails.foodName}
              </p>
              <div className="flexy">
                <div className="box">
                    <small>{food.foodDetails.tasteBarOneAvailable}</small>
                </div>
                <div className="box">
                    <small>{food.foodDetails.tasteBarTwoAvailable}</small>
                </div>
              </div>

              <div className="flex-icon">
                    <div className="icon">
                        <MapPinIcon />
                    </div>

                    
                    <div>
                        <small>Location: {food.foodDetails.location}</small>

                    </div>
                    <div className="icon">
                        <CurrencyBangladeshiIcon />
                    </div>
                    <div>
                                            
                        <small>Price: {food.foodDetails.foodPrice}</small>

                    </div>
                </div>


                


            </div>
            <div className="detail-button flex-row">
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* <p>food:{cart[0].foodCategory}</p> */}
    </div>
  );
};

export default OrderedFoods;
