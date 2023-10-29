import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#22242a] ">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-start p-7 mt-12 flex-wrap gap-5">
        <div className="basis-[40%]">
          <p className="text-white mb-7">
            {" "}
            High level experience in web design and development knowledge ,
            producing quality work.
          </p>
        <Link to="/">  <Button title="Get started" /> </Link>
        </div>
        <div className="basis-[40%]">
          <p className="text-white my-3 font-medium">List of Employes </p>
          <p className="text-white  my-3 ">
            Technology : React, Tailwind , Node js , Mongo Db
          </p>
          <p className="text-white text-sm  my-3 ">Author : Vikas Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
