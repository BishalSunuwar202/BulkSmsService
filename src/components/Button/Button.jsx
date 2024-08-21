import { MdOutlineArrowOutward } from "react-icons/md";

const Button = () => {
  return (
    <button className="bg-purple-600 rounded-lg mt-3 text-xs md:p-2 flex p-2">
      Get Started
      <MdOutlineArrowOutward className=" md:ml-1 md:text-base" />
    </button>
  );
};

export default Button;
