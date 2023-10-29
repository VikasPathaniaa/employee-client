import React, { useEffect, useState } from 'react';
import Groom from "../assets/groom.png"
import { MdEdit, MdOutlineWorkOutline, MdDelete } from 'react-icons/md';
import { deleteRequest, getRequest } from '../config/makeRequests';


const ListOfEmployes = () => {
    const [data, setData] = useState([])

    async function getData() {
        let response = await getRequest("/getAllEmployes")
        let finalResult = await response?.data;
        setData(finalResult?.data)
    }
    const deleteHandle = async (id: any) => {
        console.log(id , "id")
        let response = await deleteRequest(`/delete/${id}`)
    }
    useEffect(() => {
        getData()
    }, [])

    
    return (
        <div className='w-[70%]  mx-auto'>
            <div className='flex flex-row flex-wrap gap-3 justify-between my-5'>
                {
                    data.map((item: any) => {
                        return (

                            <div className='mt-5 shadow-lg p-4 rounded-xl w-[45%] relative'>
                                <div className='absolute right-3 flex gap-2'>
                                    <span className='shadow-[1px_4px_12px_gray]  p-3 rounded-full cursor-pointer '><MdEdit fill='red' size={20} /></span>
                                    <span className=' shadow-[1px_4px_12px_gray] p-3 rounded-full cursor-pointer'><MdDelete onClick={() => deleteHandle(item._id)} fill='red' size={20} /></span>
                                </div>
                                <div className='flex justify-center'>
                                    <img src={Groom} alt="image not found" width={100} height={100} />
                                </div>
                                <div className='mt-7'>
                                    <div>
                                        <span className='font-medium'>Employe Id : </span>
                                        <span>{item?.employeId}</span>
                                    </div>
                                    <div>
                                        <span className='font-medium'>Name : </span>
                                        <span>{item.name}</span>
                                    </div>
                                    <div>
                                        <span className='font-medium'>Gender : </span>
                                        <span>{item.gender}</span>
                                    </div>
                                    <div>
                                        <span className='font-medium'>Email : </span>
                                        <span>{item.email}</span>
                                    </div>
                                    <div>
                                        <span className='font-medium'>Phone Number : </span>
                                        <span>{item.phoneNumber}</span>
                                    </div>
                                    <div>
                                        <span className='font-medium'>Designation : </span>
                                        <span>{item?.designation}</span>
                                    </div>
                                    <div>
                                        <span className='font-medium'>Address : </span>
                                        <span>{item.address}</span>
                                    </div>
                                    <div>
                                        <span className='font-medium'>Joining Date : </span>
                                        <span>{item.joiningDate}</span>
                                    </div>
                                </div>
                                <hr />
                                <div className='mt-3  rounded-xl p-3 shadow-[1px_4px_12px_gray]'>
                                    <p className='font-medium flex  items-center gap-2'> <MdOutlineWorkOutline /> Experience</p>
                                    {
                                        item?.experience.map((item: any) => {
                                            return (
                                                <div className='flex flex-row gap-3'>
                                                    <div   >
                                                        <p className='font-medium'>Company Name </p>
                                                        <p>{item?.companyName}</p>
                                                    </div>
                                                    <div  >
                                                        <p className='font-medium'>Designation </p>
                                                        <p>{item?.experienceDesignation}</p>
                                                    </div>
                                                    <div>
                                                        <p className='font-medium'>Time Period </p>
                                                        <p>{item?.timePeriod}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default ListOfEmployes;
