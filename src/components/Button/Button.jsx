import { MdOutlineArrowOutward } from "react-icons/md";

const Button = () => {
  return (
    <button className="bg-purple-600 rounded-lg mt-3 text-xs p-2 flex ">
      Get Started
      <MdOutlineArrowOutward className="ml-1 text-base" />
    </button>
  );
};

export default Button;
