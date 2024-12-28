"use client"
import BottomDrawer from "./bottomdrawer"; // Ensure correct import name
import dynamic from "next/dynamic";
import React from "react";
import {auth} from "../firbase";
import {  useEffect} from "react";
import useAuth from "../hooks/useauth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const Map = dynamic<React.ComponentType>(() => import('./map'), {
  ssr: false,
  loading: () => <div>Loading Map...</div>, // Optional loading indicator
});

const dosomething: React.FC = (state: DrawerState) => {
  console.log("Drawer state changed to:", state);
  // Implement other logic if necessary
};

const page = () => {
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

  if (loading) return 
  (
    <div className="z-20 w-full h-full flex justify-center items-center">
    <img src="loading.svg" className="size-20" alt="loading...." />
    </div>
  );
  return (
    <div>
      <Map />
      <BottomDrawer onDrawerStateChange={dosomething}>
        <div className="bottomdetials bg-red-500 h-[27vh]">
          {/* Add content for your drawer here */}
        </div>
      </BottomDrawer>
    </div>
  );
}

export default page;



// const page = () => {
//   return (
//     <div >
//       <Map/>
//       <Bottomdrawer onDrawerStateChange={dosomething}>
//       <div className="bottomdetials bg-red-500 h-[27vh]">

//       </div>
//       </Bottomdrawer>
//     </div>
//   )
// }
// export default page;


