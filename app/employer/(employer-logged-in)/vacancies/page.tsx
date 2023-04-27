"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { RxCross1 } from "react-icons/rx";
import Footer from "@/app/components/Footer/Footer";

const VacancyListPage = () => {
  const session = useSession() as any;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session.status === "authenticated") {
      fetchVacancies().finally(() => setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.status]);

  const fetchVacancies = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vacancies/company-vacancies`,
      {
        headers: {
          Authorization: `bearer ${session.data?.user.token}`,
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    setData(data.vacancies);
  };

  return (
    <>
      <section className="grow bg-[#f3f5f8] pb-5 pt-9">
        {!loading && data.length === 0 ? (
          <div className="container flex mx-auto flex-col-reverse md:flex-row items-center">
            <div className="grow flex flex-col gap-5">
              <h1 className="font-extrabold text-3xl">
                Add an announcement and receive candidates&apos; feedback
              </h1>
              <p className="text-lg">
                Candidates from a largest data base are ready to send their CVs
              </p>
              <Link
                className="hover:bg-orange-700 bg-primaryOrange-50 text-white font-extrabold p-5 rounded-md md:max-w-[377px] text-center "
                href={"employer/vacancies/create"}
              >
                Add announcement
              </Link>
            </div>
            <Image
              priority
              className="w-[188px] h-[107px] md:w-[282px] md:h-[160px] mx-auto md:mx-0"
              src={
                "https://images.cf-rabota.com.ua/alliance/feature-vacancies/zero-vacancies-state-img.svg"
              }
              width={282}
              height={160}
              alt="hiring"
            />
          </div>
        ) : (
          <div className="max-w-[750px] mx-auto ">
            <div className="flex flex-col gap-5">
              {data.map(({ _id, name, address, wage, description }) => (
                <div
                  key={_id}
                  className="rounded-md bg-white p-4  shadow-md hover:shadow-lg relative"
                >
                  <button className="absolute top-1 right-1 ">
                    <RxCross1 size={20} color="red" />
                  </button>

                  <h2 className="font-extrabold text-xl mb-2">{name}</h2>
                  <span>{wage} $</span>
                  <div className="flex gap-5 mb-2">
                    <span>{session.data?.user.user.name}</span>
                    <span>{address}</span>
                  </div>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};
export default VacancyListPage;
