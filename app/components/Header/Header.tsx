"use client";

import { FaKey } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const buttonConditionEmployee =
    usePathname() === "/"
      ? "bg-slate-900/25"
      : "hover:bg-white hover:text-primaryOrange-50";
  const buttonConditioEmployer =
    usePathname() === "/employer"
      ? "bg-slate-900/25"
      : "hover:bg-white hover:text-primaryOrange-50";
  return (
    <header className="bg-primaryOrange-50 text-white  w-full fixed top-0 left-0">
      <div className="px-2 lg:px-28 py-4 flex items-center justify-between ">
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
          <div className="hidden lg:flex lg:items-center gap-2">
            <Image
              width={175}
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
          </div>
        </Link>
        <div className={`${usePathname() === "/" && "lg:pr-32"} text-xs`}>
          <Link
            href={"/"}
            className={`transition-all border border-slate-900/25 rounded-tl-md border-r-0 rounded-bl-md px-4 py-2 ${buttonConditionEmployee}`}
          >
            Candidate
          </Link>
          <Link
            href={"/employer"}
            className={`transition-all border border-slate-900/25 rounded-tr-md border-l-0 rounded-br-md px-4 py-2  ${buttonConditioEmployer}`}
          >
            Employer
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href={"login"} className={"flex items-center gap-2"}>
            <FaKey color="#fff" />
            <span className="hidden md:inline font-bold ">Log in</span>
          </Link>

          {usePathname() === "/employer" && (
            <Link
              href={"register/employer"}
              className="hidden md:flex items-center gap-2"
            >
              <HiUserAdd size={22} color="#fff" />
              <span className=" font-bold ">Register</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
