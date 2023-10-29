import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../config/makeRequests';
import EmployeForm from '../components/EmployeForm';
import Spinner from '../components/Spinner';

const EditEmployee = () => {
    const [editableData, setEditabelData] = useState(null)
    const { employeeId } = useParams()
    const [isLoading , setIsLoading] = useState(false)
    console.log(employeeId)
    async function getData() {
        try {
            setIsLoading(true)
            let response = await getRequest(`/getById/${employeeId}`)
            let finalResult = await response?.data;
            if (response.status == 200) {
                console.log(finalResult?.data, "********")
                setEditabelData(finalResult?.data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
        {
            isLoading ? <div className=' flex justify-center items-center h-full'><Spinner height={'30'} width={'30'} visible={isLoading}/></div> :  <EmployeForm editableData={editableData} />
        }
           
        </>
    );
}

export default EditEmployee;
