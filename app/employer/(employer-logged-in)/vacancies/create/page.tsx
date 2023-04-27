"use client";

import Footer from "@/app/components/Footer/Footer";
import { CgAsterisk } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";

import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CreateVacancyPage() {
  const router = useRouter();
  const session = useSession() as any;
  const [isWageRange, setIsWageRange] = useState(true);
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();
    let wage;
    if (to) {
      wage = `${from}-${to}`;
    } else {
      wage = from;
    }
    const vacancy = {
      company: session.data.user.user.name,
      name: job,
      address: `${city} ${street}`,
      wage,
      description,
    };
    if (
      !vacancy.name ||
      !vacancy.address ||
      !vacancy.wage ||
      !vacancy.description
    ) {
      alert("Do not leave blank fields");
      return;
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vacancies/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session.data?.user.token}`,
        },
        body: JSON.stringify(vacancy),
      }
    );
    if (res.ok) {
      router.push("employer/vacancies");
    }
  };
  return (
    <>
      <div className="container mx-auto py-5">
        <Link
          href={"employer/vacancies"}
          className="flex text-primaryOrange-50 items-center gap-3 font-extrabold mb-2"
        >
          <BiArrowBack size={25} />
          <span>To announcement list</span>
        </Link>
        <h1 className="font-extrabold text-3xl">Announcement adding</h1>
      </div>
      <div className="bg-[#f3f5f8] py-5">
        <form className="container mx-auto flex flex-col items-center gap-2 md:gap-5">
          <div className="max-w-[732px] w-full rounded-md p-4  bg-white">
            <h2 className="text-xl font-extrabold mb-2 flex">
              Announcement name
              <CgAsterisk color="red" />
            </h2>
            <input
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="outline-none w-full border rounded-md p-2 border-black"
              type="text"
              placeholder="Who are you looking for?"
            />
          </div>
          <div className="max-w-[732px] w-full rounded-md p-4  bg-white">
            <h2 className="text-xl font-extrabold mb-2 flex">
              Address
              <CgAsterisk color="red" />
            </h2>
            <div className="flex flex-col md:flex-row gap-4 ">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="outline-none  border rounded-md p-2 border-black min-w-[260px]"
                type="text"
                placeholder="City"
              />
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="outline-none  border rounded-md p-2 border-black grow"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="max-w-[732px] w-full rounded-md p-4  bg-white">
            <div className="mb-2 flex justify-between items-center">
              <h2 className="text-xl font-extrabold  flex">
                Wage
                <CgAsterisk color="red" />
              </h2>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsWageRange(false);
                    setFrom("");
                    setTo("");
                  }}
                  className={`py-1 px-2 rounded-md text-sm ${
                    !isWageRange
                      ? "bg-[#f3f5f8]"
                      : "text-primaryOrange-50 font-extrabold"
                  }`}
                >
                  One value
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsWageRange(true);
                    setFrom("");
                    setTo("");
                  }}
                  className={`py-1 px-2 rounded-md text-sm ${
                    isWageRange
                      ? "bg-[#f3f5f8]"
                      : "text-primaryOrange-50 font-extrabold"
                  }`}
                >
                  Range
                </button>
              </div>
            </div>

            {isWageRange ? (
              <div className="flex gap-4">
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="outline-none w-full border rounded-md p-2 border-black"
                  type="text"
                  placeholder="From"
                />
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="outline-none w-full border rounded-md p-2 border-black"
                  type="text"
                  placeholder="To"
                />
              </div>
            ) : (
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="outline-none w-full border rounded-md p-2 border-black"
                type="text"
                placeholder="Tolal"
              />
            )}
          </div>
          <div className="max-w-[732px] w-full rounded-md p-4  bg-white">
            <h2 className="text-xl font-extrabold mb-2 flex">
              Announcement description
              <CgAsterisk color="red" />
            </h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="outline-none border rounded-md p-2 border-black w-full min-h-[150px] md:min-h-[300px] resize-none"
              name=""
            ></textarea>
          </div>
        </form>
      </div>
      <div className="shadow-md py-5 sticky border border-t-1  bottom-0 bg-white">
        <button
          onClick={sendData}
          className="block max-w-[732px] w-full mx-auto p-5 text-white bg-primaryOrange-50 font-extrabold active:bg-orange-700 xl:hover:bg-orange-700 rounded-md "
        >
          Publish
        </button>
      </div>
      <Footer />
    </>
  );
}
