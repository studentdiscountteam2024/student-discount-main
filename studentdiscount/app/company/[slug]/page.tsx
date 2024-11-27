"use client"

import { useParams } from "next/navigation";

const page = () => {
  const params  = useParams()
  console.log(params.slug);
  let mbanner = [
    {
      src: "https://images.unidays.world/i/self-serve/content/offerbf3abf74-e113-4f44-a663-cc8830104e5c?h=450&format=webp",

      logo: "https://images.unidays.world/i/customers/mobile/active/e341a916-7c11-4c21-9d56-59eb3056dada?w=48&format=webp",
      title: "Over 50% off",
      text: " ",
    },
    {
      src: "https://images.unidays.world/i/self-serve/content/offer98fcc9f6-0046-42a0-968d-c5732fa4a468?h=450&format=webp",

      logo: "https://images.unidays.world/i/customers/mobile/active/299e7592-6fe5-4b77-a1c0-249f30a82a44?w=96&format=webp",
      text: "Top saving on samsung probook 6",
      title: "Special 10% off",
    },
    {
      src: "https://images.unidays.world/i/self-serve/content/offer36628fdb-c30d-4fdf-8ae6-0c7b7dd5d667?h=450&format=webp",
      logo: "https://images.unidays.world/i/self-serve/customer/y6ykdrOxJ0-dR3NKkSBJ5N8i-g5FCKZNm7nSbUjbv0c=/logo/png/a9e2339d-e8e6-48b8-b76a-f0281ed02d73?w=96&format=webp",
      text: "Get 20% off ",
      title: "Special offer",
    },
  ];
  return (
    <div>
      <div className="mbanner h-[29vh] mx-[6vw] rounded-t-3xl mt-28">
        <img
          src={mbanner[0].src}
          alt="image"
          className="bg-contain object-cover h-[100%] w-[100%] rounded-t-3xl mt-6 "
        />
        <div className="shadow-lg bg-white flex-col justify-between items-center h-[16vh] rounded-b-3xl ">
          <img
            src={mbanner[0].logo}
            alt="image"
            className="h-[5vh] ml-[35%] flex justify-center w-[10vh]"
          />
          <div className="flex justify-center font-bold text-xl">
            <h1>{mbanner[0].title}</h1>
          </div>
          <p className="text-center">{mbanner[0].text}</p>
          <div className="flex justify-center gap-4 w-[80vw] mt-1"></div>
        </div>
      </div>
      <div className="mt-40 font-semibold m-2">
        <p>Discounts Offerring by {params.slug}</p>
        <div className="flex overflow-x-auto mt-2 mb-6 scrollbar-hide overflow-y-hidden  space-x-4">
            {mbanner.map((item, index) => (
              <div key={index} className="flex-shrink-0 rounded-2xl  h-[12vh] w-[30vw] bg-white">
                <div className="mbanner h-full w-full">
                    <div className="font-bold text-md flex justify-center items-center h-full w-full">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          
          
        </div>
        <div>
        <p className="font-semibold m-1 mx-2">More offers</p>

        <div className="flex-col overflow-x-hidden overflow-y-auto mt-4 mb-24 mx-2 p-2 ">
            {mbanner.map((item, index) => (
              <div key={index} className="">
                <div className="mbanner rounded-t-3xl mt-4">
                  <img
                    src={item.src}
                    alt="image"
                    className="object-cover h-[100%] w-[100%] rounded-3xl "
                  />
                  <div className=" bg-white flex flex-col justify-between items-center  rounded-b-3xl">
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
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default page;
