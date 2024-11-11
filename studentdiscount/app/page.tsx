"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { useState } from "react";
import { log } from "console";

const UserRender = {};

export default function Home() {
  let mbanner = [
    {
      src: "https://images.unidays.world/i/self-serve/content/offerbf3abf74-e113-4f44-a663-cc8830104e5c?h=450&format=webp",

      logo: "https://images.unidays.world/i/customers/mobile/active/e341a916-7c11-4c21-9d56-59eb3056dada?w=48&format=webp",
      title: "Apple music Students week",
      text: "Over 50% off on premium subscription",
    },
    {
      src: "https://images.unidays.world/i/self-serve/content/offer98fcc9f6-0046-42a0-968d-c5732fa4a468?h=450&format=webp",

      logo: "https://images.unidays.world/i/customers/mobile/active/299e7592-6fe5-4b77-a1c0-249f30a82a44?w=96&format=webp",
      text: "Top saving on samsung probook 6",
      title: "Special 10% off on laptops",
    },
    {
      src: "https://images.unidays.world/i/self-serve/content/offer36628fdb-c30d-4fdf-8ae6-0c7b7dd5d667?h=450&format=webp",
      logo: "https://images.unidays.world/i/self-serve/customer/y6ykdrOxJ0-dR3NKkSBJ5N8i-g5FCKZNm7nSbUjbv0c=/logo/png/a9e2339d-e8e6-48b8-b76a-f0281ed02d73?w=96&format=webp",
      text: "Get 20% off on all products",
      title: "Special offer on all products",
    },
  ];

  let brands = [
    "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s",
    "https://thumbs.dreamstime.com/b/web-183282273.jpg",
    "https://thumbs.dreamstime.com/b/web-183282273.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjLWhWpx9PfbzysffLbMA_DK_8jawJAVHbw&s",
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
  ];
  const [banner, setBanner] = useState(0);

  let interval = setInterval(() => {
    if (banner <= mbanner.length - 2) {
      setBanner(banner + 1);
      clearInterval(interval);
    } else {
      setBanner(0);
      clearInterval(interval);
    }
  }, 4000);

  return (
    <div className="h-[73vh] mt-10  bg-white ">
      <main className="">
        <div className="">
          <div className=" mt-64 mbanner h-[29vh] mx-[9vw] rounded-t-3xl ">
            <img
              src={mbanner[banner].src}
              alt="image"
              className="bg-contain object-cover h-[100%] w-[100%] rounded-t-3xl mt-10 "
            />
            <div className="shadow-lg shadow-blue-400 flex-col justify-between items-center h-[16vh] rounded-b-3xl ">
              <img
                src={mbanner[banner].logo}
                alt="image"
                className="h-[5vh] ml-[35%] flex justify-center w-[10vh]"
              />
              <div className="flex justify-center font-bold text-xl">
                <h1>{mbanner[banner].title}</h1>
              </div>
              <p className="text-center">{mbanner[banner].text}</p>
            </div>
            <div className="flex justify-center">
              {mbanner.map((item, index) => (
                <div key={index} className="">
                  <button
                    onClick={() => {
                      clearInterval(interval);
                      setBanner(index);
                    }}
                    className={`${
                      banner === index ? "bg-[#23488A]" : "bg-slate-50"
                    } text-white rounded-full w-[2vw] h-[1vh] m-1`}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="brands  relative mt-40 ">
          <div className=" flex justify-between items-center mx-4">
            <p className="font-bold text-2xl">Brands</p>
            <p>View All</p>
          </div>
          <div className="flex overflow-scroll mx-0 gap-2 p-1 rounded-lg bg-slate-50 ">
            {brands.map((item, index) => (
              <div key={index} className="">
                <img
                  src={brands[index]}
                  alt="image"
                  className="h-16 w-[100%] rounded-full  m-1 "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="trending ">
          <div className=" flex mt-4 justify-between mx-4 items-center">
            <p className="font-bold text-2xl">Trending</p>
            <p>View All</p>
          </div>
          <div className="flex overflow-x-auto h-[50vh] overflow-y-hidden mt-4 bg-slate-100 p-2 space-x-4">
            {mbanner.map((item, index) => (
              <div key={index} className="flex-shrink-0  w-[45vw] ">
                <div className="mbanner h-[15vh] rounded-t-3xl ">
                  <img
                    src={item.src}
                    alt="image"
                    className="object-cover h-[100%] w-[100%] rounded-3xl mt-2"
                  />
                  <div className=" bg-white flex flex-col justify-between items-center h-[16vh] rounded-b-3xl">
                    <img
                      src={item.logo}
                      alt="logo"
                      className="h-[5vh] w-[10vh] mx-auto"
                    />
                    <div className="flex justify-center m-4 font-bold text-xl">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 h-[6vh] bg-[#88A9AC] w-full rounded-t-xl">
        <ul className="flex justify-between mx-2 p-1">
          <li className="relative group">
            <img
              src="home.png"
              className="h-12 hover:h-18 hover:-translate-y-10 hover:bg-[#8273BD] hover:rounded-full hover:p-2 hover:scale-125 transition-all"
              alt=""
            />
            <p className="absolute top-7  mb-12 font-semibold text-center w-full opacity-0 group-hover:opacity-100 transition-opacity">
              Home
            </p>
          </li>
          <li className="relative group">
            <img
              src="heart.png"
              className="h-12 hover:h-18 hover:-translate-y-10 hover:bg-[#8273BD] hover:rounded-full hover:p-2 hover:scale-125 transition-all"
              alt=""
            />
            <p className="absolute top-7  mb-12 font-semibold text-center w-full opacity-0 group-hover:opacity-100 transition-opacity">
              Saved offers
            </p>
          </li>
          <li className="relative group">
            <img
              src="location.png"
              className="h-12 hover:h-18 hover:-translate-y-10 hover:bg-[#8273BD] hover:rounded-full hover:p-2 hover:scale-125 transition-all"
              alt=""
            />
            <p className="absolute top-7  mb-12 font-semibold text-center w-full opacity-0 group-hover:opacity-100 transition-opacity">
              Location
            </p>
          </li>
          <li className="relative group">
            <img
              src="offers.svg"
              className="h-12 hover:h-18 hover:-translate-y-10 hover:bg-[#8273BD] hover:rounded-full hover:p-2 hover:scale-125 transition-all"
              alt=""
            />
            <p className="absolute top-7  mb-12 font-semibold text-center w-full opacity-0 group-hover:opacity-100 transition-opacity">
              Festival offers
            </p>
          </li>
          <li className="relative group">
            <img
              src="profile.png"
              className="h-12   fhover:h-18 hover:-translate-y-10 hover:bg-[#8273BD] hover:rounded-full hover:p-2 hover:scale-125 transition-all"
              alt=""
            />
            <p className="absolute top-7  mb-12 font-semibold text-center w-full opacity-0 group-hover:opacity-100 transition-opacity">
              Profile
            </p>
          </li>
        </ul>
      </footer>
    </div>
  );
}
