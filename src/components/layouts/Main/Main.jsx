import React from 'react';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            This is main layout
             <Outlet></Outlet>
        </div>
    );
};

export default Main;