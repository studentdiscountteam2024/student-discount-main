"use client"
import React from "react";
import Link from "next/link";


const page = () => {
  const handlepass = () => {

  }
  return (
    <div className=" mx-6 mt-28 h-[70vh]  border-cyan-500 rounded-2xl bg-white shadow-lg border-2 ">
      <div className="details flex items-center justify-center mt-7">
        <div className="w-[30vw] ">
          <img
            className="h-[13vh] rounded-full hover:opacity-50"
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
            alt="profie img"
          />
        </div>
      </div>
      <div className="inputdetails mt-10  h-[45vh] mx-4 flex-col justify-between space-y-4">
          <input
            type="text"
            name=""
            placeholder="Name"
            id=""
            className="w-full h-[5.5vh] p-2 border "
          />
          <input type="text" placeholder="Gmail"  className="w-full h-[5.5vh]  p-2 border "/>
          <input type="text" placeholder="Phone no" className="w-full h-[5.5vh]  p-2 border" />
        <div className="passgen flex  justify-between  ">
            <input type="date" name="" id="" className=" rounded-sm p-1 h-[5.5vh] bg-transparent "/>
          <div className="gender flex w-[20vw] justify-between space-x-2 mr-4">
            <div className=" p-3 rounded-full hover:bg-blue-500 ">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5901 0.888976C14.7763 0.435976 15.2194 0.144043 15.7077 0.144043H21.3464C22.016 0.144043 22.5547 0.682609 22.5547 1.35204V6.98937C22.5547 7.4776 22.2627 7.92054 21.8096 8.10677C21.3565 8.293 20.8379 8.19234 20.4905 7.84504L18.809 6.16391L16.1608 8.81144C17.1426 10.2409 17.7215 11.9673 17.7215 13.8347C17.7215 18.7271 13.7543 22.6934 8.86077 22.6934C3.96721 22.6934 0 18.7271 0 13.8347C0 8.9423 3.96721 4.97604 8.86077 4.97604C10.7235 4.97604 12.4554 5.54984 13.8852 6.53637L16.5334 3.88884L14.8519 2.20771C14.5045 1.86041 14.4038 1.34198 14.5901 0.888976ZM8.86077 19.472C9.60125 19.472 10.3345 19.3262 11.0186 19.0429C11.7027 18.7596 12.3243 18.3444 12.8479 17.8209C13.3715 17.2974 13.7869 16.676 14.0702 15.992C14.3536 15.3081 14.4994 14.575 14.4994 13.8347C14.4994 13.0944 14.3536 12.3613 14.0702 11.6774C13.7869 10.9934 13.3715 10.372 12.8479 9.84851C12.3243 9.32503 11.7027 8.90979 11.0186 8.62649C10.3345 8.34318 9.60125 8.19737 8.86077 8.19737C8.12029 8.19737 7.38706 8.34318 6.70294 8.62649C6.01883 8.90979 5.39723 9.32503 4.87363 9.84851C4.35003 10.372 3.93469 10.9934 3.65132 11.6774C3.36795 12.3613 3.2221 13.0944 3.2221 13.8347C3.2221 14.575 3.36795 15.3081 3.65132 15.992C3.93469 16.676 4.35003 17.2974 4.87363 17.8209C5.39723 18.3444 6.01883 18.7596 6.70294 19.0429C7.38706 19.3262 8.12029 19.472 8.86077 19.472Z"
                  fill="black"
                  fill-opacity="0.57"
                />
              </svg>
            </div>
            <div className=" p-3 rounded-full hover:bg-pink-400">
              <svg
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.84233 8.33446C3.84233 7.65 4.01095 6.97224 4.33856 6.33988C4.66617 5.70752 5.14635 5.13295 5.7517 4.64896C6.35704 4.16497 7.07569 3.78105 7.86661 3.51912C8.65754 3.25719 9.50524 3.12238 10.3613 3.12238C11.2174 3.12238 12.0651 3.25719 12.856 3.51912C13.647 3.78105 14.3656 4.16497 14.971 4.64896C15.5763 5.13295 16.0565 5.70752 16.3841 6.33988C16.7117 6.97224 16.8803 7.65 16.8803 8.33446C16.8803 9.01892 16.7117 9.69668 16.3841 10.329C16.0565 10.9614 15.5763 11.536 14.971 12.02C14.3656 12.5039 13.647 12.8879 12.856 13.1498C12.0651 13.4117 11.2174 13.5465 10.3613 13.5465C9.50524 13.5465 8.65754 13.4117 7.86661 13.1498C7.07569 12.8879 6.35704 12.5039 5.7517 12.02C5.14635 11.536 4.66617 10.9614 4.33856 10.329C4.01095 9.69668 3.84233 9.01892 3.84233 8.33446ZM12.2239 16.3899C16.9909 15.6919 20.6055 12.3506 20.6055 8.33446C20.6055 3.81112 16.0189 0.144043 10.3613 0.144043C4.70377 0.144043 0.117188 3.81112 0.117188 8.33446C0.117188 12.3506 3.73174 15.6919 8.49876 16.3899V18.014H6.63619C5.60595 18.014 4.77362 18.6795 4.77362 19.5032C4.77362 20.3269 5.60595 20.9924 6.63619 20.9924H8.49876V22.4815C8.49876 23.3052 9.33109 23.9707 10.3613 23.9707C11.3916 23.9707 12.2239 23.3052 12.2239 22.4815V20.9924H14.0865C15.1167 20.9924 15.949 20.3269 15.949 19.5032C15.949 18.6795 15.1167 18.014 14.0865 18.014H12.2239V16.3899Z"
                  fill="black"
                  fill-opacity="0.57"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="password p-2 bg-green-600 w-[35vw] h-[10%]  rounded-lg text-white font-medium " onClick={()=>{handlepass()}}>
            <button>Show Password</button>
        </div>
        
        <div className="flex justify-center ">
        <Link href={"/profile"}>
        <button className=" mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black font-semibold text-md rounded-md group-hover:bg-opacity-0">
            Save Details
          </span>
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
