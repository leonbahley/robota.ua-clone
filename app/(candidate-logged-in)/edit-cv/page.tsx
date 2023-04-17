"use client";

import Link from "next/link";
import { useState } from "react";

import Header from "../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "@/app/components/Footer/Footer";

export default function EditCVPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header />
      <section className="bg-[#f3f5f8] pb-12 pt-2 md:pt-6">
        <div className="container mx-auto">
          <Link
            className="hidden sm:flex gap-1 items-center font-extrabold text-primaryOrange-50 hover:text-orange-700 mb-4"
            href={"/"}
          >
            <BiArrowBack size={23} />
            To recommended list
          </Link>
          <div className="max-w-[600px] bg-white rounded-md px-2 py-4 md:px-5 md:py-7 relative">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="items-center font-extrabold absolute hidden sm:flex gap-2 text-primaryOrange-50 hover:text-orange-700 top-[18px] right-[8px] md:top-[30px] md:right-[21px] z-10"
            >
              <FiEdit2 size={20} />
              Edit
            </button>
            <h2 className="font-extrabold text-xl mb-4 relative lg:w-[1001px] xl:w-[1260px]">
              <div className="hidden  max-w-[400px] xl:max-w-[520px] absolute px-2 py-2 bg-[#e0e7ec] rounded-md gap-2 lg:flex  font-normal text-sm top-0 left-[668px]">
                <HiOutlineLightBulb className="shrink-0" size={20} />{" "}
                <span>Please add mandatory personal information</span>
              </div>
              Personal information <span className="text-red-600">*</span>
            </h2>
            <p className="mb-6 md:mb-10 font-extrabold">some text</p>
            <h2 className="font-extrabold text-xl mb-4 relative lg:w-[1001px] xl:w-[1260px]">
              Contact information <span className="text-red-600">*</span>
              <div className="hidden  max-w-[400px] xl:max-w-[520px] absolute px-2 py-2 bg-[#e0e7ec] rounded-md gap-2 lg:flex  font-normal text-sm top-0 left-[668px]">
                <HiOutlineLightBulb className="shrink-0" size={20} />{" "}
                <span>Please add mandatory contact information</span>
              </div>
            </h2>
            <p className="mb-6 md:mb-10">some text</p>
            <h2 className="font-extrabold text-xl mb-4 relative lg:w-[1001px] xl:w-[1260px]">
              <div className="hidden  max-w-[400px] xl:max-w-[520px] absolute px-2 py-2 bg-[#e0e7ec] rounded-md gap-2 lg:flex  font-normal text-sm top-0 left-[668px]">
                <HiOutlineLightBulb className="shrink-0" size={20} />{" "}
                <span>
                  What job are you looking for and what salary do you want to
                  receive
                </span>
              </div>
              Desired position <span className="text-red-600">*</span>
            </h2>
            <p className="mb-6 md:mb-10">some text</p>
            <h2 className="font-extrabold text-xl mb-4 relative lg:w-[1001px] xl:w-[1260px]">
              <div className="hidden  max-w-[400px] xl:max-w-[520px] absolute px-2 py-2 bg-[#e0e7ec] rounded-md gap-2 lg:flex  font-normal text-sm top-0 left-[668px]">
                <HiOutlineLightBulb className="shrink-0" size={20} />{" "}
                <span>
                  Where have you worked before, what were your responsibilities,
                  and what achievements do you have
                </span>
              </div>
              Work experience <span className="text-red-600">*</span>
            </h2>
            <p className="mb-6 md:mb-10">some text</p>
            <h2 className="font-extrabold text-xl mb-4 relative lg:w-[1001px] xl:w-[1260px]">
              <div className="hidden  max-w-[400px] xl:max-w-[520px] absolute px-2 py-2 bg-[#e0e7ec] rounded-md gap-2 lg:flex  font-normal text-sm top-0 left-[668px]">
                <HiOutlineLightBulb className="shrink-0" size={20} />{" "}
                <span>
                  Where did you study and what education did you receive
                </span>
              </div>
              Education <span className="text-red-600">*</span>
            </h2>
            <p>some text</p>
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
        className={` fixed py-4   z-30 top-0 right-0 w-[100vw] md:w-[75vw] xl:w-[50vw] h-full bg-white transition ${
          !isSidebarOpen &&
          "translate-x-[103vw] md:translate-x-[78vw] xl:translate-x-[53vw] "
        } ${isSidebarOpen && "translate-x-0 "}`}
      >
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
