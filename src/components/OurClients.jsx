import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards/InfiniteMovingCardsDemo";

const OurClients = () => {
  return (
    <div className="mt-20  flex flex-col items-center overflow-hidden">
      <button className="bg-red-100 text-slate-800 rounded-lg m-3 text-xs p-2 pr-4 pl-4 flex xl:text-lg">
        Our Clients
      </button>
      <p className="text-white mt-2 text-2xl font-semibold xl:text-3xl">
        GET ON ANOTHER{" "}
      </p>
      <p className="text-white mb-2 text-2xl font-semibold xl:text-3xl">
        LEVEL WITH US
      </p>
      <p className="text-white text-xs m-2 p-2 tracking-tight md:text-sm xl:text-lg">
        We&apos;ve assisted big-name brands elevate the functionality and
        consistently achieve new heights in their industry, fostering ongoing
        success and growth.
      </p>

      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default OurClients;
