import Image from "next/image";
import React from "react";
import styles from "./bubble.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
<div className="flex flex-row w-full h-10">
<div className="flex justify-start w-1/2">
  <p className="font-Inter text-white font-semibold text-lg ml-2 mt-2">Chess.</p>
</div>
<div className="flex justify-end w-1/2">
<a href="http://localhost:3000/shop">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8edd1" className="mr-4 mt-2 size-7">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
  </svg>
</a>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8edd1" className="size-7 mt-2 mr-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


</div>
</div>


<div className="flex flex-row justify-center mt-16">

<div className="flex justify-center">
  <div className="flex flex-col">
    <div className="flex flex-row">
      <img className="w-10 h-10" src="https://www.themarketingnutz.com/wp-content/uploads/2018/01/opulent-profile-square-07.jpg" alt="" />
      <div className="flex flex-col ml-2">
        <p className="font-Inter text-white font-semibold text-sm">AmirAli (2901)</p>
        <p></p>
      </div>
      <div className="ml-2 mt-1">
        <img className="w-[20px] h-[13px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/255px-Flag_of_Iran.svg.png" alt="" />
      </div>
    </div>
    <div className="flex flex-row mb-2 mt-6">
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">A</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">B</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">C</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">D</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">E</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">F</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">G</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">H</p>
      </div>
    </div>
    <div className="flex justify-center items-center bg-[#f8edd1] w-[518px] h-[518px]">
      <div>
        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">8</p>
          </div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745]  "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="flex justify-center items-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">8</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">7</p>
          </div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="flex justify-center items-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">7</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">6</p>
          </div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="flex justify-center items-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">6</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">5</p>
          </div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="flex justify-center items-center w-10 h-16">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">5</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">4</p>
          </div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="flex justify-center items-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">4</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">3</p>
          </div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="flex justify-center items-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">3</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">2</p>
          </div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="flex justify-center items-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">2</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex items-center justify-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">1</p>
          </div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="w-16 h-16 bg-[#474745] "></div>
          <div className="w-16 h-16 bg-[#f8edd1]"></div>
          <div className="flex justify-center items-center w-10 h-16 ">
            <p className="font-Inter text-[#f8edd1] font-bold text-xl">1</p>
          </div>
        </div>
      </div>

    </div>


    <div className="flex flex-row mt-2">
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">A</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">B</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">C</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">D</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">E</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">F</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">G</p>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ">
        <p className="font-Inter text-[#f8edd1] font-bold text-xl">H</p>
      </div>
    </div>
    <div className="flex flex-row mt-6">
      <img className="w-10 h-10" src="https://www.classicaloasis.com/wp-content/uploads/2014/03/profile-square.jpg" alt="" />
      <div className="flex flex-col ml-2">
        <p className="font-Inter text-white font-semibold text-sm">AliReza (1089)</p>
        <p></p>
      </div>
      <div className="ml-2 mt-1">
        <img className="w-[20px] h-[13px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/640px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="" />
      </div>
    </div>

    <div className="flex flex-row justify-between mt-5 w-[512px]">
      <div className="flex justify-center items-center w-20 h-10 bg-[#3a3a3a] rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8edd1" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
      </div>
      <div className="flex justify-center items-center w-20 h-10 bg-[#3a3a3a] rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8edd1" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

      </div>
      <div className="flex justify-center items-center w-20 h-10 bg-[#3a3a3a] rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8edd1" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
</svg>



      </div>
      <div className="flex justify-center items-center w-20 h-10 bg-[#3a3a3a] rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8edd1" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>




      </div>
      
      
    </div>
  </div>

</div>


</div>




    </>
  );
};

export default Home;
