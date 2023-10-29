import React from 'react';
import { Bars } from  'react-loader-spinner'

const Spinner = ({height , width , visible } : {height: string , width: string , visible:boolean}) => {
  return (
    <>
      <Bars
  height={height}
  width={width}
  color="black"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={visible}
/>
    </>
  );
}

export default Spinner;
