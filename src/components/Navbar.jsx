import { IoIosArrowDown } from "react-icons/io";
import logos from "../assets/logo-removebg-preview.png";
const Navbar = () => {
  return (
    <>
      <div className="mt-12 flex justify-between">
        <div className="flex items-center space-x-2">
          <img className="h-16 w-16 rounded-full" src={logos} alt="" />
          <p className="text-white">The SMS Central</p>
        </div>
        <div className="flex text-white font-thin tracking-tight w- justify-between w-6/12">
          <div className="flex ">
            <h1>About Us</h1>
            <IoIosArrowDown className="transform translate-y-1" />
          </div>

          <h1>What We Do</h1>
          <h1>Our results</h1>
          <h1>Products</h1>
          <h1>Contact</h1>
        </div>
        <button className="bg-rose-100 rounded-xl font-thin px-4 py-2 max-h-10">
          Try it Free
        </button>
      </div>
    </>
  );
};

export default Navbar;
