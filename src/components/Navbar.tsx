import React from 'react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='shadow-lg sticky top-0 w-full bg-white z-50'>
        <div className='w-[80%] mx-auto flex justify-between items-center '>
         <div> <Link to="/" ><img src={Logo} alt='image not found ' width={100} height={100}/> </Link></div>
        <div><Link to="/employes"><span className='bg-blue-500 shadow-lg shadow-blue-500/50 p-2 text-white rounded-md cursor-pointer'>List Of Employes</span></Link></div>
        </div>
    </div> 
  );
}

export default Navbar;