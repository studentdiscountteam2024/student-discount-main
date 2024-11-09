"use client"
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";


export default function Navbar() {
    return (
      <div className="bg-[#23488A] h-[10vh] flex-col justify-between">
        <nav className=" ">
            <a href="/" className="flex justify-center">U-sav</a>
            <ul className=" bg-slate-50 mt-1 justify-between h-[5.5vh] mx-[8vw] rounded-3xl flex items-center">
                <li className="text-2xl ml-4"><IoIosMenu />
                </li>
                <li className=" opacity-70"><p>Search</p></li>
                <li className="mr-4 text-2xl"><IoSearchOutline />
                </li>
            </ul>
        </nav>
      </div>
    );
  }