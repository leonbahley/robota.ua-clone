"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { FiThumbsUp } from "react-icons/fi";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-primaryOrange-50 text-white pb-6 px-1">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Link href={"/"}>
              <svg
                className="lg:hidden	"
                width={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 15C0 6.7275 6.7275 0 15 0C23.2725 0 30 6.7275 30 15C30 23.2725 23.2725 30 15 30C6.7275 30 0 23.2725 0 15ZM3 15C3 21.6154 8.38459 27 15 27C21.6154 27 27 21.6154 27 15C27 8.38457 21.6154 2.99998 15 2.99998C8.38459 2.99998 3 8.38457 3 15ZM14.9445 10.9699C16.113 9.71474 17.535 8.99999 19.4557 8.99999H20.3002V13.5555C15.7222 13.5555 14.9445 13.6219 14.9445 15.3112V21H10.5V8.99999H14.9445V10.9699Z"
                  fill="#fff"
                ></path>
              </svg>
            </Link>
            <Link href={"/"} className="hidden lg:flex lg:items-center gap-2">
              <Image
                className="w-[117px] h-[30px]"
                width={117}
                height={30}
                src={"https://images.cf-rabota.com.ua/2019/08/logo-white.svg"}
                alt="robota.ua"
              />
              <Image
                className="w-[16px] h-[10px]"
                width={16}
                height={10}
                src={
                  "https://images.cf-rabota.com.ua/2022/header-logo-flag/logo-flag-ukraine.svg"
                }
                alt="flag"
              />
            </Link>

            <Link
              className="hidden md:flex items-center gap-2 text-sm  hover:bg-orange-700/25 transition px-4 py-5 font-extrabold ml-12"
              href={"recommendations"}
            >
              <FiThumbsUp size={25} />
              Recommended
            </Link>
            <Link
              className="hidden md:flex items-center gap-2 text-sm  hover:bg-orange-700/25 transition px-4 py-5 font-extrabold "
              href={"edit-cv"}
            >
              <HiDocumentText size={25} />
              My CV{" "}
            </Link>
            <Link
              className="hidden md:flex items-center gap-2 text-sm  hover:bg-orange-700/25 transition px-4 py-5 font-extrabold "
              href={"favorites"}
            >
              <AiFillStar size={25} />
              Favorites
            </Link>

            <button
              className="flex items-center gap-2 text-sm  hover:bg-orange-700/25 transition px-4 py-5 font-extrabold ml-auto"
              onClick={() => setIsSidebarOpen(true)}
            >
              <BsFillPersonFill size={25} />
              Name
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 relative">
            <BsSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-black hidden sm:block" />
            <input
              className="rounded-md py-2 text-black outline-none w-full pl-1 sm:pl-12 border border-transparent focus:border-black "
              type="text"
              placeholder="Search by job title, company"
            />
            <Link
              href={"search"}
              className="flex items-center justify-center border-white border-2 rounded-md py-2 px-3 hover:bg-white hover:text-primaryOrange-50 "
            >
              <BsSearch />
            </Link>
          </div>
        </div>
      </header>
      <div
        className={`fixed py-4  flex flex-col z-30 top-0 right-0 w-[320px] h-full bg-white transition ${
          !isSidebarOpen && "translate-x-[345px] "
        } ${isSidebarOpen && "translate-x-0 "}`}
      >
        <button
          className=" text-black/50 hover:text-black bg-white w-12 h-12 rounded-full absolute top-3 left-[266px] sm:left-0 sm:-translate-x-1/2"
          onClick={() => setIsSidebarOpen(false)}
        >
          <AiOutlineClose className="mx-auto" size={25} />
        </button>
        <span className="font-extrabold pl-6">Name</span>
        <span className="pl-6 text-black/50 pb-4  border-b border-black/50">
          email
        </span>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          className="mt-3 py-2 pl-6 flex gap-3 items-center hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 "
          href={"edit-cv"}
        >
          <HiDocumentText size={20} /> My CV
        </Link>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          className=" py-2 pl-6 flex gap-3 items-center hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 "
          href={"favorites"}
        >
          <AiFillStar size={20} /> Favorites
        </Link>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          className=" py-2 pl-6 flex gap-3 items-center hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 "
          href={"edit-profile"}
        >
          <FiEdit2 size={20} /> Profile settings
        </Link>
        <Link
          onClick={() => setIsSidebarOpen(false)}
          className=" py-2 pl-6 flex gap-3 items-center hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 "
          href={"recommendations"}
        >
          <FiThumbsUp size={20} /> Recommended
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
