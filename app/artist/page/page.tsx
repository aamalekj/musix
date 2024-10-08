import Image from "next/image";

export default function Home() {
  return (
    <>


      <div className=" flex flex-row justify-between pt-6 px-4" >

        <div className="flex flex-row items-center justify-center">
          <img className="size-14 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s" alt="" />
          <p className="text-white font-bold font-sans text-[6px]; ml-2 text-center">Welcome Back,<br />
            aamalekj.</p>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-center items-center size-14 rounded-full bg-white/30 ml-10 backdrop-blur-sm">
            <svg className="" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#d8d8d8"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>
          </div>
        </div>


      </div>
      <div className="flex flex-row justify-between">
        <div className="flex justify-center">
          <p className="text-white font-bold text-xl pt-12 px-4">Followed Artists</p>
        </div>
        <div className="flex flex-row items-end justify-center">
          <p className="text-gray-400 font-normal font-sans text-[10px]">See All</p>
          <svg className="ml-2 mr-1" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#B7B7B7"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
        </div>
      </div>

      <div className="flex flex-row px-4 pt-6 overflow-x-auto overflow-hidden">
        <div className="flex flex-col items-center mr-5">
          <img className=" rounded-full size-24" src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" alt="" />
          <p className="text-white  font-bold font-sans text-xs mt-2">Eminem</p>
        </div>
        <div className="flex flex-col items-center mr-5">
          <img className="size-24 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoT6vatNyBKd9BZjDIuzAgtZWljLqOE6pKQ&s" alt="" />
          <p className="text-white  font-bold font-sans text-xs mt-2">Kendrick Lamar</p>
        </div>
        <div className="flex flex-col items-center mr-5">
          <img className="size-24 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIh47f3l3SFTppQ1hFP79TaSsbXhIXezMYQ&s" alt="" />
          <p className="text-white  font-bold font-sans text-xs mt-2">The Weekend</p>
        </div>
        <div className="flex flex-col  items-center mr-5">
          <img className="size-24 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIf4LPJWrvzwnVs_EHovlv1sycguMODvEbsw&s" alt="" />
          <p className="text-white  font-bold font-sans text-xs mt-2">Travis Scott</p>
        </div>
        <div className="flex flex-col  items-center mr-5">
          <img className="size-24 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpUG0PBCYI9_V7XDTM3EcwZqAJGRIVxsnqA&sb" alt="" />
          <p className="text-white  font-bold font-sans text-xs mt-2">xxxtentacion</p>
        </div>
        <div className="flex flex-col items-center mr-5">
          <img className="size-24 rounded-full" src="https://i1.sndcdn.com/artworks-cb1329c1-a561-4659-b0a8-bd23568610ec-0-t240x240.jpg" alt="" />
          <p className="text-white  font-bold font-sans text-xs mt-2">A$AP Rocky</p>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex justify-center">
          <p className="text-white  font-bold font-sans text-xl pt-12 px-4">Recently Played</p>
        </div>
        <div className="flex flex-row items-end justify-center">
          <p className="text-gray-400 font-normal font-sans text-[10px]">See All</p>
          <svg className="ml-2 mr-1" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#B7B7B7"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
        </div>

      </div>
      <div className="flex flex-row px-4 pt-6 overflow-x-scrol">
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">Without Me</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Without Me</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-Q8xGFi8JQeR9RLX9FJUuSTZW3E_RvUAyg&s" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">Fein</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Travis Scott</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ipmSQ04UFs-iFCRjddDeZL7YBH8FFNABUQ&s" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">Humble</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Kendrick Lamar</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">I Wonder</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Kanye West</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex justify-center">
          <p className="text-white  font-bold font-sans text-xl pt-12 px-4">April Popular Songs</p>
        </div>
        <div className="flex flex-row items-end justify-center">
          <p className="text-gray-400 font-normal font-sans text-[10px]">See All</p>
          <svg className="ml-2 mr-1" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#B7B7B7"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
        </div>

      </div>
      <div className="flex flex-row px-4 pt-6 overflow-x-scrol">
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpwBNQWfnJkrsXGm7ZCF67utMN0NSmsWS2g&sg" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">For All The Dogs</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Drake</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlpE_lUTg6sw6u5SFV1mRY75ehmlAc1VArwg&s" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">Houdini</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Eminem</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://upload.wikimedia.org/wikipedia/en/c/ca/Interstellar_soundtrack_album_cover.jpg" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">Interstellar</p>
          <p className="
           text-xs mt-2">Hans Zimmer</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://s11279.pcdn.co/wp-content/uploads/2010/11/kanye-album-cover-4.png" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">Runaway</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Kanye West</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex justify-center">
          <p className="text-white  font-bold font-sans text-xl pt-12 px-4">New Tracks</p>
        </div>
        <div className="flex flex-row items-end justify-center">
          <p className="text-gray-400 font-normal font-sans text-[10px]">See All</p>
          <svg className="ml-2 mr-1" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#B7B7B7"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
        </div>

      </div>
      <div className="flex flex-row px-4 pt-6 overflow-x-scrol">
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://upload.wikimedia.org/wikipedia/en/9/93/KendrickGKMC.jpg" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">Good Kid</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Kendrick Lamar</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://i.scdn.co/image/ab67616d0000b2735340c32ae148ecada8f65cc2" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">The Way I Am</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Eminem</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://upload.wikimedia.org/wikipedia/en/2/21/%3F_XXXTENTACION_Cover.png" alt="" />
          <p className="text-white  font-bold font-sans text-xl mt-2">?</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">xxxtentacion</p>
        </div>
        <div className="flex flex-col  items-start mr-5">
          <img className="size-[150px] rounded-md" src="https://cdns-images.dzcdn.net/images/cover/4d2f748127feb33e3fb8a397b95bea94/1900x1900-000000-80-0-0.jpg" alt="" />
          <p className="text-white  font-bold font-sans
           text-xl mt-2">Day In a Life</p>
          <p className="text-gray-400 font-normal font-sans text-xs mt-2">Centeral Cee</p>
        </div>
      </div>




    </>

  );
}
