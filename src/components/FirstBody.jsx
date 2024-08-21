//import officePic from "../assets/officeworkpic.jpg";
import Card from "./Card/Card";
import { text1 } from "../constants/index.js";
import { text2 } from "../constants/index.js";

const FirstBody = () => {
  return (
    <>
      <div className="my-12 relative rounded-xl w-full flex min-h-80  justify-center bg-officeworkpic bg-cover p-8 ">
        {/* <img
          className="max-h-80 w-full object-cover z-10"
          src={officePic}
          alt="people working"
        /> */}

        <div className="flex flex-col md:flex md:flex-row md:bottom-0 top-0 z-20 gap-2 items-center md:w-full bottom-0">
          <div className="space-y-2 flex flex-col items-center text-xs md:ml-20 ">
            <h1 className="bg-purple-500 text-white md:px-4 rounded-lg tracking-tight font-thin md:font-bold p-2 md:text-lg">
              Why choose us
            </h1>
            <h1 className=" bg-slate-900 text-white p-2 md:p-4 rounded-lg flex flex-col md:font-bold md:text-lg">
              OUR ADVANTAGES
            </h1>
          </div>

          <Card text={text1} />
          <Card text={text2} />
        </div>
      </div>
    </>
  );
};

export default FirstBody;
