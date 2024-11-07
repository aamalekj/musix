import Image from "next/image";
import React from "react";
import styles from "./bubble.module.css";

const Home = () => {
  return (
    <>

<div className="">
<div className="flex flex-row items-center w-full h-12 bg-[#272727]">
  <a href="">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-3 size-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg>
  </a>
  
  <p className="font-Inter ml-3 text-xl">Profile</p>
</div>
</div>

<div className="mt-10 ml-10">
  <div className="flex flex-row">
  <img className="w-40 h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s" alt="" />
  <div className="flex flex-row ml-5">
  <p className="font-Inter font-xl text-white font-medium">Name</p>

  
  <img className="w-6 h-4 ml-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/255px-Flag_of_Iran.svg.png" alt="" />
  </div>
  
  </div>
  
</div>

<div className="flex justify-center w-full h-20 mt-10">
<div className="flex flex-col w-full mx-10 bg-[#272727] h-96">
  <div className="mx-6 my-6">
  <div className="flex flex-row items-center">
  <p className="font-Inter text-sm text-white font-medium w-24">Username</p>
 
  <input className="w-40 h-8 bg-[#303030] ml-8 rounded-sm border-solid border-[#505050] border-[1px]font-Inter font-lg text-white font-medium " type="name" />
</div>
  </div>

  <div className="mx-6">
  <div className="flex flex-row items-center">
  <p className="font-Inter text-sm text-white font-medium w-24">First Name</p>
 
  <input className="w-40 h-8 bg-[#303030] ml-8 rounded-sm border-solid border-[#505050] border-[1px]font-Inter font-lg text-white font-medium " type="name" />
</div>
  </div>

 <div className="mx-6 mt-6">
  <div className="flex flex-row items-center">
  <p className="font-Inter text-sm text-white font-medium w-24">Last Name</p>
 
  <input className="w-40 h-8 bg-[#303030] ml-8 rounded-sm border-solid border-[#505050] border-[1px]font-Inter font-lg text-white font-medium " type="name" />
</div>
  </div>

  <div className="mx-6 mt-6">
  <div className="flex flex-row items-center">
  <p className="font-Inter text-sm text-white font-medium w-24">Email Address</p>
 
  <input className="w-40 h-8 bg-[#303030] ml-8 rounded-sm border-solid border-[#505050] border-[1px]font-Inter font-lg text-white font-medium " type="email" />
</div>
  </div>
  
  <div className="mx-6 mt-6">
  <div className="flex flex-row items-center">
  <p className="font-Inter text-sm text-white font-medium w-24">Language</p>

  <form action="">
  <input className="w-40 h-8 bg-[#303030] ml-8 rounded-sm border-solid border-[#505050] border-[1px]font-Inter font-lg text-white font-medium " type="name" list="Language"/>
        <datalist id="Language">
            <option value="فارسی" />
            <option value="English" />
        </datalist>
        </form>
</div>

<div className="mt-6">
  <div className="flex flex-row items-center">
  <p className="font-Inter text-sm text-white font-medium w-24">Email Address</p>
 
  <input className="w-40 h-8 bg-[#303030] ml-8 rounded-sm border-solid border-[#505050] border-[1px]font-Inter font-lg text-white font-medium " type="name" />
</div>
  </div>
  </div>
</div>
</div>
    </>
  );
};

export default Home;
