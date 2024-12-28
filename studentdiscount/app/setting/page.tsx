import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className=" mt-24">
      <div>
        <p className="flex justify-center text-3xl font-semibold ">Setting</p>
      </div>
      <div className="options flex mt-8 justify-between mx-10">
        <p className="font-semibold text-xl">Interest</p>
        <select
          name="cars"
          id="cars"
          className="rounded-lg w-[30vw] p-2 font-semibold  "
        >
          <option value="volvo" className="">
            Volvo
          </option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="newsletter flex mt-8 justify-evenly mx-14">
        <p className=" text-xl">Notifications</p>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          className="size-7"
        />
      </div>
      <div className="newsletter flex mt-8 justify-evenly mx-14">
        <p className=" text-xl mr-2">NewsLetter</p>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          className="size-7"
        />
      </div>
      <div className="flex justify-center bottom-20 w-full  absolute">
        <Link href={"/profile"}>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black font-semibold text-md rounded-md group-hover:bg-opacity-0">
            Save Settings
          </span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
