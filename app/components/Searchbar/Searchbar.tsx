"use client";

import Link from "next/link";
import { GoSearch } from "react-icons/go";

export default function Searchbar() {
  return (
    <div className="flex gap-5 p-4 md:p-0 flex-col sm:flex-row z-10 justify-center mt-20">
      <div className="relative grow max-w-[971px]">
        <GoSearch
          size={25}
          color="rgb(0, 0, 0,0.25)"
          className="absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          className="px-12 h-[60px] rounded-md w-full text-black outline-none"
          type="text"
          placeholder="What job would you like?"
        />
      </div>
      <Link
        href={"search"}
        className="justify-center border-2 rounded-md border-white flex gap-2 h-[60px] items-center px-9 xl:hover:bg-white xl:hover:text-primaryOrange-50 active:bg-white active:text-primaryOrange-50"
      >
        <GoSearch size={20} />
        <span className="font-bold sm:hidden md:inline">Find job</span>
      </Link>
    </div>
  );
}
