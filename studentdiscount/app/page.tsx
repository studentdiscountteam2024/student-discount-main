"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import Swiper from "./components/swiper"
import React, { useEffect, useState } from "react";

import Link from "next/link";

interface banner {
  src: string;
  text: string;
  logo?: string;
  title?: string;
}

const Home: React.FC = () => {

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
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
  ];
  const [banner, setBanner] = useState<number>(0);

  let interval = setInterval(() => {
    if (banner <= mbanner.length - 2) {
      setBanner(banner + 1);
      clearInterval(interval);
    } else {
      setBanner(0);
      clearInterval(interval);
    }
  }, 4000);
  let types = [
    { src: "All.png", text: "All" },
    { src: "clothes.png", text: "Clothes" },
    { src: "shoes.png", text: "Shoes" },
    { src: "watch.png", text: "Watch" },
  ];

  
  return (
    <div className="h-[73vh] mt-10 w-full ">
      <main className="">
        <div className="types flex mt-[10vh] justify-between  gap-1 w-[100vw]  ">
          {types.map((item, index) => (
            <div
              key={index}
              className="flex-col h-[4.5vh] mx-6 w-[20vw] justify-center items-center rounded-2xl  bg-transparent "
            >
              <img
                src={types[index].src}
                alt="image"
                className=" h-8 w-8 items-center"
              />
              <p className="font-bold">{types[index].text}</p>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Swiper/>
        </div>
        <div className="brands  ">
          <div className=" flex justify-between mx-4">
            <p className="font-bold text-xl">Brands</p>
            <Link href={"/brands"}>
              <p>View All</p>
            </Link>
          </div>
          <div className="flex gap-2 mt-1 overflow-x-scroll ml-3 scrollbar-hide ">
            {brands.map((item, index) => (
              <div key={index} className="flex-shrink-0 ">
                <img
                  src={brands[index]}
                  alt="image"
                  className="h-14 rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="trending ">
          <div className=" flex mt-4 justify-between mx-2 items-center">
            <p className="font-bold text-xl">Trending</p>
            <p>View All</p>
          </div>
          <div className="flex overflow-x-auto h-[36vh] scrollbar-hide overflow-y-hidden mt-1  p-2 space-x-4">
            {mbanner.map((item, index) => (
              <div key={index} className="flex-shrink-0  w-[45vw] ">
                <Link href={`/offer/${item.title}`}>
                  <div className="mbanner h-[15vh] rounded-t-3xl ">
                    <img
                      src={item.src}
                      alt="image"
                      className="object-cover h-[100%] w-[100%] rounded-3xl mt-1"
                    />
                    <div className=" bg-white flex flex-col justify-between items-center h-[16vh] rounded-b-3xl">
                      <img
                        src={item.logo}
                        alt="logo"
                        className="h-[5vh] w-[10vh] mx-auto"
                      />
                      <div className="flex justify-center m-4 font-bold text-lg">
                        <h1>{item.title}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="trending  scrollbar-hide">
          <div className=" flex mt-4 justify-between mx-4 items-center">
            <p className="font-bold text-xl">Festival offers</p>
            <p>View All</p>
          </div>
          <div className="flex overflow-x-auto h-[43vh]  overflow-y-hidden mt-4  p-2 space-x-4">
            {mbanner.map((item, index) => (
              <div key={index} className="flex-shrink-0  w-[45vw] ">
                <Link href={`/offer/${item.title}`}>
                  <div className="mbanner h-[15vh] rounded-t-3xl ">
                    <img
                      src={item.src}
                      alt="image"
                      className="object-cover h-[100%] w-[100%] rounded-3xl "
                    />
                    <div className=" bg-white flex flex-col justify-between items-center h-[16vh] rounded-b-3xl">
                      <img
                        src={item.logo}
                        alt="logo"
                        className="h-[5vh] w-[10vh] mx-auto"
                      />
                      <div className="flex justify-center m-4 font-bold text-lg">
                        <h1>{item.title}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
