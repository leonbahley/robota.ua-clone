"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";

import { RxCross1 } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { FiKey } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePassword = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) {
      const session = (await getSession()) as any;
      console.log("session", session);
      if (session.user.user.company) {
        router.push("/employer/vacancies");
      } else {
        router.push("/recommendations");
      }
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="bg-gray-200 w-screen min-h-full pt-3 md:pt-16 ">
      <div>
        <div className="mb-4 md:mb-8 relative">
          <button
            onClick={() => router.back()}
            className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2"
          >
            <RxCross1 size={30} color="#ff5252" />
          </button>

          <Link href={"/"}>
            <Image
              className="mx-auto  "
              src={"https://images.cf-rabota.com.ua/auth/logo-full.svg"}
              alt="logo"
              width={175}
              height={30}
            />
          </Link>
        </div>

        <div className="rounded-md px-3 pb-3 pt-5 md:px-9 md:pb-9 md:pt-10 bg-white max-w-[600px] mx-auto">
          <h1 className="text-center font-extrabold text-2xl mb-3">
            Log in on the website
          </h1>
          <form onSubmit={sendData} className="flex flex-col gap-3 md:gap-5">
            <div className="relative">
              <AiOutlineMail
                size={20}
                className="opacity-50 absolute left-4 top-1/2 -translate-y-1/2"
              />
              <input
                required
                placeholder="Email"
                className="py-1 md:py-3 px-12 outline-none focus:border-black  border rounded-md w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <FiKey
                size={20}
                className="opacity-50 absolute left-4 top-1/2 -translate-y-1/2"
              />
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="py-1 md:py-3 px-12 outline-none focus:border-black  border rounded-md w-full"
                type={isPasswordShown ? "password" : "text"}
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
              Log in
            </button>
            <div>
              <div className="flex items-center opacity-75 mb-2">
                <hr className="h-[1px] w-full bg-black border-0" />
                <span className="whitespace-nowrap mx-2">or with help of</span>

                <hr className="h-[1px] w-full bg-black border-0" />
              </div>
              <div className="flex gap-4 text-white font-extrabold">
                <button
                  onClick={() => alert("Currently being developed")}
                  className="bg-blue-700 rounded-md flex py-3  px-2 w-full gap-2 justify-center"
                  type="button"
                >
                  <svg
                    width={20}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21 20"
                  >
                    <path
                      d="M19.3958 0H1.60417C0.994167 0 0.5 0.494167 0.5 1.10417V18.8967C0.5 19.5058 0.994167 20 1.60417 20H11.1833V12.255H8.57667V9.23667H11.1833V7.01083C11.1833 4.4275 12.7608 3.02083 15.0658 3.02083C16.17 3.02083 17.1183 3.10333 17.395 3.14V5.84L15.7967 5.84083C14.5433 5.84083 14.3008 6.43667 14.3008 7.31V9.2375H17.29L16.9008 12.2558H14.3008V20H19.3975C20.0058 20 20.5 19.5058 20.5 18.8958V1.10417C20.5 0.494167 20.0058 0 19.3958 0V0Z"
                      fill="#fff"
                    ></path>
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => alert("Currently being developed")}
                  className="bg-blue-600 rounded-md flex py-3 px-2 w-full gap-2 justify-center "
                  type="button"
                >
                  <svg
                    width={20}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <rect width={20} height={20} rx="2" fill="#fff"></rect>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.7 10.6706C17.7 10.1387 17.6523 9.62738 17.5636 9.13647H10.5V12.0376H14.5364C14.3625 12.9751 13.8341 13.7694 13.0398 14.3012V16.1831H15.4636C16.8818 14.8774 17.7 12.9547 17.7 10.6706Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5 18C12.525 18 14.2227 17.3285 15.4636 16.183L13.0398 14.3012C12.3682 14.7512 11.5091 15.0171 10.5 15.0171C8.54659 15.0171 6.89318 13.6978 6.30341 11.925H3.79773V13.8682C5.03182 16.3194 7.56818 18 10.5 18Z"
                      fill="#34A853"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.30341 11.925C6.15341 11.475 6.06818 10.9943 6.06818 10.5C6.06818 10.0057 6.15341 9.52502 6.30341 9.07502V7.13184H3.79773C3.28977 8.14434 3 9.28979 3 10.5C3 11.7102 3.28977 12.8557 3.79773 13.8682L6.30341 11.925Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5 5.98295C11.6011 5.98295 12.5898 6.36136 13.367 7.10455L15.5182 4.95341C14.2193 3.74318 12.5216 3 10.5 3C7.56818 3 5.03182 4.68068 3.79773 7.13182L6.30341 9.075C6.89318 7.30227 8.54659 5.98295 10.5 5.98295Z"
                      fill="#EA4335"
                    ></path>
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </form>
        </div>
        <Link
          href={"register/candidate"}
          className="text-primaryOrange-50 text-md font-bold block text-center  mt-4"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
