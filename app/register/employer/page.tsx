"use client";

import Link from "next/link";
import { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FiKey } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { CgAsterisk } from "react-icons/cg";
import { MdOutlinePersonAdd } from "react-icons/md";

export default function RegisterEmployerPage() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setIsPasswordShown((prev) => !prev);
  };

  return (
    <>
      <div className="rounded-md px-3 pb-3 pt-5 md:px-9 md:pb-9 md:pt-10 bg-white max-w-[600px] mx-auto">
        <h1 className="text-center font-extrabold text-2xl mb-3">
          Create an employer account
        </h1>
        <form className="flex flex-col gap-3 md:gap-5">
          <div className="relative">
            {!email && (
              <CgAsterisk
                color="red"
                className="absolute top-1 md:top-3 left-[89px]"
              />
            )}
            <AiOutlineMail
              size={20}
              className="opacity-50 absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              placeholder="Email"
              className="py-1 md:py-3 px-12 outline-none focus:border-black  border rounded-md w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            {!password && (
              <CgAsterisk
                color="red"
                className="absolute top-1 md:top-3 left-[123px]"
              />
            )}
            <FiKey
              size={20}
              className="opacity-50 absolute left-4 top-1/2 -translate-y-1/2"
            />
            <input
              placeholder="Password"
              className="py-1 md:py-3 px-12 outline-none focus:border-black  border rounded-md w-full"
              type={!isPasswordShown ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isPasswordShown ? (
              <AiOutlineEye
                onClick={togglePassword}
                size={25}
                className="opacity-50 absolute right-4 top-1/2 -translate-y-1/2"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={togglePassword}
                size={25}
                className="opacity-50 absolute right-4 top-1/2 -translate-y-1/2"
              />
            )}
          </div>

          <button className="py-1 md:py-3 px-10 bg-primaryOrange-50 rounded-md text-white font-bold">
            Register
          </button>
        </form>
      </div>

      <p className="text-xs text-center mt-3">
        By clicking &quot;Register&quot; you accept terms and conditions of
        using a website{" "}
      </p>

      <Link
        href={"/"}
        className="text-primaryOrange-50 text-md font-bold flex gap-2 items-center w-fit mx-auto  mt-4"
      >
        <MdOutlinePersonAdd size={23} /> Create a candidate account
      </Link>
    </>
  );
}
