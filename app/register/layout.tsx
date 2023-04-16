"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxCross1 } from "react-icons/rx";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 w-screen min-h-full pt-3 md:pt-16 ">
      <div className="mb-4 md:mb-8 flex px-3 justify-between md:px-10 ">
        <svg
          className="md:hidden	"
          width={30}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 15C0 6.7275 6.7275 0 15 0C23.2725 0 30 6.7275 30 15C30 23.2725 23.2725 30 15 30C6.7275 30 0 23.2725 0 15ZM3 15C3 21.6154 8.38459 27 15 27C21.6154 27 27 21.6154 27 15C27 8.38457 21.6154 2.99998 15 2.99998C8.38459 2.99998 3 8.38457 3 15ZM14.9445 10.9699C16.113 9.71474 17.535 8.99999 19.4557 8.99999H20.3002V13.5555C15.7222 13.5555 14.9445 13.6219 14.9445 15.3112V21H10.5V8.99999H14.9445V10.9699Z"
            fill="#ff5252"
          ></path>
        </svg>
        <Image
          className="hidden md:block   "
          src={"https://images.cf-rabota.com.ua/auth/logo-full.svg"}
          alt="logo"
          width={175}
          height={30}
        />
        <div className="flex md:pr-[147px] text-sm">
          <Link
            className={`${
              usePathname() === "/register/candidate"
                ? "bg-white text-black"
                : "text-primaryOrange-50"
            } rounded-md p-2`}
            href={"register/candidate"}
          >
            Candidates
          </Link>
          <Link
            className={` ${
              usePathname() === "/register/employer"
                ? "bg-white text-black"
                : "text-primaryOrange-50"
            } rounded-md p-2`}
            href={"register/employer"}
          >
            Employers
          </Link>
        </div>
        <Link href={"/"}>
          <RxCross1 size={30} color="#ff5252" />
        </Link>
      </div>

      {children}
    </div>
  );
}
