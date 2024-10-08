import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FAQtext } from "../constants/index.js";
import { useState } from "react";

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [open, setOpen] = useState(false);
  const toggleFaq = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
    setOpen(!open);
  };
  return (
    <div className="mt-20 md:m-20 flex flex-col items-center gap-4 px-8">
      <button className="bg-orange-100 rounded p-1 text-sm md:text-lg hover:bg-red-200 focus:ring-purple-200 focus:ring-2 ">
        Have a Question?
      </button>
      <p className="text-white font-semibold text-sm md:text-xl">
        FREQUENTLY ASKED QUESTION
      </p>
      <ul className="text-white flex flex-col md:grid md:grid-cols-2 md:gap-x-10 gap-2  text-xs ">
        {FAQtext.map((el) => (
          <li key={el.id} className="faq-item ">
            <div
              className={`bg-slate-800 flex p-2 md:text-sm flex-col justify-center rounded-lg cursor-pointer hover:bg-slate-700 ${
                openFAQ === el.id ? "active " : ""
              }`}
              onClick={() => toggleFaq(el.id)}
            >
              <div className="flex items-center justify-between">
                <h1 className="p-1 md:p-3 font-semibold text-sm">
                  {el.question}
                </h1>
                {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
              {openFAQ === el.id && <p className="p-1 mt-1 md:-mt-2">{el.answer}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
