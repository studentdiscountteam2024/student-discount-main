"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: React.FC = () => {
  const mbanner = [
    {
      src: "https://images.unidays.world/i/self-serve/content/offerbf3abf74-e113-4f44-a663-cc8830104e5c?h=450&format=webp",
      logo: "https://images.unidays.world/i/customers/mobile/active/e341a916-7c11-4c21-9d56-59eb3056dada?w=48&format=webp",
      title: "Apple Music Students Week",
      text: "Over 50% off on premium subscription",
    },
    {
      src: "https://images.unidays.world/i/self-serve/content/offer98fcc9f6-0046-42a0-968d-c5732fa4a468?h=450&format=webp",
      logo: "https://images.unidays.world/i/customers/mobile/active/299e7592-6fe5-4b77-a1c0-249f30a82a44?w=96&format=webp",
      text: "Top saving on Samsung Probook 6",
      title: "Special 10% off on laptops",
    },
    {
      src: "https://images.unidays.world/i/self-serve/content/offer36628fdb-c30d-4fdf-8ae6-0c7b7dd5d667?h=450&format=webp",
      logo: "https://images.unidays.world/i/self-serve/customer/y6ykdrOxJ0-dR3NKkSBJ5N8i-g5FCKZNm7nSbUjbv0c=/logo/png/a9e2339d-e8e6-48b8-b76a-f0281ed02d73?w=96&format=webp",
      title: "Get 20% off on all products",
      text: "Special offer on all products",
    },
  ];

  return (
    <div className="h-auto bg-gray-100 py-10 z-10">
      <div className="max-w-[90%] mx-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
        >
          {mbanner.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mbanner mx-[1vw]  rounded-3xl overflow-hidden">
                <img
                  src={item.src}
                  alt="image"
                  className="bg-contain object-cover w-full h-auto rounded-t-3xl mt-6"
                />
                <div className=" shadow-lg bg-white flex flex-col justify-between items-center p-4 rounded-b-3xl">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="h-[5vh] w-[10vh] mb-2"
                  />
                  <h1 className="font-bold text-xl text-black text-center">{item.title}</h1>
                  <p className="text-center text-gray-700 mb-7">{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
