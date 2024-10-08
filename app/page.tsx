import Image from "next/image";

export default function Home() {
  return <>
      {/* Container */}
      <div>


        {/* Header */}
        <div className="flex flex-row justify-center items-center bg-white w-full h-16">
          <div className="w-1/4 ml-4">
            <a className="font-bold font-sans text-3xl no-underline hover:underline" href="">Skillex.</a>
          </div>

          <div className="flex flex-row justify-around w-2/4 mx-10">
            <a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Find possison</a>
            <a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Categoties</a>
            <a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Skills</a>
            <a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Customer</a>
          </div>

          <div className="flex flex-row items-center justify-around w-1/4 mx-4">
            <a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Login/Signup</a>
            <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center dark:border-slate-800 dark:text-slate-800 dark:hover:text-white dark:hover:bg-slate-800 dark:focus:ring-blue-800 font-sans font-bold">Free trial</button>
          </div>
        </div>

      </div>

      {/* Body1 */}
      <div className="flex flex-row mt-20 ml-4">
        <div>
          <p className="font-bold text-slate-800 font-sans text-8xl">Watch.<br />
            Learn.<br />
            Grow.</p>
        </div>
      </div>

      {/* Body2 */}
      <div className="flex flex-row mt-20 ml-4">
        <input className="flex items-center border-solid rounded-sm border-2 border-slate-800 w-80 h-32 font-sans text-xl font-semibold text-gray-400" type="text" placeholder="    Find your passion" />

        <button className="transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300bg-orange-400 border-solid rounded-sm border-y-2 border-e-2 border-slate-800 w-36 h-32 font-sans text-3xl font-semibold ">GO</button>

      </div>

      {/* Body3 */}
      <div className="flex justify-center items-center flex-col mt-20 w-full">
        <div className="flex flex-row">
          <p className="font-sans text-3xl font-semibold text-slate-800">Unlimited access to </p>
          <p className="font-sans text-3xl font-semibold text-slate-800 mx-2 no-underline hover:underline decoration-green-600 hover:text-4xl">100+</p>
          <p className="font-sans text-3xl font-semibold text-slate-800">intructors.</p>
        </div>

        <div className="flex justify-between w-1/2 mx-4 mt-8">
          <div>
            <a
              className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">All categories</a>
          </div>
          <div>
            <a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Entertaiment</a>
          </div>
          <div>
            <a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Lifestyle</a>
          </div>
          <div><a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Writing</a></div>
          <div><a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Business</a></div>
          <div><a className="font-semibold text-slate-800 font-sans  no-underline hover:underline" href="">Food</a></div>
        </div>


      </div>

      {/* body4 */}
      <div className="flex flex-row justify-between scroll-smooth snap-start">
        <div className="felx flex-col mx-4 mt-20">
          <div className="bg-orange-300 border-solid border-slate-800 w-48 h-52"></div>
          <p className="font-semibold text-slate-800 font-sans mt-4">Sales Marketing</p>
          <p className="font-normal text-slate-800 font-sans mt-2">4 Month</p>
        </div>
        <div className="felx flex-col mx-4 mt-20">
          <div className="bg-orange-300 border-solid border-slate-800 w-48 h-52"></div>
          <p className="font-semibold text-slate-800 font-sans mt-4">Sales Marketing</p>
          <p className="font-normal text-slate-800 font-sans mt-2">4 Month</p>
        </div>
        <div className="felx flex-col mx-4 mt-20">
          <div className="bg-orange-300 border-solid border-slate-800 w-48 h-52"></div>
          <p className="font-semibold text-slate-800 font-sans mt-4">Sales Marketing</p>
          <p className="font-normal text-slate-800 font-sans mt-2">4 Month</p>
        </div>
        <div className="felx flex-col mx-4 mt-20">
          <div className="bg-orange-300 border-solid border-slate-800 w-48 h-52"></div>
          <p className="font-semibold text-slate-800 font-sans mt-4">Data analytics</p>
          <p className="font-normal text-slate-800 font-sans mt-2">3 Month</p>
        </div>
        <div className="felx flex-col mx-4 mt-20">
          <div className="bg-orange-300 border-solid border-slate-800 w-48 h-52"></div>
          <p className="font-semibold text-slate-800 font-sans mt-4">Copywriting pro</p>
          <p className="font-normal text-slate-800 font-sans mt-2">2 Month</p>
        </div>
        <div className="felx flex-col mx-4 mt-20">
          <div className="bg-orange-300 border-solid border-slate-800 w-48 h-52"></div>
          <p className="font-semibold text-slate-800 font-sans mt-4">Design art</p>
          <p className="font-normal text-slate-800 font-sans mt-2">4 Month</p>
        </div>
        <div className="felx flex-col mx-4 mt-20">
          <div className="bg-orange-300 border-solid border-slate-800 w-48 h-52"></div>
          <p className="font-semibold text-slate-800 font-sans mt-4">Design art</p>
          <p className="font-normal text-slate-800 font-sans mt-2">4 Month</p>
        </div>
      </div>

      {/* Body5 */}
      <div className="flex mx-4 mt-20 w-full items-baseline flex-row">
        <div className="w-100">
          <p className="font-bold text-slate-800 font-sans mt-2 text-4xl">Get the skills you need for a job that is in demand.</p>
        </div>

        <p className="font-semibold text-slate-800 text-2xl font-sans ml-20 mt-2 w-100">The modern labor market dicates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
      </div>

      {/* Body6 */}



      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="flex flex-col items-center w-1/12 mt-10 ml-6">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
              <svg className="onclick" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" /></svg>
            </div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-2"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="M390-120q-51 0-88-35.5T260-241q-60-8-100-53t-40-106q0-21 5.5-41.5T142-480q-11-18-16.5-38t-5.5-42q0-61 40-105.5t99-52.5q3-51 41-86.5t90-35.5q26 0 48.5 10t41.5 27q18-17 41-27t49-10q52 0 89.5 35t40.5 86q59 8 99.5 53T840-560q0 22-5.5 42T818-480q11 18 16.5 38.5T840-400q0 62-40.5 106.5T699-241q-5 50-41.5 85.5T570-120q-25 0-48.5-9.5T480-156q-19 17-42 26.5t-48 9.5Zm130-590v460q0 21 14.5 35.5T570-200q20 0 34.5-16t15.5-36q-21-8-38.5-21.5T550-306q-10-14-7.5-30t16.5-26q14-10 30-7.5t26 16.5q11 16 28 24.5t37 8.5q33 0 56.5-23.5T760-400q0-5-.5-10t-2.5-10q-17 10-36.5 15t-40.5 5q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480q33 0 56.5-23.5T760-560q0-33-23.5-56T680-640q-11 18-28.5 31.5T613-587q-16 6-31-1t-20-23q-5-16 1.5-31t22.5-20q15-5 24.5-18t9.5-30q0-21-14.5-35.5T570-760q-21 0-35.5 14.5T520-710Zm-80 460v-460q0-21-14.5-35.5T390-760q-21 0-35.5 14.5T340-710q0 16 9 29.5t24 18.5q16 5 23 20t2 31q-6 16-21 23t-31 1q-21-8-38.5-21.5T279-640q-32 1-55.5 24.5T200-560q0 33 23.5 56.5T280-480q17 0 28.5 11.5T320-440q0 17-11.5 28.5T280-400q-21 0-40.5-5T203-420q-2 5-2.5 10t-.5 10q0 33 23.5 56.5T280-320q20 0 37-8.5t28-24.5q10-14 26-16.5t30 7.5q14 10 16.5 26t-7.5 30q-14 19-32 33t-39 22q1 20 16 35.5t35 15.5q21 0 35.5-14.5T440-250Zm40-230Z" /></svg>
            </div>

            <div className="w-1 h-1 bg-slate-700 rounded-full mt-2"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div><div className="w-1 h-1 bg-slate-700 rounded-full mt-1"></div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" /></svg>
            </div>

          </div>

          <div className="flex flex-col ml-4">
            <div className="flex flex-col mt-8">
              <p className="font-bold text-slate-800 font-sans mt-2 text-xl">Leadership</p>
              <p className="font-semibold text-slate-800 font-sans mt-2 text-sl">Fully committed to the success company</p>
            </div>
            <div className="flex flex-col mt-4">
              <p className="font-bold text-slate-800 font-sans mt-8 text-xl">Responsibility</p>
              <p className="font-semibold text-slate-800 font-sans mt-2 text-sl">Empoloyees will always be my top priority</p>
            </div>
            <div className="flex flex-col mt-10">
              <p className="font-bold text-slate-800 font-sans mt-2 text-xl">Flexibility</p>
              <p className="font-semibold text-slate-800 font-sans mt-2 text-sl">The ability to switch is an important skill</p>
            </div>
          </div>
        </div>





        <div className="mt-8  mr-4" >
          <iframe className="rounded-lg" width="660" height="315" src="https://www.youtube.com/embed/3sdGbdpYmCc?si=l4X1sFNDYowAjsg7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>



      <div className="flex justify-center">
        <p className="font-bold text-slate-800 font-sans mt-16 text-6xl">What our customer say.</p>
      </div>

      <div className="flex flex-row mt-16 mx-6 items-center justify-around scroll-smooth snap-start">
        <div className="flex flex-col bg-white w-80 h-96 rounded-xl mx-4">
          <p className="font-sans text-xl font-normal text-slate-800 mx-4  mt-4">a new profession is a lot of vivid impressions. Today I was at the presentaition of the regional business award</p>
          <div className="flex flex-row mt-40 m-4">
            <img className="w-14 h-14 bg-black rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s" alt="" />

            <div className="flex flex-col ml-4 mt-2">
              <p className="font-sans text-sl font-bold text-slate-800">AmirAli</p>
              <p className="font-sans font-bold mt-2 text-green-600">Developer</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-80 h-96 rounded-xl mx-4">
          <p className="font-sans text-xl font-normal text-slate-800 mx-4  mt-4">a new profession is a lot of vivid impressions. Today I was at the presentaition of the regional business award</p>
          <div className="flex flex-row mt-40 mb-4 ml-4">
            <img className="w-14 h-14 bg-black rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpanbZvuwxlc_MxmHySTDxZ19Tih2TAZUbA&s" alt="" />

            <div className="flex flex-col ml-4 mt-2">
              <p className="font-sans text-sl font-bold text-slate-800">AliReza</p>
              <p className="font-sans font-bold mt-2 text-green-600">Clown</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-80 h-96 rounded-xl mx-4">
          <p className="font-sans text-xl font-normal text-slate-800 mx-4  mt-4">a new profession is a lot of vivid impressions. Today I was at the presentaition of the regional business award</p>
          <div className="flex flex-row mt-40 m-4">
            <img className="w-14 h-14 bg-black rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdB8rRgA1qgkw0ckcTrhIa0kpV2ILvbMWg&s" alt="" />

            <div className="flex flex-col ml-4 mt-2">
              <p className="font-sans text-sl font-bold text-slate-800">Mohammad</p>
              <p className="font-sans font-bold mt-2 text-green-600">Mamali</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-80 h-96 rounded-xl mx-4">
          <p className="font-sans text-xl font-normal text-slate-800 mx-4  mt-4">a new profession is a lot of vivid impressions. Today I was at the presentaition of the regional business award</p>
          <div className="flex flex-row mt-40 m-4">
            <img className="w-14 h-14 bg-black rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHGm5ftqmwmMqYKPHXnh95xiAkV8Jrxe1XQ&s" alt="" />

            <div className="flex flex-col ml-4 mt-2">
              <p className="font-sans text-sl font-bold text-slate-800">Amir</p>
              <p className="font-sans font-bold mt-2 text-green-600">Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row bg-white w-full h-48 mt-32">
        <div className="w-1/4 ml-4 mt-4">
          <a className="font-bold font-sans text-3xl no-underline hover:underline" href="">Skillex.</a>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex justify-center items-center w-20 h-10 border-solid border-[1px]">
              <p>Find possion</p>
            </div>
            <div className="flex justify-center items-center w-20 h-10 border-solid border-[1px]">
              <p>Categories</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex justify-center items-center w-20 h-10 border-solid border-[1px]">
              <p>Skills</p>
            </div>
            <div className="flex justify-center items-center w-20 h-10 border-solid border-[1px]">
              <p>Customer</p>
            </div>
          </div>
        </div>
    
    </>
    }
}
