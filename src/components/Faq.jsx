import { IoIosArrowDown } from "react-icons/io";
import { FAQtext } from "../constants/index.js";
import { useState } from "react";

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFaq = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <div className="mt-20 flex flex-col items-center gap-4">
      <button className="bg-orange-100 rounded p-1 text-xs hover:bg-red-200 focus:ring-purple-200 focus:ring-2 ">
        Have a Question?
      </button>
      <p className="text-white font-semibold text-xl">
        FREQUENTLY ASKED QUESTION
      </p>
      <div className="">
        <ul className="text-white grid grid-cols-2 gap-2 text-xs text-justify tracking-tighter">
          {FAQtext.map((el) => (
            <li key={el.id} className="faq-item">
              <div
                className={`bg-slate-800 flex flex-col justify-center rounded-lg cursor-pointer hover:bg-slate-700 ${
                  openFAQ === el.id ? "active " : ""
                }`}
                onClick={() => toggleFaq(el.id)}
              >
                <div className="flex justify-between">
                  <h1 className="p-3 font-semibold text-sm">{el.question}</h1>
                  <IoIosArrowDown
                    className="mr-10 mt-2 text-xl"
                    // onClick={() => toogleFaq(el.id)}
                  />
                </div>
                {openFAQ === el.id && (
                  <p className="p-3 max-w-80">{el.answer}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
