import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='background flex'>
            <h3>Yumm Foodies Tent</h3>
            <div className='flex-grow '>

                <small><Link className='margin' to = "/">Home </Link></small>
                <small><Link className='margin'to = "/order-food">Order </Link></small>
                <small><Link className='margin'to = "/food-cart"> Cart</Link></small>

            
            
            

            </div>

            <button>Start Ordering</button>
        </nav>

    );
};

export default Header;