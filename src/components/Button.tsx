import React from 'react';
import Spinner from "../components/Spinner"
 
const Button = ({title , onClick , spinner} : {title:string , onClick?:()=> void , spinner?:boolean}) => {
  return (
    <>
      <span onClick={onClick} className='bg-blue-500 shadow-lg flex flex-row shadow-blue-500/50 p-2 text-white rounded-md cursor-pointer gap-4 w-max hover:text-blue-500 hover:bg-white'>{title }  <Spinner visible={spinner || false}  height={"20"} width={"20"}/></span>

    </>
  );
}

export default Button;
