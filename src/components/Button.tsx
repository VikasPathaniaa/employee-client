import React from 'react';

const Button = ({title , onClick} : {title:string , onClick?:()=> void}) => {
  return (
    <>
      <span onClick={onClick} className='bg-blue-500 shadow-lg shadow-blue-500/50 p-2 text-white rounded-md cursor-pointer'>{title}</span>
    </>
  );
}

export default Button;
