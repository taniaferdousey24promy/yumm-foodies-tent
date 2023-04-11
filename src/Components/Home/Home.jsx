import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const homeCoverPic = "https://images.unsplash.com/photo-1548370003-c17e7f080a06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    const foods = useLoaderData();
    console.log(foods);
    return (
        <div>
            <div>
                <h1>Bringing you close to your favourite food</h1>
            </div>
            <div>
                <img src={homeCoverPic} />



            </div>

            
            
        </div>
    );
};

export default Home;