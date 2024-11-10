import Image from "next/image";
import React from "react";
import styles from "./bubble.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
<div className="">
<div className="flex flex-row items-center w-full h-12 bg-[#272727]">
  <a href="http://localhost:3000/">
  <svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-3 size-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg></a>

  <p className="font-Inter ml-3 text-xl">Shop</p>
</div>
</div>

  <div className="flex flex-row flex-wrap ">
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
    <Image 
        src="/images/1.png"
        alt="My Image"
        width={192}
        height={192}            
      />
    </div>
    <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[16px] text-black">The Default</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]"></p>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
    <Image 
        src="/images/4.png"
        alt="My Image"
        width={192}
        height={192}            
      />
    </div>
    <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[16px] text-black">Sky</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]">800</p>
<svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="size-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
    <Image 
        src="/images/7.png"
        alt="My Image"
        width={192}
        height={192}            
      />
    </div>
    <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[16px] text-black">Purple</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]">850</p>
<svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="size-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
    <Image 
        src="/images/8.png"
        alt="My Image"
        width={192}
        height={192}            
      />
    </div>
    <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[16px] text-black">Royal</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]">1000</p>
<svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="size-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
    <Image 
        src="/images/6.png"
        alt="My Image"
        width={192}
        height={192}            
      />
    </div>
    <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[16px] text-black">Green 1</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]">900</p>
<svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="size-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
    <Image 
        src="/images/5.png"
        alt="My Image"
        width={192}
        height={192}            
      />
    </div>
    <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[16px] text-black">Green</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]">500</p>
<svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="size-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
    </div>
  </div>

 <div className="flex flex-col items-center">
<div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
<Image 
        src="/images/2.png"
        alt="My Image"
        width={192}
        height={192}            
      />
   </div>
   <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[16px] text-black">Blu</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]">890</p>
<svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="size-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
 </svg>
   </div>
 </div>

 <div className="flex flex-col items-center">
   <div className="flex items-center justify-center w-52 h-52 bg-[#272727] mx-10 mt-10 border-solid border-white border-[1px]">
   <Image 
        src="/images/3.png"
        alt="My Image"
        width={192}
        height={192}            
      />
   </div>
 <div className="flex flex-row items-center justify-between w-52 h-12 bg-[#ffffff]">
<div className="w-2/3">
<p className="font-Inter ml-2 text-[14px] text-black">Black & Gold</p>
</div>
<div className="w-1/3"></div>
<p className="font-Inter ml-2 text-sm text-black mr-[2px]">1500b</p>
<svg xmlns="http: www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="size-5 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
  </div>
 </div>
 </div>



    </>
  );
};

export default Home;
