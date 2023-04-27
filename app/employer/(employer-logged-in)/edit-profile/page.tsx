"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { FiEdit2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsPersonLock } from "react-icons/bs";
import Footer from "@/app/components/Footer/Footer";

export default function EditProfilePage() {
  const session = useSession() as any;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const saveData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/update/company-profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session.data?.user.token}`,
        },
        body: JSON.stringify({ name, email, phoneNumber, password }),
      }
    );
    if (res.ok) {
      session.update({
        info: { ...session.data.user.user, name, email, phoneNumber },
      });
    }

    setIsSidebarOpen(false);
  };
  useEffect(() => {
    if (session.status === "authenticated") {
      setEmail(session.data?.user.user.email);
      setName(session.data?.user.user.name);
      session.data?.user.user.phoneNumber &&
        setPhoneNumber(session.data?.user.user.phoneNumber);
    }
  }, [session]);

  return (
    <>
      <section className="grow bg-[#f3f5f8] pb-12 pt-2 md:pt-6">
        <div className="container mx-auto">
          <h1 className="font-extrabold text-xl md:text-3xl mb-3">
            Profile settings
          </h1>
          <div className="max-w-[600px] bg-white rounded-md px-2 py-4 md:px-5 md:py-7 relative">
            <p className="opacity-50 gap-2 items-center text-sm hidden lg:flex absolute bottom-[66px] -right-[390px]">
              <BsPersonLock size={18} /> Contact information will be used by
              robota.ua team
            </p>
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
              Email:{" "}
              <span className="font-normal">
                {session.data?.user.user.email}
              </span>
            </p>
            <p className="mb-6 md:mb-10 font-extrabold">
              Password:{" "}
              <span className="font-normal">
                You can change your password in the edit panel
              </span>
            </p>
            <h2 className="font-extrabold text-xl mb-4  ">
              Company information <span className="text-red-600">*</span>
            </h2>
            <p className="mb-3 md:mb-4 font-extrabold">
              Name:{" "}
              <span className="font-normal">
                {session.data?.user.user.name}
              </span>
            </p>
            <p className=" font-extrabold">
              Phone number:{" "}
              <span className="font-normal">
                {session.data?.user.user.phoneNumber}
              </span>
            </p>
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="email"
              />
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl mb-3 md:mb-6 ">
              Company information <span className="text-red-600">*</span>
            </h3>

            <div className="flex flex-col gap-2 md:gap-5">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
              <input
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
            </div>
          </div>

          <div className=" flex flex-col md:flex-row gap-4 sticky bottom-0 bg-white ">
            <button className="bg-primaryOrange-50 hover:bg-orange-700 text-white font-extrabold border border-transparent w-full py-2  md:py-3 rounded-md">
              Save changes
            </button>
            <button
              onClick={() => setIsSidebarOpen(false)}
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
