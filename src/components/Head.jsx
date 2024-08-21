import { BsArrowUpRightCircleFill } from "react-icons/bs";
import SmsPic from "../assets/Leading-SMS-Service-in-Nepal.webp";
import { headText } from "../constants/index.js";
const Head = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col px-8">
        <div className="flex flex-col">
          <p className="text-white font-serif text-xl p-2 font-bold md:text-4xl mx-2 text-center md:text-start">
            YOUR <span className="text-sky-400">PARTNER </span> FOR BULK
            <span className="text-sky-400"> SMS </span>SERVICE
          </p>
          <div className="flex">
            <input
              className="mt-4 mb-4 p-2 bg-slate-600 rounded-2xl z-10  flex-1"
              type="text"
              placeholder="Enter your queries"
            />
            <button className="bg-orange-200 mt-4 mb-4 p-1 rounded-2xl z-20 -ml-20 flex items-center gap-1">
              <h1 className="">Let&apos;s Talk</h1>
              <BsArrowUpRightCircleFill className="text-2xl" />
            </button>
          </div>

          <p className="text-white tracking-tight py-6">{headText}</p>
        </div>
        <img  className="md:w-80 lg:w-96 rounded-xl md:ml-8" src={SmsPic} alt="Bulk Sms Service Picture" />
      </div>
    </>
  );
};

export default Head;
