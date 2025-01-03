"use client";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { auth } from "../firbase";
import { UserInfo } from "firebase/auth";
import { userInfo } from "os";
import useAuth from "../hooks/useauth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const page = () => {
  const [userInfo, setUserInfo] = useState<{ email: string | null }>({
    email: null,
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          email: user.email,
        });
      } else {
        setUserInfo({
          email: null,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handlelogout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error("Log-out Error:", error.message);
    }
  };
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/joinus");
    }
  }, [user, loading, router]);

  if (loading) return;
  <div className="z-20 w-full h-full flex justify-center items-center">
    <img src="loading.svg" className="size-20" alt="loading...." />
  </div>;

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
    <div className="mt-24 mx-6">
      <div className="details flex items-center justify-center">
        <div className="w-[30vw]">
          <img
            className="h-[13vh] rounded-full"
            src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
            alt="profie img"
          />
          <p className="text-center font-semibold mt-2"></p>
          <p className="mt-1 flex justify-center">{userInfo.email}</p>
        </div>
      </div>
      <div className="buttons flex  mt-10 justify-between">
        <Link href={"/setting"}>
          <button className="h-[6vh] w-[25vw]  font-semibold  rounded-lg ">
            Setting
          </button>
        </Link>
        <Link href={"/favourite"}>
          <button className="h-[6vh]  w-[25vw]  font-semibold  rounded-lg ">
            Favourite
          </button>
        </Link>
        <Link href={`/profile/edit/id`}>
          <button className="h-[6vh]  w-[25vw]  font-semibold  rounded-lg ">
            {" "}
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="contuneshop mt-14">
        <div className="flex justify-between  items-center ">
          <p>Continue Shopping</p>
          <Link href={"/offers"}>
            <img src="right.svg" className="h-6" alt="" />
          </Link>
        </div>
        <div className="trending ">
          <div className="flex overflow-x-auto h-[36vh] scrollbar-hide overflow-y-hidden mt-1  space-x-4">
            {mbanner.map((item, index) => (
              <div key={index} className="flex-shrink-0  w-[45vw] ">
                <Link href={`/offer/${item.title}`}>
                  <div className="mbanner h-[15vh] bg-white rounded-t-3xl ">
                    <img
                      src={item.src}
                      alt="image"
                      className="object-cover h-[100%] w-[100%] rounded-3xl mt-1"
                    />
                    <div className=" shadow-sm bg-white  justify-between items-center h-[16vh] rounded-b-3xl">
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
          <div className=" flex w-full justify-center">
            <button
              onClick={handlelogout}
              type="submit"
              className="w-[25vw] bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
            >
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
