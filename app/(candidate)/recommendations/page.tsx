"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Footer from "../../components/Footer/Footer";
import Header from "../components/Header";
import { VscPersonAdd } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";

export default function RecommendationsPage() {
  const router = useRouter();
  const session = useSession() as any;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (session.data?.user.user.desiredPosition) {
      fetchVacancies();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const fetchVacancies = async () => {
    const res = await fetch(
      `http://localhost:3001/vacancies/search?query=${session.data?.user.user.desiredPosition}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    if (res.status === 302) {
      setData(data.vacancies);
    }
  };
  return (
    <div className="flex flex-col h-full">
      <Header />
      <section className="grow bg-[#f2f5f8] pt-6 md:pt-8 pb-16 px-3">
        {data.length === 0 ? (
          <div className="max-w-[750px] flex mx-auto justify-between">
            <div>
              <h1 className="font-extrabold text-xl md:text-2xl mb-7">
                0 recommended announcements
              </h1>
              <h2 className="font-extrabold text-lg md:text-xl mb-4">
                There are no announcements for this query yet
              </h2>
              <p>Try again later or use search</p>
            </div>
            <Image
              priority
              className="md:hidden w-[122px] h-[90px]"
              width={122}
              height={90}
              alt="man looking for a job"
              src={
                "https://images.cf-rabota.com.ua/vac-list/zero-vac-list-mob.svg"
              }
            />
            <Image
              priority
              className="hidden md:block w-[213px] h-[100px]"
              width={213}
              height={100}
              alt="man looking for a job"
              src={"https://images.cf-rabota.com.ua/vac-list/zero-vac-list.svg"}
            />
          </div>
        ) : (
          <div className="max-w-[750px] mx-auto ">
            <h1 className="font-extrabold text-2xl mb-4">
              {data.length} announcements
            </h1>
            <div className="flex flex-col gap-5">
              {data.map(({ _id, name, address, wage, company }) => (
                <div
                  key={_id}
                  id="linkToItem"
                  onClick={(e) => {
                    const target = e.target as
                      | HTMLDivElement
                      | HTMLHeadingElement
                      | HTMLHeadingElement
                      | HTMLSpanElement;
                    if (target.id === "linkToItem") {
                      router.push(`/vacancy/${_id}`);
                    }
                  }}
                  className="rounded-md bg-white p-4 hover:cursor-pointer shadow-md hover:shadow-lg"
                >
                  <h2 id="linkToItem" className="font-extrabold text-xl mb-2">
                    {name}
                  </h2>
                  <span id="linkToItem">{wage} $</span>
                  <div id="linkToItem" className="flex gap-5 mb-2">
                    <span id="linkToItem">{company}</span>
                    <span id="linkToItem">{address}</span>
                  </div>

                  <div className="inline-flex gap-6 items-center text-primaryOrange-50 ">
                    <button
                      onClick={() => console.log("click on btn")}
                      className="flex font-extrabold items-center gap-2 hover:text-orange-700"
                    >
                      <VscPersonAdd size={23} />
                      Apply
                    </button>
                    <button
                      onClick={(e) => console.log("click in start")}
                      className="hover:text-orange-700"
                    >
                      {" "}
                      <AiOutlineStar size={23} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
