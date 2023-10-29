import React, { useEffect, useState } from "react";
import Groom from "../assets/groom.png";
import { MdEdit, MdOutlineWorkOutline, MdDelete } from "react-icons/md";
import { deleteRequest, getRequest } from "../config/makeRequests";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ListOfEmployes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      setIsLoading(true);
      let response = await getRequest("/getAllEmployes");
      let finalResult = await response?.data;
      if (response.status == 200) {
        setData(finalResult?.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  const deleteHandle = async (id: any) => {
    try {
      setIsLoading(true);
      let response = await deleteRequest(`/delete/${id}`);
      let { msg, data } = await response.data;
      if (response.status == 200) {
        toast(msg);
        setData(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner height="30" width="30" visible={isLoading} />
        </div>
      ) : (
        <>
          <div className="w-full px-6 md:px-16  mx-auto">
            <div className="flex flex-col lg:flex-row  gap-2 justify-center my-5 flex-wrap">
              {data?.length > 0 ? (
                data.map((item: any , index:number) => {
                  return (
                    <div key={index} className="mt-5  p-4 rounded-xl  relative shadow-[1px_4px_12px_gray]">
                      <div className="absolute right-3 flex gap-2">
                        <span className="shadow-[1px_4px_12px_gray]  p-3 rounded-full cursor-pointer ">
                          <Link to={`/editemployee/${item._id}`}>
                            {" "}
                            <MdEdit fill="red" size={20} />{" "}
                          </Link>
                        </span>
                        <span className=" shadow-[1px_4px_12px_gray] p-3 rounded-full cursor-pointer">
                          <MdDelete
                            onClick={() => deleteHandle(item._id)}
                            fill="red"
                            size={20}
                          />
                        </span>
                      </div>
                      <div className="flex justify-center">
                        <img
                          src={Groom}
                          alt="image not found"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="mt-7">
                        <div>
                          <span className="font-medium">Employe Id : </span>
                          <span>{item?.employeId}</span>
                        </div>
                        <div>
                          <span className="font-medium">Name : </span>
                          <span className="capitalize">{item.name}</span>
                        </div>
                        <div>
                          <span className="font-medium">Gender : </span>
                          <span className="capitalize">{item.gender}</span>
                        </div>
                        <div>
                          <span className="font-medium">Email : </span>
                          <span>{item.email}</span>
                        </div>
                        <div>
                          <span className="font-medium">Phone Number : </span>
                          <span>{item.phoneNumber}</span>
                        </div>
                        <div>
                          <span className="font-medium">Designation : </span>
                          <span className="capitalize">
                            {item?.designation}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">Address : </span>
                          <span className="capitalize">{item.address}</span>
                        </div>
                        <div>
                          <span className="font-medium">Joining Date : </span>
                          <span>{item.joiningDate}</span>
                        </div>
                      </div>
                      <hr className="my-5" />
                      <div className="mt-3  rounded-xl p-3 ">
                        <p className="font-semibold text-2xl flex  items-center gap-2">
                          {" "}
                          <MdOutlineWorkOutline /> Experience
                        </p>
                        {item?.experience.map((item: any) => {
                          return (
                            <div className="flex flex-row gap-3 flex-wrap py-4">
                              <div>
                                <p className="font-medium text-lg">Company Name </p>
                                <p className="capitalize">
                                  {item?.companyName}
                                </p>
                              </div>
                              <div>
                                <p className="font-medium text-lg">Designation </p>
                                <p className="capitalize">
                                  {item?.experienceDesignation}
                                </p>
                              </div>
                              <div>
                                <p className="font-medium text-lg">Time Period </p>
                                <p className="capitalize">{item?.timePeriod}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex w-full items-center justify-center">
                  {" "}
                  <span>No Employe Data yet</span>{" "}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ListOfEmployes;
