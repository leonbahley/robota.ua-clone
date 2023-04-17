"use client";

import { HiDocumentText } from "react-icons/hi";
import { BsFillBagDashFill } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="shadow-md">
        <div className="container mx-auto flex items-center px-2 sm:px-0">
          <div className="flex gap-3">
            <Image
              width={20}
              height={20}
              alt="logo"
              src={
                "https://images.cf-rabota.com.ua/2017/12/logos/logo-symbol-red.svg"
              }
            />
            <Image
              className="hidden md:block"
              width={88}
              height={10}
              alt="logo"
              src={
                "https://images.cf-rabota.com.ua/2016/11/logo-text-none-padding.svg"
              }
            />
            <Image
              className="hidden md:block"
              width={16}
              height={10}
              alt="flag"
              src={
                "https://images.cf-rabota.com.ua/2022/header-logo-flag/logo-flag-ukraine.svg"
              }
            />
          </div>
          <Link
            className="hidden md:flex items-center gap-1 text-sm text-primaryOrange-50 hover:bg-primaryOrange-50/25 transition px-1 py-4 ml-12"
            href={"/"}
          >
            <HiDocumentText size={25} /> Announcements{" "}
          </Link>
          <Link
            className="hidden md:block px-3 py-1 border-primaryOrange-50 rounded-md text-primaryOrange-50 border-2 hover:text-orange-700 hover:border-orange-700 font-extrabold ml-8 lg:ml-[60px] xl:ml-[187px] 2xl:ml-[307px]"
            href={"employer/vacancies/create"}
          >
            Publish announcement
          </Link>
          <button className="flex gap-2 items-center py-2 hover:bg-primaryOrange-50/25 hover:text-primaryOrange-50 transition ml-auto px-1 ">
            <BsFillBagDashFill size={22} />
            <div className="text-left">
              <p className="text-[10px]">Your company</p>
              <span className="text-sm">some company</span>
            </div>
          </button>
        </div>
      </header>

      {children}
    </>
  );
}
