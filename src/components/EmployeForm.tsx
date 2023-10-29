import React, { useState } from 'react';
import FormHeading from './FormHeading';
import Button from './Button';
import { MdDelete } from 'react-icons/md';
import { postRequest } from '../config/makeRequests';


const initialState = {
    employeId: undefined,
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    designation: "",
    joiningDate: "",
    gender: "",
    experience: [
        {
            id: Math.floor(Math.random() * 60),
            companyName: "",
            experienceDesignation: "",
            timePeriod: ""
        },
    ]
}

const EmployeForm = () => {

    const [formData, setFormData] = useState(initialState)




    // input Change Handler 
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })

    }

    //handle Experience Change 

    const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const { name, value } = event.target;
        console.log("name", name, value)
        const findObject = formData.experience.map((item, index) => {
            if (item.id == id) {
                return { ...item, [name]: value }
            }
            return item
        });
        console.log(findObject)
        setFormData({
            ...formData, experience: findObject
        })
    }
    // add Experiemce Column 
    const addExperience = () => {
        setFormData({
            ...formData, experience: [...formData.experience, {
                id: Math.floor(Math.random() * 60),
                companyName: "",
                experienceDesignation: "",
                timePeriod: ""
            }]
        })
    }

    // Remove Experience Column
    const removeExperence = (id: number) => {
        const filteredData = formData.experience.filter((item) => {
            return item.id != id

        })
        setFormData({ ...formData, experience: filteredData })
    }

    // submnit hanlde 

    const submitHandle = async () => {
        let response = await postRequest('/addemployeinfo', formData)
        console.log(response.data)
        setFormData(initialState)
    }
    return (
        <div>
            <FormHeading />
            <div className='w-[45%] mx-auto mt-16'>
                <div className='text-center w-[50%] mx-auto my-5'>
                    <p className='font-medium'>Post Your Requirements</p>
                    <p className='text-gray text-sm'>Please fill the form below to receive a quote for workspace. Please add all the details required.</p>
                </div>
                <div className='bg-[#faf8f8] p-4 rounded-md'>
                    <div className='border-l-neutral-600 border-b-2 my-2 p-8'>
                        <p className='font-medium'>Contact details</p>
                        <p className='text-sm'>Please fill your information so we can get in touch with you.</p>
                    </div>
                    <form>
                        <div className='my-7'>
                            <label className='mt-2'>Employee Id</label>
                            <input name="employeId" onChange={onChangeHandler} value={formData.employeId} className='block rounded-3xl shadow-lg outline-none p-3' type='text' placeholder='101' />
                        </div>
                        <div className='my-7'>
                            <label className='mt-2'>Name</label>
                            <input name="name" onChange={onChangeHandler} value={formData.name} className='block rounded-3xl shadow-lg outline-none p-3' type='text' placeholder='Your Name' />
                        </div>
                        <div className='my-7'>
                            <label className='mt-2'>Phone Number</label>
                            <input name="phoneNumber" onChange={onChangeHandler} value={formData.phoneNumber} className='block rounded-3xl shadow-lg outline-none p-3' type='text' placeholder='(123) 456 - 7890' />
                        </div>
                        <div className='my-7'>
                            <label>Email</label>
                            <input name="email" onChange={onChangeHandler} value={formData.email} className='block rounded-3xl shadow-lg outline-none p-3' type='email' placeholder='john@gmail.com' />
                        </div>
                        <div className='my-7'>
                            <label>Address</label>
                            <input type='text' onChange={onChangeHandler} value={formData.address} name="address" className='block rounded-3xl shadow-lg outline-none p-3' placeholder='City State Region' />
                        </div>
                        <div className='my-7'>
                            <label>Designation</label>
                            <input className='block rounded-3xl shadow-lg outline-none p-3' value={formData.designation} onChange={onChangeHandler} name="designation" type='text' placeholder='Designation' />
                        </div>
                        <div className='my-7'>
                            <label>Joining Date</label>
                            <input className='block rounded-3xl shadow-lg outline-none p-3' value={formData.joiningDate} onChange={onChangeHandler} name="joiningDate" type='text' placeholder='Joining Date' />
                        </div>
                        <div className='my-7'>
                            <label>Gender</label>
                            <input className='block rounded-3xl shadow-lg outline-none p-3' value={formData.gender} onChange={onChangeHandler} name="gender" type='text' placeholder='Gender' />
                        </div>
                        <div>
                            <div className='flex flex-row justify-between'>
                                <p className='font-medium'>Add Your Experience</p>
                                <Button title='Add Experience' onClick={addExperience} />
                            </div>
                            {
                                formData?.experience.map((item) => {
                                    return (
                                        <div className='flex flex-row flex-wrap gap-2 mt-4 items-center'>
                                            <div>
                                                <label>Company Name</label>
                                                <input name="companyName" value={item.companyName} onChange={(event) => handleExperienceChange(event, item.id)} className='block rounded-3xl shadow-lg outline-none p-3' type='text' placeholder='Company Name' />
                                            </div>
                                            <div>
                                                <label>Designation</label>
                                                <input name="experienceDesignation" value={item.experienceDesignation} onChange={(event) => handleExperienceChange(event, item.id)} className='block rounded-3xl shadow-lg outline-none p-3' type='text' placeholder='Designation' />
                                            </div>
                                            <div>
                                                <label>Time Period</label>
                                                <input name="timePeriod" value={item.timePeriod} onChange={(event) => handleExperienceChange(event, item.id)} className='block rounded-3xl shadow-lg outline-none p-3' type='text' placeholder='Time Period in Years' />
                                            </div>
                                            <div className='cursor-pointer'>
                                              {formData?.experience.length > 1 && <MdDelete fill='red' size={20} onClick={() => removeExperence(item.id)} /> }  
                                            </div>
                                        </div>
                                    )

                                })
                            }
                            <div className='flex justify-center mt-7' onClick={submitHandle}>
                                <Button title='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmployeForm; 