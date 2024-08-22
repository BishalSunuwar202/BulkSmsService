import { BsArrowUpRightCircleFill } from "react-icons/bs";
import SmsPic from "../assets/Leading-SMS-Service-in-Nepal.webp";
import { headText } from "../constants/index.js";
const Head = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col px-8">
        <div className="flex flex-col">
          <p className="text-white font-serif text-xl p-2 font-bold md:text-4xl mx-2 xl:mx-0 text-center md:text-start">
            YOUR <span className="text-sky-400">PARTNER </span> FOR BULK
            <span className="text-sky-400"> SMS </span>SERVICE
          </p>
          <div className="flex">
            <input
              className="mt-4 mb-4 p-2 bg-slate-600 rounded-2xl flex-1 font-light text-sm md:font-semibold w-full relative cursor-pointer lg:p-3 lg:font-bold lg:tracking-wider"
              type="text"
              placeholder="Enter your queries"
            />
            <button className="bg-orange-200 mt-4 mb-4 p-1.5 rounded-xl -ml-20 flex gap-1 absolute end-8 top-50 md:end-96 lg:end-[43.8%] lg:p-2.5 lg:top-50 xl:mr-5">
              <h1 className="xl: tracking-wider">Let&apos;s Talk</h1>
              <BsArrowUpRightCircleFill className="text-2xl" />
            </button>
          </div>

          <p className="text-white tracking-tight xl:tracking-wide py-6">{headText}</p>
        </div>
        <img  className="md:w-80 lg:w-96 xl:w-5/12 rounded-xl md:ml-8" src={SmsPic} alt="Bulk Sms Service Picture" />
      </div>
    </>
  );
};

export default Head;
