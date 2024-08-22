import { IoIosArrowDown } from "react-icons/io";
import logos from "../assets/logo-removebg-preview.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <div
        className={
          "flex flex-col md:flex-row text-white font-thin tracking-tight justify-between gap-3 md:gap-2 lg:gap-4 items-center"
        }
      >
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
        <button className="bg-orange-200 rounded-xl  p-1 lg:px-4 lg:py-2 max-h-10  md:block text-black">
          Try it Free
        </button>
      </div>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className=" flex justify-between items-center p-8">
        <div className="flex items-center ">
          <img
            className="h-10 md:h-16 md:w-14 xl:w-18 xl:h:18 rounded-full"
            src={logos}
            alt="thesmscentral logo"
          />
          <p className="text-white text-sm md:font-bold xl:text-xl">The SMS Central</p>
        </div>

        <div className="text-white md:hidden  text-4xl" onClick={toogleBar}>
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>
      </div>

      {open && (
        <div className="bg-slate-700 flex justify-center p-2 md:hidden">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
