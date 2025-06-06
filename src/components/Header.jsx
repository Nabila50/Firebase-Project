import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3'>
           <img className='w-[400px]' src={logo} alt="" />
           <p className='text-accent'>Journalism without fear or favour</p>
           <p className='text-accent font-semibold'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;