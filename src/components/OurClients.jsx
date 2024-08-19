//import ImageSlider from "./slider/imageSlider";

import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards/InfiniteMovingCardsDemo";

const OurClients = () => {
  return (
    <div className="mt-52  flex flex-col items-center">
      <button className="bg-red-100 text-slate-800 rounded-lg m-3 text-xs p-2 pr-4 pl-4 flex ">
        Our Clients
      </button>
      <p className="text-white mt-2 text-2xl font-semibold">GET ON ANOTHER </p>
      <p className="text-white mb-2 text-2xl font-semibold">LEVEL WITH US</p>
      <p className="text-white text-xs mt-2">
        We&apos;ve assisted big-name brands elevate the functionality and
        consistently achieve new
      </p>
      <p className="text-white text-xs mb-2">
        heights in their industry, fostering ongoing success and growth
      </p>
      {/* <ImageSlider /> */}

      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default OurClients;
