"use client";
import React from "react";

const page = () => {
  const data = [
    {
      img: "https://images.unidays.world/i/perks/native/twoxone/9dcac4da-d4cb-41b1-a77d-767494f188eb?format=webp&w=382&h=302",
      text: "1+1 Offer",
      logo: "https://images.unidays.world/i/a6b09527-34f7-47d9-88e1-161ca92c8a5d?format=raw",
    },
    {
      img: "https://images.unidays.world/i/perks/native/twoxone/661d64b8-8c1e-4aa4-9c5a-d8403612feed?format=webp&w=382&h=302",
      text: "25% Off on laptops",
      logo: "https://images.unidays.world/i/d678953d-52e0-4928-a2be-e26fe002c43c?format=raw",
    },
    {
      img: "https://images.unidays.world/i/perks/native/twoxone/c1b4c3f2-78c2-4b97-8186-237ad3a524bd?format=webp&w=382&h=302",
      text: "10% off on Iphones",
      logo: "https://images.unidays.world/i/91d969ae-63b0-4217-a4bb-0811f4716460?format=raw",
    },
    {
      img: "https://images.unidays.world/i/perks/native/twoxone/9431d235-ca2a-4b59-8903-6a272eaf20bb?format=webp&w=382&h=302",
      text: "99% off on premium Supscription",
      logo: "https://images.unidays.world/i/5e23a882-2bdf-489e-a6e0-2a4f66f5f538?format=raw",
    },
    
  ];

  return (
    <div className=" mt-24">   
    <p className="m-4 font-semibold text-xl">Your Favourite</p>
  
      <div className="body flex flex-wrap gap-6 mx-4 basis-1">
        {data.map((item, index) => (
          <div key={index} className="">
            <div className="h-[30vh] w-[42vw]  rounded-l-2xl shadow-lg bg-white">
              <img src={item.img} className="rounded-l-2xl " alt="" />
              <div className="w-full">
              <img src={item.logo} className="h-10 w-full flex justify-center" alt="" />
              <p className="font-bold h-10 text-center">{item.text}</p>
              <div className="flex justify-between mx-2">
              <button className=" border-blue-600 border-2 sticky  w-[18vw] p-1 font-semibold rounded-lg bg-slate-50 text-sm">
                Get Now
              </button>
              <button className="border-blue-600 border-2 sticky  w-[18vw] p-1 font-semibold rounded-lg bg-slate-50 text-sm">Remove</button>
              </div>
              </div>         
            </div>
          </div>
        ))}
      </div>
      <p className="m-4 font-semibold text-xl mt-10">Related Items</p>
      <div className="body flex flex-wrap gap-6 mx-4 basis-1 mb-24">
        {data.map((item, index) => (
          <div key={index} className="">
            <div className="h-[30vh] w-[42vw]  rounded-l-2xl shadow-lg bg-white">
              <img src={item.img} className="rounded-l-2xl " alt="" />
              <div className="w-full">
              <img src={item.logo} className="h-10 w-full flex justify-center" alt="" />
              <p className="font-bold h-10 text-center">{item.text}</p>
              <div className="flex justify-between mx-2">
              <button className=" border-blue-600 border-2 sticky  w-[18vw] p-1 font-semibold rounded-lg bg-slate-50 text-sm">
                Get Now
              </button>
              </div>
              </div>         
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
