import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <div className='bg-[#22242a] '>
        <div className=' w-[70%] mx-auto flex flex-row justify-between p-7 mt-12'>
        <div className='w-[30%]'>
            <p className='text-white mb-7'> High level experience in web design and development knowledge , producing quality work.</p>
            <Button title='Get started'/>
        </div>
        <div >
            <p className='text-white my-3 font-medium'>List of Employes </p>
            <p className='text-white  my-3 '>Technology  : React, Tailwind , Node js , Mongo Db</p>
            <p className='text-white text-sm  my-3 '>Author : Vikas Singh</p>
        </div>
        </div>
    </div>
  );
}

export default Footer;
