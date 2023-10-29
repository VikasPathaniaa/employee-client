import axios from "axios";
import { InitialStateTypes } from "../type";


const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        'Content-Type': 'application/json'
    }
})


export const postRequest = (slug: string, data: InitialStateTypes) => {
    return axiosInstance.post(slug, data)
}

export const getRequest = (slug: string) => {
    return axiosInstance.get(slug)
}

export const deleteRequest = (slug: string) => {
    return axiosInstance.delete(slug)
}

export const putRequest = (slug: string , data:InitialStateTypes) => {
    return axiosInstance.put(slug , data)
}