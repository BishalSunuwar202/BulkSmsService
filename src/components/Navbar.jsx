import { IoIosArrowDown } from "react-icons/io";
import logos from "../assets/logo-removebg-preview.png";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between items-center p-8">
        <div className="flex items-center ">
          <img
            className="h-10 md:h-16 md:w-14 rounded-full"
            src={logos}
            alt=""
          />
          <p className="text-white text-sm md:font-bold">The SMS Central</p>
        </div>
        <div className="text-white md:hidden  text-4xl">
          <RxHamburgerMenu />
        </div>
        <div className="hidden md:flex text-white font-thin tracking-tight justify-between gap-2 lg:gap-4">
          <div className="flex gap-1 items-center hover:bg-slate-700 cursor-pointer focus:ring-3 hover:ring-2 rounded-md p-1">
            <h1>About Us</h1>
            <IoIosArrowDown />
          </div>

          <h1 className=" hover:bg-slate-700 cursor-pointer focus:ring-3 hover:ring-2 rounded-md p-1">
            What We Do
          </h1>
          <div className="flex gap-1 items-center  hover:bg-slate-700 cursor-pointer focus:ring-3 hover:ring-2 rounded-md p-1">
            <h1>Our results</h1>
            <IoIosArrowDown />
          </div>
          <h1 className=" hover:bg-slate-700 cursor-pointer focus:ring-3 hover:ring-2 rounded-md p-1">
            Products
          </h1>
          <h1 className=" hover:bg-slate-700 cursor-pointer focus:ring-3 hover:ring-2 rounded-md p-1">
            Contact
          </h1>
        </div>
        <button className="bg-orange-200 rounded-xl font-thin p-1 lg:px-4 lg:py-2 max-h-10 hidden md:block">
          Try it Free
        </button>
      </div>
    </>
  );
};

export default Navbar;
