import React, { useEffect, useState } from "react";
import FormHeading from "./FormHeading";
import Button from "./Button";
import { MdDelete } from "react-icons/md";
import { postRequest, putRequest } from "../config/makeRequests";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { InitialStateTypes } from "../type";

const initialState: InitialStateTypes = {
    employeId: null,
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
            timePeriod: "",
        },
    ],
};

const EmployeForm = ({ editableData }: { editableData?: any }) => {
    const [formData, setFormData] = useState(initialState);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (editableData) {
            setFormData(editableData);
        }
    }, [editableData]);
    // input Change Handler
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //handle Experience Change

    const handleExperienceChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        const { name, value } = event.target;
        const findObject = formData.experience.map((item, index) => {
            if (item.id == id) {
                return { ...item, [name]: value };
            }
            return item;
        });
        setFormData({
            ...formData,
            experience: findObject,
        });
    };
    // add Experiemce Column
    const addExperience = () => {
        setFormData({
            ...formData,
            experience: [
                ...formData.experience,
                {
                    id: Math.floor(Math.random() * 60),
                    companyName: "",
                    experienceDesignation: "",
                    timePeriod: "",
                },
            ],
        });
    };

    // Remove Experience Column
    const removeExperence = (id: number) => {
        const filteredData = formData.experience.filter((item) => {
            return item.id != id;
        });
        setFormData({ ...formData, experience: filteredData });
    };

    // submnit hanlde

    const submitHandle = async () => {
        try {
            setIsLoading(true);
            if (
                formData.employeId &&
                formData.name &&
                formData.phoneNumber &&
                formData.email &&
                formData.address &&
                formData.designation &&
                formData.joiningDate &&
                formData.gender &&
                formData.experience[0].companyName &&
                formData.experience[0].experienceDesignation &&
                formData.experience[0].timePeriod
            ) {
                if (editableData) {
                    let response = await putRequest(
                        `/update/${editableData._id}`,
                        formData
                    );
                    if (response.status === 200) {
                        console.log(response.data);
                        setFormData(initialState);
                        setIsLoading(false);
                        toast(response.data?.msg);
                        navigate("/employes");
                    }
                } else {
                    let response = await postRequest("/addemployeinfo", formData);
                    if (response.status === 200) {
                        console.log(response.data);
                        setFormData(initialState);
                        setIsLoading(false);
                        toast(response.data?.msg);
                    }
                }
            } else {
                toast.warn("🚫 Please fill out all required fields.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setIsLoading(false);
            }
        } catch (error: any) {
            const message = error?.response?.data?.msg;
            setIsLoading(false);
            toast(message);
        }
    };

    return (
        <div>
            <FormHeading editableData={editableData} />
            <div className="w-full mx-auto mt-16 px-10 md:px-20">
                <div className="text-center w-full mx-auto my-5">
                    <p className="font-medium">Post Your Information</p>
                    <p className="text-gray text-sm">
                        Please fill the form below to receive a quote for workspace. Please
                        add all the details required.
                    </p>
                </div>
                <div className="bg-[#faf8f8] p-4 rounded-md  mx-auto flex  flex-col items-center w-full lg:w-[60%] my-9">
                    <div className="border-l-neutral-600 border-b-2 my-2 p-8">
                        <p className="font-medium">
                            {editableData
                                ? "Update Your Experience details"
                                : "Experience details"}
                        </p>
                        <p className="text-sm">
                            Please fill your information so we can get in touch with you.
                        </p>
                    </div>
                    <form>
                        <div className="my-7">
                            <label className="mt-2">
                                Employee Id <span className="text-[red]">*</span>
                            </label>
                            <input
                                name="employeId"
                                onChange={onChangeHandler}
                                value={formData.employeId ?? ""}
                                className="block rounded-3xl shadow-lg outline-none p-3"
                                type="text"
                                placeholder="101"
                            />
                        </div>
                        <div className="my-7">
                            <label className="mt-2">
                                Name <span className="text-[red]">*</span>
                            </label>
                            <input
                                name="name"
                                onChange={onChangeHandler}
                                value={formData.name}
                                className="block rounded-3xl shadow-lg outline-none p-3"
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="my-7">
                            <label>
                                Gender <span className="text-[red]">*</span>
                            </label>
                            <select value={formData.gender} name="gender" onChange={(event) => setFormData({ ...formData, [event?.target.name]: event?.target.value })} className="block rounded-3xl shadow-lg outline-none p-3 w-52">
                                <option value="" >--select--</option>
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                                <option value={"other"}>Other</option>
                            </select>
                        </div>
                        <div className="my-7">
                            <label className="mt-2">
                                Phone Number <span className="text-[red]">*</span>
                            </label>
                            <input
                                name="phoneNumber"
                                onChange={onChangeHandler}
                                value={formData.phoneNumber}
                                className="block rounded-3xl shadow-lg outline-none p-3"
                                type="text"
                                placeholder="(123) 456 - 7890"
                            />
                        </div>
                        <div className="my-7">
                            <label>
                                Email <span className="text-[red]">*</span>
                            </label>
                            <input
                                name="email"
                                onChange={onChangeHandler}
                                value={formData.email}
                                className="block rounded-3xl shadow-lg outline-none p-3"
                                type="email"
                                placeholder="john@gmail.com"
                            />
                        </div>
                        <div className="my-7">
                            <label>
                                Address <span className="text-[red]">*</span>
                            </label>
                            <input
                                type="text"
                                onChange={onChangeHandler}
                                value={formData.address}
                                name="address"
                                className="block rounded-3xl shadow-lg outline-none p-3"
                                placeholder="City State Region"
                            />
                        </div>
                        <div className="my-7">
                            <label>
                                Designation <span className="text-[red]">*</span>
                            </label>
                            <input
                                className="block rounded-3xl shadow-lg outline-none p-3"
                                value={formData.designation}
                                onChange={onChangeHandler}
                                name="designation"
                                type="text"
                                placeholder="Designation"
                            />
                        </div>
                        <div className="my-7">
                            <label>
                                Joining Date <span className="text-[red]">*</span>
                            </label>
                            <input
                                className="block rounded-3xl shadow-lg outline-none p-3"
                                value={formData.joiningDate}
                                onChange={onChangeHandler}
                                name="joiningDate"
                                type="text"
                                placeholder="05/07/2001"
                            />
                        </div>


                        <div className="flex flex-row justify-between">
                            <p className="font-medium">
                                Add Your Experience <span className="text-[red]">*</span>
                            </p>
                            <Button
                                title="Add Experience"
                                onClick={addExperience}
                                spinner={false}
                            />
                        </div>
                        {formData?.experience.map((item, index) => {
                            return (
                                <div key={item.id} className="flex flex-row flex-wrap gap-2 mt-4 items-center">
                                    <div>
                                        <label>Company Name</label>
                                        <input
                                            name="companyName"
                                            value={item.companyName}
                                            onChange={(event) =>
                                                handleExperienceChange(event, item.id)
                                            }
                                            className="block rounded-3xl shadow-lg outline-none p-3"
                                            type="text"
                                            placeholder="Company Name"
                                        />
                                    </div>
                                    <div>
                                        <label>Designation</label>
                                        <input
                                            name="experienceDesignation"
                                            value={item.experienceDesignation}
                                            onChange={(event) =>
                                                handleExperienceChange(event, item.id)
                                            }
                                            className="block rounded-3xl shadow-lg outline-none p-3"
                                            type="text"
                                            placeholder="Designation"
                                        />
                                    </div>
                                    <div>
                                        <label>Time Period</label>
                                        <input
                                            name="timePeriod"
                                            value={item.timePeriod}
                                            onChange={(event) =>
                                                handleExperienceChange(event, item.id)
                                            }
                                            className="block rounded-3xl shadow-lg outline-none p-3"
                                            type="text"
                                            placeholder="3-5 year"
                                        />
                                    </div>
                                    <div className="cursor-pointer">
                                        {formData?.experience.length > 1 && (
                                            <MdDelete
                                                fill="red"
                                                size={20}
                                                onClick={() => removeExperence(item.id)}
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                        <div className="flex justify-center mt-7" onClick={submitHandle}>
                            <Button
                                title={editableData ? "Update" : "Submit"}
                                spinner={isLoading}
                            />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeForm;
