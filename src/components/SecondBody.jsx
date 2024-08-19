import { IoIosCheckmark } from "react-icons/io";
import laptopBoy from "../assets/clients/laptopBoy.png";
const SecondBody = () => {
  return (
    <div className=" mt-20 bg-gradient-to-r from-purple-500 from-10% via-purple-500 via-50% to-rose-100 to-90% h-96 w-full relative">
      <div className="w-2/3 h-12  bg-neutral-950 rounded inclined-left ml-auto"></div>
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
        <div className="bg-rose-50 mt-3 rounded-lg p-4 tracking-tighter flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-150" />
            <h1>High Message Delivery Rates</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-150" />
            <h1>User-Friendly Interface</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-150" />
            <h1>Scalability</h1>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosCheckmark className=" bg-orange-200 rounded-lg scale-150" />
            <h1>Reports and Analytics</h1>
          </div>
        </div>

        <img
          className="absolute -top-2 start-72 scale-90 "
          src={laptopBoy}
          alt="boy with laptop"
        />
      </div>
    </div>
  );
};

export default SecondBody;
