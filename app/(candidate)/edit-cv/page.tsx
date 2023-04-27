"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Header from "../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "@/app/components/Footer/Footer";

export default function EditCVPage() {
  const session = useSession() as any;

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [desiredPosition, setDesiredPosition] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const saveData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`${process.env.API_URL}/update/cv`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session.data?.user.token}`,
      },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        age,
        location,
        education,
        workExperience,
        desiredPosition,
      }),
    });
    if (res.ok) {
      session.update({
        info: {
          ...session.data.user.user,
          name,
          email,
          phoneNumber,
          age,
          location,
          education,
          workExperience,
          desiredPosition,
        },
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
      session.data?.user.user.age && setAge(session.data?.user.user.age);
      session.data?.user.user.location &&
        setLocation(session.data?.user.user.location);
      session.data?.user.user.education &&
        setEducation(session.data?.user.user.education);
      session.data?.user.user.workExperience &&
        setWorkExperience(session.data?.user.user.workExperience);
      session.data?.user.user.desiredPosition &&
        setDesiredPosition(session.data?.user.user.desiredPosition);
    }
  }, [session]);
  return (
    <>
      <Header />
      <section className="bg-[#f3f5f8] pb-12 pt-2 md:pt-6">
        <div className="container mx-auto">
          <Link
            className="hidden sm:flex gap-1 items-center font-extrabold text-primaryOrange-50 hover:text-orange-700 mb-4"
            href={"recommendations"}
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
            <p className="mb-1 font-extrabold">
              {session.data?.user.user.name}
            </p>
            <p className="mb-1 font-extrabold">
              <span className="font-normal">Age:</span>{" "}
              {session.data?.user.user.age}
            </p>
            <p className="mb-6 md:mb-10 font-extrabold">
              <span className="font-normal">Location:</span>{" "}
              {session.data?.user.user.location}
            </p>
            <h2 className="font-extrabold text-xl mb-4 relative lg:w-[1001px] xl:w-[1260px]">
              Contact information <span className="text-red-600">*</span>
              <div className="hidden  max-w-[400px] xl:max-w-[520px] absolute px-2 py-2 bg-[#e0e7ec] rounded-md gap-2 lg:flex  font-normal text-sm top-0 left-[668px]">
                <HiOutlineLightBulb className="shrink-0" size={20} />{" "}
                <span>Please add mandatory contact information</span>
              </div>
            </h2>
            <p className="mb-1"> {session.data?.user.user.email}</p>
            <p className="mb-6 md:mb-10">
              Phone number: {session.data?.user.user.phoneNumber}
            </p>
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
            <p className="mb-6 md:mb-10">
              {session.data?.user.user.desiredPosition}
            </p>
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
            <p className="mb-6 md:mb-10">
              {session.data?.user.user.workExperience}
            </p>

            <h2 className="font-extrabold text-xl mb-4 relative lg:w-[1001px] xl:w-[1260px]">
              <div className="hidden  max-w-[400px] xl:max-w-[520px] absolute px-2 py-2 bg-[#e0e7ec] rounded-md gap-2 lg:flex  font-normal text-sm top-0 left-[668px]">
                <HiOutlineLightBulb className="shrink-0" size={20} />{" "}
                <span>
                  Where did you study and what education did you receive
                </span>
              </div>
              Education <span className="text-red-600">*</span>
            </h2>
            <p>{session.data?.user.user.education}</p>
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
              Personal information <span className="text-red-600">*</span>
            </h3>
            <div className="flex flex-col gap-2 md:gap-5">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="First and last name"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                placeholder="Age"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                placeholder="Location"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl mb-3 md:mb-6 ">
              Contact information <span className="text-red-600">*</span>
            </h3>
            <div className="flex flex-col gap-2 md:gap-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="E-mail"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="Phone number"
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl mb-3 md:mb-6">
              Desired position <span className="text-red-600">*</span>
            </h3>
            <div>
              <input
                value={desiredPosition}
                onChange={(e) => setDesiredPosition(e.target.value)}
                required
                className="outline-none border border-black rounded-md px-2 py-1 md:px-4 md:py-2 w-full"
                type="text"
              />
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl mb-3 md:mb-6">
              Work experience <span className="text-red-600">*</span>
            </h3>
            <textarea
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              required
              className="outline-none border border-black rounded-md resize-none overflow-auto
              w-full px-2 py-1 md:px-4 md:py-2 min-h-[100px] md:min-h-[120px]"
            />
          </div>
          <div>
            <h3 className="font-extrabold text-xl mb-3 md:mb-6">
              Education <span className="text-red-600">*</span>
            </h3>
            <textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              required
              className="outline-none border border-black rounded-md resize-none overflow-auto
              w-full px-2 py-1 md:px-4 md:py-2 min-h-[100px] md:min-h-[120px]"
            />
          </div>
          <div className=" flex flex-col md:flex-row gap-4 sticky bottom-0 bg-white ">
            <button className="bg-primaryOrange-50 hover:bg-orange-700 text-white font-extrabold border border-transparent w-full py-2  md:py-3 rounded-md">
              Save
            </button>
            <button
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
