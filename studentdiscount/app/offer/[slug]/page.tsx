"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
const page = () => {
  const params = useParams()
  const id  = params.slug;
  
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
              <div className="flex justify-center gap-4 w-[80vw] mt-1">
              <button className=" border-blue-600 border-2 sticky ml-3 mt-1 w-[18vw] p-1 font-semibold rounded-lg bg-slate-50 text-sm">
                Get Now
              </button>
              <button className=" border-blue-600 border-2 sticky ml-3 mt-1 w-[20vw] p-1 font-semibold rounded-lg bg-slate-50 text-sm">
                Save Offer
              </button>
              </div>
            </div>
            
           
        </div>
        <div className="trending mt-44 mx-2">
          <div className=" flex mt-4 justify-between mx-2 items-center">
            <p className="font-bold text-xl">Similar products</p>
            
          </div>
          <div className="flex overflow-x-auto h-[42vh] scrollbar-hide overflow-y-hidden mt-1  p-2 space-x-4">
            {mbanner.map((item, index) => (
              <div key={index} className="flex-shrink-0  w-[45vw] ">
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
                    <div className="flex justify-center ml-2 font-bold text-lg">
                      <h1>{item.title}</h1>
                    </div>
                    <button className="text-blue-800">70%OFF</button>
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
