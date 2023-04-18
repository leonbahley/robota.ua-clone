"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import Header from "../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "@/app/components/Footer/Footer";

export default function EditCVPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const saveData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("e.target.elements.value", e.currentTarget.elements);
  };
  return (
    <>
      <Header />
      <section className="bg-[#f3f5f8] pb-12 pt-2 md:pt-6">
        <div className="container mx-auto">
          <h1 className="font-extrabold text-xl md:text-3xl mb-3">
            Profile settings
          </h1>
          <div className="max-w-[600px] bg-white rounded-md px-2 py-4 md:px-5 md:py-7 relative">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="items-center font-extrabold absolute hidden sm:flex gap-2 text-primaryOrange-50 hover:text-orange-700 top-[18px] right-[8px] md:top-[30px] md:right-[21px] z-10"
            >
              <FiEdit2 size={20} />
              Edit
            </button>
            <h2 className="font-extrabold text-xl mb-4  ">
              Log in data <span className="text-red-600">*</span>
            </h2>
            <p className="mb-3 md:mb-4 font-extrabold">
              Email: <span className="font-normal">dssdssdd</span>
            </p>
            <p className="mb-6 md:mb-10 font-extrabold">
              Password: <span className="font-normal">dssdssdd</span>
            </p>
            <h2 className="font-extrabold text-xl mb-4  ">
              Personal information <span className="text-red-600">*</span>
            </h2>
            <p className="  font-extrabold">some text</p>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="max-w-[600px] flex gap-4 bg-primaryOrange-50 w-full rounded-md text-white justify-center text-lg font-extrabold py-4 items-center mt-3 sm:hidden active:bg-orange-700"
          >
            <FiEdit2 size={20} />
            Edit
          </button>
        </div>
      </section>
      <Footer />
      <div
        className={` fixed py-5 px-7 md:px-14 md:py-9  z-30 top-0 right-0 w-[100vw] md:w-[75vw] xl:w-[50vw] h-full bg-white transition ${
          !isSidebarOpen &&
          "translate-x-[103vw] md:translate-x-[78vw] xl:translate-x-[53vw] "
        } ${isSidebarOpen && "translate-x-0 "}`}
      >
        <form
          onSubmit={saveData}
          className="h-full overflow-y-scroll flex flex-col gap-3 md:gap-6"
        >
          <div>
            <h3 className="font-extrabold text-xl mb-3 md:mb-6">
              Log in data <span className="text-red-600">*</span>
            </h3>
            <div className="flex flex-col gap-2 md:gap-5">
              <input
                placeholder="Email"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
              <input
                placeholder="Password"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl mb-3 md:mb-6 ">
              Personal information <span className="text-red-600">*</span>
            </h3>

            <input
              placeholder="First and last name"
              className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2 w-full"
              type="text"
            />
          </div>

          <div className=" flex flex-col md:flex-row gap-4 sticky bottom-0 bg-white ">
            <button className="bg-primaryOrange-50 hover:bg-orange-700 text-white font-extrabold border border-transparent w-full py-2  md:py-3 rounded-md">
              Save changes
            </button>
            <button
              className="text-primaryOrange-50 border-2 border-primaryOrange-50 hover:border-orange-700 hover:text-orange-700 font-extrabold w-full py-2  md:py-3 rounded-md"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
        <button
          className=" text-black/50 hover:text-black bg-white w-12 h-12 rounded-full absolute top-3 right-0 md:left-0 md:-translate-x-1/2"
          onClick={() => setIsSidebarOpen(false)}
        >
          <AiOutlineClose className="mx-auto" size={25} />
        </button>
      </div>
      <div
        className={`z-20 h-screen ${
          isSidebarOpen ? "block" : "hidden"
        } fixed inset-0 bg-black/40`}
      ></div>
    </>
  );
}
