import { IoIosCheckmark } from "react-icons/io";
import laptopBoy from "../assets/clients/laptopboy.png";
const SecondBody = () => {
  return (
    <div className=" mt-20 bg-gradient-to-r from-purple-500 from-10% via-purple-500 via-50% to-rose-100 to-90% w-full relative flex md:flex-row flex-col z-0">
      {/* <div className="w-2/3 h-12  bg-neutral-950 rounded inclined-left ml-auto"></div>
      <div className="w-64 h-12  bg-neutral-950 rounded inclined-left -mt-2 ml-auto"></div>
      <div className="flex flex-col max-w-96 ml-10 -m-4">
        <p className="text-white text-2xl mb-2 font-semibold">
          WHY COLLABORATE WITH THE SMS CENTRAL?
        </p>
        <p className="text-white text-xs font-serif tracking-tight mt-2 mb-2">
          We provide carrier-grade mobile messaging solutions, with the option
          of advance application integration to ensure a rapid, cost-effective
          time-to-market.
        </p>
        <div className="bg-rose-50 mt-3 rounded-lg p-4 tracking-tighter flex flex-col gap-2 w-72">
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125" />
            <h1 className="text-sm">High Message Delivery Rates</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125" />
            <h1 className="text-sm">User-Friendly Interface</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125" />
            <h1 className="text-sm">Scalability</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125" />
            <h1 className="text-sm">Reports and Analytics</h1>
          </div>
        </div>

        <img
          className="absolute -top-2 start-72 scale-90 "
          src={laptopBoy}
          alt="boy with laptop"
        />
        <img className=" " src={laptopBoy} alt="boy with laptop" />
      </div> */}

      <div className="md:w-2/3 w-[60%] h-12  bg-neutral-950 rounded inclined-left absolute right-0 -z-10 -top-1"></div>
      <div className="md:w-64 w-[40%] h-12  bg-neutral-950 rounded inclined-left absolute right-0 -z-10 top-8"></div>

      <div className="flex flex-col flex-1 md:m-4 mt-20 p-4 justify-center ">
        <p className="text-white text-xs md:text-2xl mb-2 font-semibold">
          WHY COLLABORATE WITH THE SMS CENTRAL?
        </p>
        <p className="text-white text-xs font-serif tracking-tight mt-2 mb-2 md:text-sm xl:text-lg">
          We provide carrier-grade mobile messaging solutions, with the option
          of advance application integration to ensure a rapid, cost-effective
          time-to-market.
        </p>
        <div className="bg-rose-50 mt-3 rounded-lg md:p-6 tracking-tighter md:tracking-normal flex flex-col gap-2 md:max-w-72 xl:max-w-96 p-3">
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125 xl:scale-150" />
            <h1 className="text-sm xl:text-lg">High Message Delivery Rates</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125 xl:scale-150" />
            <h1 className="text-sm xl:text-lg">User-Friendly Interface</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125 xl:scale-150" />
            <h1 className="text-sm xl:text-lg">Scalability</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-125 xl:scale-150" />
            <h1 className="text-sm xl:text-lg">Reports and Analytics</h1>
          </div>
        </div>
      </div>
      <div className="flex  justify-center">
        <img className="" src={laptopBoy} alt="boy with laptop" />
      </div>
    </div>
  );
};

export default SecondBody;
