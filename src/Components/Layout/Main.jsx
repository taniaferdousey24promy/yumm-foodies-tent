import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header><p>Halo</p></Header>
            <Outlet></Outlet>



            
        </div>
    );
};

export default Main;