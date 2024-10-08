import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between mt-5">
      <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
      <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M864-40 741-162q-18 11-38.5 16.5T660-140q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-6 43.5T797-218L920-96l-56 56ZM220-140q-66 0-113-47T60-300q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T300-300q0-33-23.5-56.5T220-380q-33 0-56.5 23.5T140-300q0 33 23.5 56.5T220-220Zm440 0q33 0 56.5-23.5T740-300q0-33-23.5-56.5T660-380q-33 0-56.5 23.5T580-300q0 33 23.5 56.5T660-220ZM220-580q-66 0-113-47T60-740q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm440 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm-440-80q33 0 56.5-23.5T300-740q0-33-23.5-56.5T220-820q-33 0-56.5 23.5T140-740q0 33 23.5 56.5T220-660Zm440 0q33 0 56.5-23.5T740-740q0-33-23.5-56.5T660-820q-33 0-56.5 23.5T580-740q0 33 23.5 56.5T660-660ZM220-300Zm0-440Zm440 0Z"/></svg>
      </div>

      <div className="flex justify-center">
      <img className="size-57 mt-12 rounded-lg" src="https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg" alt="" />
      </div>
      <div className="flex items-center flex-col">
      <p className="text-white font-bold font-sans text-2xl mt-2">Whithout ME</p>
      <p className="text-gray-700  font-bold font-sans text-sl mt-1" >Eminem</p>
      </div>

      <div className="flex justify-center items-center flex-col mt-12">
        <div className="flex items-baseline w-[360px] h-2 rounded-full bg-white">
        <div className="w-[330px] h-2 rounded-full bg-slate-400"></div>
        </div>
        <div className="flex mt-2">
        <p className="text-white font-sans text-[10px] pr-40">01:21</p>
        <p className="text-white font-sans text-[10px] pl-40">-00:28</p>
        </div>
      </div>

      <div className="felx justify-center flex-row mt-8 text-center">
        <div>
          <p className="text-white font-bold font-sans text-xl">Next</p>
          </div>
        <div>
          <p className="text-lime-500 font-bold font-sans text-2xl mt-1 ml-2">Stan-Eminem</p>
        </div>
      </div>

<div className="flex flex-row justify-center items-center mt-16 mx-10">

  
<div>
  <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#ffffff"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
  </div>
  
  

</div>

<div className="flex flex-col items-center mt-14">
  <p className="text-[#828282]  font-bold font-sans text-sl">LYRICS</p>
  <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#828282"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
</div>
      
      
      


      

    </>

  );
}
