"use client"

export default function Footer() {
    
    return (
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
)};
