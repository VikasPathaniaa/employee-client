import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        'Content-Type': 'application/json'
    }
})


export const postRequest = (slug: string, data: any) => {
    return axiosInstance.post(slug, data)
}

export const getRequest = (slug: string) => {
    return axiosInstance.get(slug)
}

export const deleteRequest = (slug: string) => {
    return axiosInstance.delete(slug)
}