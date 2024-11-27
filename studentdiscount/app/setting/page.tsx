import React from "react";

const page = () => {
  return (
    <div className=" mt-24">
      <div>
        <p className="flex justify-center text-3xl font-semibold ">Setting</p>
      </div>
      <div className="options flex mt-8 justify-between mx-10">
        <p className="font-semibold text-xl">Interest</p>
        <select name="cars" id="cars" className="rounded-lg w-[30vw] p-2 font-semibold  ">
          <option value="volvo" className="">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="newsletter flex mt-8 justify-evenly mx-14">
        <p className=" text-xl">Notifications</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="size-7"/>
      </div>
      <div className="newsletter flex mt-8 justify-evenly mx-14">
        <p className=" text-xl mr-2">NewsLetter</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="size-7"/>
      </div>
      <div className="flex justify-center bottom-20 w-full  absolute">
      <button className="flex p-3 font-semibold bg-blue-500 rounded-lg ">Save Options</button>
      </div>
    </div>
  );
};

export default page;
