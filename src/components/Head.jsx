import { BsArrowUpRightCircleFill } from "react-icons/bs";
import SmsPic from "../assets/Leading-SMS-Service-in-Nepal.webp";
const Head = () => {
  return (
    <>
      <div className="flex">
        <div className="container">
          <p className="text-white font-serif font-bold text-4xl">
            YOUR <span className="text-sky-400">PARTNER </span> FOR BULK
            <span className="text-sky-400">SMS </span>SERVICE
          </p>
          <input
            className="mt-4 mb-4 p-2 rounded-xl bg-slate-800 relative w-96"
            type="text"
            placeholder="Enter your queries"
          />
          <button className="bg-orange-200 rounded-3xl w-36 m-4 p-2 absolute start-80">
            Let&apos;s Talk
            <BsArrowUpRightCircleFill className="inline" />
          </button>

          <p className="text-white ">
            The SMS central is a leading SMS messaging service provider offering
            two-way SMS communication services straight from your internet
            enabled computer. The Bulk SMS gateway reaches across borders and
            connects to over all mobile network operators in Nepal.
          </p>
        </div>
        <div>
          <img  src={SmsPic} alt="Bulk Sms Service Picture" />
        </div>
      </div>
    </>
  );
};

export default Head;
