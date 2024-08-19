import officePic from "../assets/officeworkpic.jpg";
import Card from "./Card/Card";
import { text1 } from "../constants/index.js";
import { text2 } from "../constants/index.js";

const FirstBody = () => {
  console.log(text1);
  return (
    <>
      <div className="mt-10 relative">
        <div className="relative">
          <img
            className="max-h-80 w-full object-cover"
            src={officePic}
            alt="people working"
          />
        </div>
        <h1 className="absolute bg-purple-600 text-white py-2 mb-2 px-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2 left-20 top-48 font-small tracking-tight font-thin text-xs">
          Why choose us
        </h1>
        <h1 className="absolute bg-slate-900 text-white m-2 py-2 px-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2 left-24 top-60 flex flex-col">
          <span>OUR</span>
          <span>ADVANTAGES</span>
        </h1>
        <div className="absolute left-1/2 top-48">
          <Card text={text1} />
        </div>
        <div className=" absolute right-32 top-48">
          <Card text={text2} />
        </div>
      </div>
    </>
  );
};

export default FirstBody;
