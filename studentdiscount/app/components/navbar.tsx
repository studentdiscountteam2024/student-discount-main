"use client";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgFilters } from "react-icons/cg";

export default function Navbar() {
  let types = [{src:"All.png",text:"All"},{src:"clothes.png",text:"Clothes"},{src:"shoes.png",text:"Shoes"},{src:"watch.png",text:"Watch"}]
  return (
      <nav className="flex-col justify-between  fixed top-0  w-full p-4 bg-white ">
        <div className="flex justify-between mt-5 items-center">
          <div className="rounded-full p-2 bg-slate-100">
            <IoIosMenu className="text-3xl" />
          </div>
          <a href="/" className="font-bold">
            U-Save
          </a>
          <div className="rounded-full p-2 bg-slate-100">
            <IoMdNotifications className="text-3xl" />
          </div>
        </div>
        <div className="flex mt-7  justify-between items-center">
          <div className="flex bg-[#d9d9d9] rounded-xl p-2 w-[80vw] h-[5vh]">
            <IoSearchOutline className="text-3xl text-[#868b91]" />
            <input
              type="text"
              placeholder="Search...."
              className="bg-[#d9d9d9] rounded-lg ml-2"
            />
          </div>

          <div className="bg-[#ff9500] w-[10vw] h-[4vh] rounded-xl">
            <CgFilters className="text-2xl m-2" />
          </div>
        </div>

        <div className="types flex justify-between  overflow-scroll gap-2 w-[100vw]">
         {types.map((item,index) => (
          <div key={index} className="flex  h-[5.5vh] w-full items-center mt-5 rounded-3xl bg-[#958484] ">
            <img src={types[index].src} alt="image" className=" h-10 " />
            <p className="font-bold">{types[index].text}</p>
          </div>  
         ))}
        </div>

      </nav>
  );
}
