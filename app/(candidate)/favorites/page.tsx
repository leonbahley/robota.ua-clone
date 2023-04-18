"use client";

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

import Header from "../components/Header";
import { VscPersonAdd } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import Footer from "@/app/components/Footer/Footer";

export default function SearchPage() {
  const router = useRouter();

  const handleClickOnItem = (e: MouseEvent) => {
    const target = e.target as
      | HTMLDivElement
      | HTMLHeadingElement
      | HTMLHeadingElement
      | HTMLSpanElement;
    if (target.id === "linkToItem") {
      router.push("/vacancy/gg");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <section className="bg-[#f3f5f8] grow p-2 md:pb-8 md:pt-16">
        <div className="max-w-[750px] mx-auto ">
          <div className="flex flex-col gap-5">
            <div
              id="linkToItem"
              onClick={handleClickOnItem}
              className="rounded-md bg-white p-4 hover:cursor-pointer shadow-md hover:shadow-lg"
            >
              <h2 id="linkToItem" className="font-extrabold text-xl mb-2">
                shos robyr man
              </h2>
              <span id="linkToItem">1233-122332 $</span>
              <div id="linkToItem" className="flex gap-5 mb-2">
                <span id="linkToItem">creditcana</span>
                <span id="linkToItem">Kyib</span>
              </div>

              <div className="flex gap-6 items-center text-primaryOrange-50 ">
                <button
                  onClick={() => console.log("click on btn")}
                  className="flex font-extrabold items-center gap-2 hover:text-orange-700"
                >
                  <VscPersonAdd size={23} />
                  Apply
                </button>
                <button
                  onClick={(e) => console.log("click in start")}
                  className="hover:text-orange-700"
                >
                  {" "}
                  <AiOutlineStar size={23} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
