import React from 'react';
import { InitialStateTypes } from '../type';

const FormHeading = ({ editableData }: { editableData: InitialStateTypes }) => {
  return (
    <div className='w-full mx-auto flex justify-center items-center rounded mt-3 '>
      <p className='text-xl sm:text-2xl md:text-3xl p-4 underline'>{editableData ? "Update Your" : "Get an"} Estimate for Workspace</p>
    </div>
  );
}

export default FormHeading;
