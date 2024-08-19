import { TiMessages } from "react-icons/ti";
import { text3 } from "../constants/index.js";
import { servicesText } from "../constants/index.js";
import { MdOutlineArrowOutward, MdSettingsApplications } from "react-icons/md";
import { FaViber } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import Button from "./Button/Button.jsx";

const Services = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-purple-600 from-10% via-purple-500 via-50% to-rose-100 to-90% h-96 w-full ">
      <div className="w-64 h-12  bg-neutral-950   rounded inclined-right">
        <div className="bg-rose-100 rounded-2xl w-32 container mx-8 p-2 font-bold text-xs text-center">
          Our Services
        </div>
      </div>
      <div className="flex m-8 p-2 ">
        <h1 className="text-white text-2xl w-full">
          WE OFFER OPTIMAL SMS SERVICE
        </h1>
        <div className="flex flex-col ml-10 mr-16">
          <p className="text-white text-xs text-justify tracking-tighter">
            {text3}
          </p>

          <button className="self-start bg-red-200 rounded-lg mt-3 text-xs p-2 flex items-center">
            Get Started
            <MdOutlineArrowOutward className="ml-1 text-base" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 m-8 text-white">
        <div className="flex flex-col bg-slate-900 p-2 items-center justify-center">
          <div className="flex p-2 gap-4 ">
            <TiMessages />
            Bulk SMS
          </div>
          <div className="text-xs m-4 tracking-tight">{servicesText.sms}</div>
          <Button />
        </div>
        <div className="flex flex-col bg-slate-900 p-2 items-center justify-center">
          <div className="flex p-2 gap-2 mt-3">
            <FaViber />
            Viber Business
          </div>
          <div className="text-xs m-4 tracking-tight">{servicesText.viber}</div>
          <Button />
        </div>
        <div className="flex flex-col bg-slate-900 p-2 items-center justify-center">
          <div className="flex  p-2 gap-2 ">
            <AiFillApi />
            SMS API
          </div>
          <div className="text-xs m-4 tracking-tight">{servicesText.api}</div>
          <Button />
        </div>
        <div className="flex flex-col bg-slate-900 p-2 items-center justify-center">
          <div className="flex  p-2 gap-4">
            <MdSettingsApplications className="text-2xl scale-150 mt-4" />
            Custom SMS Application
          </div>
          <div className="text-xs m-4 tracking-tight">
            {servicesText.custom}
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Services;
