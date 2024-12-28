import Link from "next/link";
const page = () => {
    
  const data = [
    {
      text: "1+1 Offer",
      logo: "https://images.unidays.world/i/a6b09527-34f7-47d9-88e1-161ca92c8a5d?format=raw",
    },
    {
      text: "25% Off",
      logo: "https://images.unidays.world/i/d678953d-52e0-4928-a2be-e26fe002c43c?format=raw",
    },
    {
      text: "10% off",
      logo: "https://images.unidays.world/i/91d969ae-63b0-4217-a4bb-0811f4716460?format=raw",
    },
    {
      text: "99% off ",
      logo: "https://images.unidays.world/i/5e23a882-2bdf-489e-a6e0-2a4f66f5f538?format=raw",
    },
    {  text: "", logo: "" },
    {  text: "", logo: "" },
    {  text: "", logo: "" },
  ];
  return (
    <div>
      <div className="body flex flex-wrap gap-7 mx-4 mt-28  basis-1">
        {data.map((item, index) => (
          <div key={index} className="">
            <Link href={`/company/${item.text}`}>
            <div className="h-[20vh] w-[42vw]  rounded-2xl shadow-lg bg-white">
              <img src={item.logo} className="rounded-t-2xl flex justify-center " alt="" />
              <div className="w-full ">              
                <p className="font-bold h-10 text-3xl text-center">{item.text}</p>
                
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
