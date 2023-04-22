"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { FiThumbsUp } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import { BsFillBagDashFill } from "react-icons/bs";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full">
        <header className="shadow-md">
          <div className="container mx-auto flex items-center px-2 sm:px-0">
            <Link href={"/"} className="flex gap-3 items-center">
              <Image
                width={20}
                height={20}
                alt="logo"
                src={
                  "https://images.cf-rabota.com.ua/2017/12/logos/logo-symbol-red.svg"
                }
              />
              <Image
                className="hidden md:block w-[88px] h-[10px]"
                width={88}
                height={10}
                alt="logo"
                src={
                  "https://images.cf-rabota.com.ua/2016/11/logo-text-none-padding.svg"
                }
              />
              <Image
                className="hidden md:block w-[16px] h-[10px]"
                width={16}
                height={10}
                alt="flag"
                src={
                  "https://images.cf-rabota.com.ua/2022/header-logo-flag/logo-flag-ukraine.svg"
                }
              />
            </Link>
            <Link
              className="hidden md:flex items-center gap-1 text-sm text-primaryOrange-50 hover:bg-primaryOrange-50/25 transition px-1 py-4 ml-12"
              href={"employer/vacancies"}
            >
              <HiDocumentText size={25} /> Announcements{" "}
            </Link>
            <Link
              className="hidden md:block px-3 py-1 border-primaryOrange-50 rounded-md text-primaryOrange-50 border-2 hover:text-orange-700 hover:border-orange-700 font-extrabold ml-8 lg:ml-[60px] xl:ml-[187px] 2xl:ml-[307px]"
              href={"employer/vacancies/create"}
            >
              Publish announcement
            </Link>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex gap-2 items-center py-2 hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 transition ml-auto px-1 "
            >
              <BsFillBagDashFill size={22} />
              <div className="text-left">
                <p className="text-[10px]">Your company</p>
                <span className="text-sm">some company</span>
              </div>
            </button>
          </div>
        </header>

        {children}
      </div>
      <div
        className={`fixed   flex flex-col z-30 top-0 right-0 w-[320px] h-full bg-white transition ${
          !isSidebarOpen && "translate-x-[345px] "
        } ${isSidebarOpen && "translate-x-0 "}`}
      >
        <div className="mb-7 h-[100px] w-full bg-[#303a3f] bg-[url('https://images.cf-rabota.com.ua/2020/09/header-empty-image-pattern.svg')]"></div>
        <button
          className=" text-black/50 hover:text-black bg-white w-12 h-12 rounded-full absolute top-3 left-[266px] sm:left-0 sm:-translate-x-1/2"
          onClick={() => setIsSidebarOpen(false)}
        >
          <AiOutlineClose className="mx-auto" size={25} />
        </button>

        <span className="flex justify-between px-6  pb-4 font-extrabold  border-b border-black/50">
          Name{" "}
          <Link
            onClick={() => setIsSidebarOpen(false)}
            href={"employer/edit-profile"}
          >
            <FiEdit2 size={20} />
          </Link>
        </span>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          className="mt-3 py-2 pl-6 flex gap-3 items-center hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 "
          href={"edit-cv"}
        >
          <HiDocumentText size={20} /> CVs and applications
        </Link>

        <Link
          onClick={() => setIsSidebarOpen(false)}
          className=" py-2 pl-6 flex gap-3 items-center hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 "
          href={"/"}
        >
          <RxExit size={20} /> Log out
        </Link>
      </div>
      <div
        className={`z-20 h-screen ${
          isSidebarOpen ? "block" : "hidden"
        } fixed inset-0 bg-black/40`}
      ></div>
    </>
  );
}
