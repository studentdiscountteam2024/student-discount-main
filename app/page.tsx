"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { useState } from "react";
import { log } from "console";

const UserRender = {};

export default function Home() {
  let mbanner = [
    "https://images.unidays.world/i/self-serve/content/offerbf3abf74-e113-4f44-a663-cc8830104e5c?h=450&format=webp",
    "https://images.unidays.world/i/self-serve/content/offer98fcc9f6-0046-42a0-968d-c5732fa4a468?h=450&format=webp",
    "https://images.unidays.world/i/self-serve/content/offer36628fdb-c30d-4fdf-8ae6-0c7b7dd5d667?h=450&format=webp",
  ];
  let sbanner = [
    {
      logo: "https://images.unidays.world/i/customers/mobile/active/e341a916-7c11-4c21-9d56-59eb3056dada?w=48&format=webp",
      title: "Apple music Students week",
      text: "Over 50% off on premium subscription",
    },
    {
      logo: "https://images.unidays.world/i/customers/mobile/active/299e7592-6fe5-4b77-a1c0-249f30a82a44?w=96&format=webp",
      text: "Top saving on samsung probook 6",
      title: "Special 10% off on laptops",
    },
    {
      logo: "https://images.unidays.world/i/self-serve/customer/y6ykdrOxJ0-dR3NKkSBJ5N8i-g5FCKZNm7nSbUjbv0c=/logo/png/a9e2339d-e8e6-48b8-b76a-f0281ed02d73?w=96&format=webp",
      text: "Get 20% off on all products",
      title: "Special offer on all products",
    },
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

  const [secondBanner, setSecondBanner] = useState(0);

  let intervalsecond = setInterval(() => {
    if (secondBanner <= sbanner.length - 2) {
      setSecondBanner(secondBanner + 1);
      clearInterval(intervalsecond);
    } else {
      setSecondBanner(0);
      clearInterval(intervalsecond);
    }
  }, 4000);

  return (
    <div className="">
      <main>
        <div className="sbanner p-1 bg-[#00ADB5] flex  justify-center text-white">
          <h1>Exiting Deals at your fingertips &nbsp;</h1>
          <p className="text-[#13139C]">Join Now</p>
        </div>
        <div className="container">
          <div className=" mbanner h-[29vh] mt-8 mx-[9vw] rounded-3xl shadow-xl shadow-blue-400">
            <img
              src={mbanner[banner]}
              alt="image"
              className=" bg-contain object-cover h-[100%] w-[100%] rounded-3xl"
            />
            <div className="flex justify-center">
              {mbanner.map((item, index) => (
                <div key={index} className="">
                  <button
                    onClick={() => {
                      clearInterval(interval);
                      setBanner(index)}}
                    className={`${
                      banner === index ? "bg-[#23488A]" : "bg-slate-50"
                    } text-white rounded-full w-[2vw] h-[1vh] m-1`}
                  ></button>
                </div>
              ))}
            </div>
          </div>
          <div className="sbanner flex-col justify-between items-center h-[16vh] mt-12 mx-[9vw] rounded-3xl shadow-2xl">
            <img
              src={sbanner[secondBanner].logo}
              alt="image"
              className="h-[5vh] ml-[35%] flex justify-center w-[10vh]"
            />
            <div className="flex justify-center font-bold text-xl">
              <h1>{sbanner[secondBanner].title}</h1>
            </div>
            <p className="text-center">{sbanner[secondBanner].text}</p>

            <div className="flex justify-center  font-semibold mt-4 ">
              {mbanner.map((item, index) => (
                
                <div key={index} className="">
                  <button
                    onClick={() => {
                      clearInterval(intervalsecond);
                      setSecondBanner(index)}}
                    className={`${
                      secondBanner === index ? "bg-[#23488A]" : "bg-slate-200"
                    } text-white rounded-full w-[2vw] h-[1vh] m-1`}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
