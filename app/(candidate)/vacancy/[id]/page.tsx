"use client";

import { useRouter } from "next/navigation";

import Header from "../../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import Footer from "@/app/components/Footer/Footer";

export default function VacancyItemPage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <section className="bg-[#f3f5f8] min-h-full p-2 md:pb-8 md:pt-16">
        <div className="max-w-[850px] rounded-md bg-white mx-auto  py-4">
          <div className="flex pb-3 px-5  justify-between border-b border-[#f3f5f8]">
            <button
              onClick={() => router.back()}
              className="items-center text-lg flex gap-2 text-primaryOrange-50 hover:text-orange-700 font-extrabold"
            >
              <BiArrowBack />
              Go back
            </button>
            <div className="flex gap-9">
              <button className="hidden md:block text-white font-extrabold bg-primaryOrange-50 hover:bg-orange-700 text-lg py-3 px-16 rounded-md">
                Apply
              </button>
              <button className="text-primaryOrange-50 hover:text-orange-700">
                <AiOutlineStar size={28} />
              </button>
            </div>
          </div>

          <div className="px-2 md:px-5 md:pt-3 flex flex-col gap-2 md:gap-5">
            <h2 className="font-extrabold text-3xl">
              Some name of ksadjaslkjlaksdjlk
            </h2>
            <p>343434-433434</p>
            <div className="flex gap-4 items-center">
              <span>name</span>
              <div className="w-2 h-2 rotate-45 bg-black"></div>
              <span>location</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              optio dignissimos saepe molestiae eum iusto cumque dolore autem,
              perspiciatis similique nesciunt sapiente ab, doloremque sint rerum
              recusandae aliquam accusamus assumenda.
            </p>
            <div className=" md:mt-4 flex justify-between items-center">
              <button className="text-white font-extrabold bg-primaryOrange-50 hover:bg-orange-700 text-lg py-4 w-full md:w-auto px-20 rounded-md ">
                Apply
              </button>
              <button className="hidden md:block text-primaryOrange-50 hover:text-orange-700">
                <AiOutlineStar size={28} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
