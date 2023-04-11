import React from 'react';
import { FireIcon } from '@heroicons/react/24/solid'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'




import './Beaker.css';


const Beaker = ({food}) => {
    const {foodCategory} = food;
    console.log(foodCategory);

    return (
        <div>
            {
                foodCategory === "French"  && <CakeIcon/>
            }
            {
                        
                foodCategory === "Japanese"  && <SparklesIcon/>
            }
            {
                foodCategory === "Spanish"  && <FireIcon/>
            }
            {
                foodCategory === "Mexican"  && <HandThumbUpIcon/>
            }


            


            
        </div>
    );
};

export default Beaker;