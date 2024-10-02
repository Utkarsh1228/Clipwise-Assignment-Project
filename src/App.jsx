import { ChevronDown, Dot, Mouse, MoveLeft, MoveRight } from "lucide-react";
import Navbar from "./component/Navbar"
import { useState } from "react";


function App() {

  const hero_item_data = [
    {
      item_name: "Crystal Agate Phone Grip",
      item_price: "18.99$",
      url: "./image.png"
    },
    {
      item_name: "Crystal Agate Phone Grip",
      item_price: "8.99$",
      url: "./image.png"
    },
    {
      item_name: "Crystal Agate Phone Grip",
      item_price: "19.99$",
      url: "./image.png"
    },
    {
      item_name: "Crystal Agate Phone Grip",
      item_price: "49.99$",
      url: "./image.png"
    },
  ];

  const [isFiltersOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);


  const [currentfilter, setCurrentFilter] = useState("All Products ");
  const [currentSort, setCurrentSort] = useState("Best Selling ");

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveLeft = () =>{
    if(currentIndex !== 0){
      setCurrentIndex(currentIndex - 1);
    }
  }

  const moveRight = () =>{
    if(currentIndex < hero_item_data.length - 1){
      setCurrentIndex(currentIndex + 1);
    }
  }

  const setFilter = async (num) => {
    setCurrentFilter(currentfilter.substring(0, currentfilter.length - 1) + " " + num);
    setIsFilterOpen(false);
  }
  
  const setSort = async (num) => {
    setCurrentSort(currentSort.substring(0, currentSort.length - 1) + " " + num);
    setIsSortOpen(false);
  }



  return (
    <>
      {/* hero section */}

      <section className="px-5 lg:px-16 py-10 h-full text">
        <Navbar/>
        <img src="./background.png" alt="" className="size-full absolute top-0 left-0 -z-50 shadow-none"/>

        <div className="grid xl:grid-cols-2 h-full ">
          <div className="text-white my-[20%] space-y-10">
            <div className="space-y-[-0.4em]">
              <h3 className="text-[2em] md:text-[2.5em]">Welcome to</h3>
              <h1 className="text-[2.6em] md:text-[5em] font-semibold font-sans">Pop Rock Crystal Shop!</h1>
            </div>
            <p className="lg:w-1/2 text-black">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
            </p>

            <div className="flex">
              <button className=" bg-white rounded-3xl py-5 px-14 text-blue-950 font-semibold text-md">SHOP NOW</button>
              <button className=" rounded-3xl py-5 px-14 text-blue-950/50 text-md">about us</button>
            </div>
          </div>
          <div className="flex flex-col my-auto justify-center items-center w-full h-full">
            <div className="grid mx-auto size-full xl:size-[70%] bg-white rounded-3xl border shadow-lg shadow-black/10">
              <div className="flex w-32 h-12 mt-5 xl:mt-14 bg-[#8A93E5] items-center justify-center new-lot relative left-[-0.1em] z-10">
                <p className="text-lg text-white">New Lot</p>
              </div>
                <img src={hero_item_data[currentIndex].url} alt="" className="flex mx-auto size-fit relative  drop-shadow-2xl shadow-black"/>
                <div className="space-y-3 my-5">
                  <div className="flex mx-auto w-1/4 h-[0.1em] bg-gray-400/50 opacity-50"></div>
                  <p className="flex justify-center text-2xl text-gray-400 gap-2">{hero_item_data[currentIndex].item_name.toUpperCase()} <span className="text-green-900 font-bold">{"- " + hero_item_data[currentIndex].item_price}</span></p>
                </div>
            </div>

            <div className="flex font-bold mt-8 text-white w-1/2 justify-between">
              <MoveLeft className= {"bg-[#8A93E5] p-1 w-fit " + (currentIndex === 0 ? "opacity-50 cursor-not-allowed": "") } onClick={moveLeft} aria-disabled={(currentIndex === 0 ? true: false)}/>

              {hero_item_data.map((item, index) => (
                <Dot className={"font-extrabold text-2xl text-[#8A93E5] " + (currentIndex === index? "opacity-50 transition scale-125 duration-300 ease-in-out": "")} key={index} size={28} strokeWidth={10}/>
              ))}

              <MoveRight className={"bg-[#8A93E5] p-1 w-fit " + (currentIndex === hero_item_data.length - 1 ? "opacity-50 cursor-not-allowed": "")} onClick={moveRight} aria-disabled={(currentIndex === hero_item_data.length ? true: false)}/>
              
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full gap-3 text-[#317189] py-16">
          <Mouse className="mb-4 font-bold"/>
          <h3 className="font-semibold">scroll down</h3>
        </div>

      </section>


      {/* middle section */}

      <section className="flex flex-col px-5 lg:px-16 py-10 h-full text">
        
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-6xl text-[#31546D] font-semibold">All product</h1>
          <div className="flex mx-auto w-[12%] xl:w-[4%] h-[0.2em] bg-gray-400/35 opacity-70"></div>
        </div>

        <div className="flex py-10 tracking-wide gap-20">
          <div className="flex gap-2">
            <p className="text-gray-400/80 font-bold text-md">Filter:</p>
            <p className="text-[#31546D] font-bold">{currentfilter}</p>
            <div className="grid">
              <ChevronDown onClick={() => {setIsFilterOpen(!isFiltersOpen)}}/>
              {isFiltersOpen && (
                <>
                  <div className="flex flex-col">
                    <button className="border border-transparent/15 px-4 py-2 hover:bg-gray-400/20" onClick={()=> setFilter("1")}>{currentfilter.substring(0, currentfilter.length - 1) + "1"}</button>
                    <button className="border border-t-0 border-transparent/15 px-4 py-2 hover:bg-gray-400/20" onClick={()=> setFilter("2")}>{currentfilter.substring(0, currentfilter.length - 1) + "2"}</button>
                    <button className="border border-t-0 border-transparent/15 px-4 py-2 hover:bg-gray-400/20" onClick={()=> setFilter("3")}>{currentfilter.substring(0, currentfilter.length - 1) + "3"}</button>
                    <button className="border border-t-0 border-transparent/15 py-2 hover:bg-gray-400/20" onClick={()=> setFilter("4")}>{currentfilter.substring(0, currentfilter.length - 1) + "4"}</button>
                  </div>
                </>
              )}
            </div>

          </div>

          <div className="flex gap-2">

            <p className="text-gray-400/80 font-bold text-md">Filter:</p>
            <p className="text-[#31546D] font-bold">{currentSort}</p>
            <div className="grid">
              <ChevronDown onClick={() => {setIsSortOpen(!isSortOpen)}}/>
              {isSortOpen && (
                <>
                  <div className="flex flex-col">
                    <button className="border border-transparent/15 px-4 py-2 hover:bg-gray-400/20" onClick={()=> setSort("1")}>{currentSort.substring(0, currentSort.length - 1) + "1"}</button>
                    <button className="border border-t-0 border-transparent/15 px-4 py-2 hover:bg-gray-400/20" onClick={()=> setSort("2")}>{currentSort.substring(0, currentSort.length - 1) + "2"}</button>
                    <button className="border border-t-0 border-transparent/15 px-4 py-2 hover:bg-gray-400/20" onClick={()=> setSort("3")}>{currentSort.substring(0, currentSort.length - 1) + "3"}</button>
                    <button className="border border-t-0 border-transparent/15 py-2 hover:bg-gray-400/20" onClick={()=> setSort("4")}>{currentSort.substring(0, currentSort.length - 1) + "4"}</button>
                    
                  </div>
                </>
              )}
            </div>

          </div>

        </div>

        <div className="flex flex-col gap-20">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
            {hero_item_data.map((item, index)=>(
              <div key={index} className="py-8 flex flex-col justify-center items-center hover:shadow-2xl hover:shadow-black/5 rounded-3xl border">
                <img src={item.url} alt="" className="w-1/4 mb-8"/>
                <p className="text-2xl text-gray-400 gap-2 mt-4">{item.item_name.toUpperCase()}</p>
                <span className="text-green-900 font-bold text-xl">{item.item_price}</span>
                <button className="mt-5 hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] px-4 py-2 border-[0.15em] rounded-xl size-1/2 text-xl text-[#75CCEB] hover:text-white font-bold border-[#75CCEB] border-solid">Buy Now</button>
              </div>
            ))}
            {hero_item_data.map((item, index)=>(
              <div key={index} className="py-8 flex flex-col justify-center items-center hover:shadow-2xl hover:shadow-black/5 rounded-3xl border">
                <img src={item.url} alt="" className="w-1/4 mb-8"/>
                <p className="text-2xl text-gray-400 gap-2 mt-4">{item.item_name.toUpperCase()}</p>
                <span className="text-green-900 font-bold text-xl">{item.item_price}</span>
                <button className="mt-5 hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] px-2 py-2 border-[0.15em] rounded-xl size-1/2 text-xl text-[#75CCEB] hover:text-white font-bold border-[#75CCEB] border-solid">Buy Now</button>
              </div>
            ))}
          </div>

          <button className="flex mx-auto justify-center mt-5 hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] px-2 py-2 border-[0.1em] rounded-3xl size-[50%] md:size-1/5 xl:size-1/12 text-xl text-[#75CCEB] hover:text-white font-bold border-[#75CCEB] border-solid">View All</button>

        </div>
      </section>



      {/* bottom section */}

      <section className="h-screen mt-10 bg-gradient-to-bl from-[#76C2E5] via-[#7FD6F6] to-[#67BCFF] relative w-full z-0">
        <img src="Vector 2.png" alt="" className="absolute w-full h-screen -z-10" />
        
        
        <div className="flex flex-col lg:flex-row h-full z-10">
          
          
          <div className="flex justify-center 2xl:justify-end items-center text-white gap-4">
            <div className="text-[#31546D] w-full text-center 2xl:text-right space-y-10">
              <div>
                <h3 className="text-5xl">BEST PRICE</h3>
                <h1 className="text-7xl">Agate Phone Grip</h1>
              </div>
              <div className="flex justify-center 2xl:justify-end items-center gap-3">
                <div className="relative text-[#41A0B7]">
                  <p className="text-3xl">44.50$</p>
                  <div className="absolute w-full border-t-2 border-[#41A0B7] top-1/2"></div>
                </div>
                <h1 className="text-[#E35B3E] font-bold text-7xl">19.50$</h1>
              </div>
              <div className="flex justify-center 2xl:justify-end w-full items-center">
                <p className="text-md font-light w-1/2">
                  These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
                </p>
              </div>
              <button className="hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] px-10 py-3 border-[0.1em] rounded-2xl text-xl text-[#75CCEB] hover:text-white font-bold border-[#75CCEB] border-solid transition-colors duration-300">
                BUY NOW
              </button>
            </div>
          </div>
          
          <div className="h-full lg:w-[100%]">
            <div className="flex justify-center items-center h-full w-full lg:p-20">
              <div className="w-[80%] h-full lg:w-full lg:h-1/2 xl:w-[80%] xl:h-[60%] 2xl:w-[90%] 2xl:h-[100%] bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-[70%] h-[70%] 2xl:w-[70%] 2xl:h-[70%] bg-white shadow-2xl inset-1 shadow-black/10 rounded-full flex items-center justify-center">
                  <div className="w-[60%] h-[60%] 2xl:w-[60%] 2xl:h-[60%] bg-white shadow-2xl inset-1 shadow-black/10 rounded-full flex items-center justify-center">
                    <img src="./image.png" alt=""  className="w-1/4 xl:w-1/3"/>
                  </div>
                </div>
              </div>
          </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      
      <div className="w-full h-96 bg-[#0A294DCC]"></div>
    </>
  )
}

export default App
