"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Header from "../../components/Header";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Footer from "@/app/components/Footer/Footer";

interface IVacancy {
  name: string;
  description: string;
  wage: string;
  address: string;
  company: string;
}

export default function VacancyItemPage({
  params,
}: {
  params: { id: string };
}) {
  const session = useSession() as any;
  console.log(
    "session.data.user.user.favorites",
    session.data?.user.user.favorites
  );
  console.log("session", session);
  const [data, setData] = useState<IVacancy>();
  const router = useRouter();

  useEffect(() => {
    fetchVacancy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVacancy = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vacancies/search/${params.id}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    if (res.status === 302) {
      setData(data.vacancies);
    }
  };

  const handleFavorite = async () => {
    let path;
    if (session.data?.user.user.favorites.includes(params.id)) {
      path = "delete-from-favorites";
    } else {
      path = "add-to-favorites";
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vacancies/${path}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session.data?.user.token}`,
        },
        body: JSON.stringify({ id: params.id }),
      }
    );
    if (res.ok) {
      if (session.data?.user.user.favorites.includes(params.id)) {
        const arr = [...session.data?.user.user.favorites];
        const index = arr.indexOf(params.id);
        arr.splice(index, 1);
        session.update({
          info: { ...session.data.user.user, favorites: arr },
        });
      } else {
        session.update({
          info: {
            ...session.data.user.user,
            favorites: [...session.data?.user.user.favorites, params.id],
          },
        });
      }
    }
  };

  const apply = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vacancies/add-to-applications`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session.data?.user.token}`,
        },
        body: JSON.stringify({ id: params.id }),
      }
    );
    if (res.ok) {
      session.update({
        info: {
          ...session.data.user.user,
          applications: [...session.data?.user.user.applications, params.id],
        },
      });
    }
  };

  return (
    <>
      <Header />
      <section className="bg-[#f3f5f8] min-h-full p-2 md:pb-8 md:pt-16">
        <div className="max-w-[850px] rounded-md bg-white mx-auto  py-4">
          <div className="flex pb-3 px-5  justify-between border-b border-[#f3f5f8]">
            <button
              onClick={() => router.back()}
              className="items-center text-lg flex gap-2 text-primaryOrange-50 hover:text-orange-700 font-extrabold"
            >
              <BiArrowBack />
              Go back
            </button>
            <div className="flex gap-9">
              {!session.data?.user.user.applications?.includes(params.id) ? (
                <button
                  onClick={apply}
                  className="hidden md:block text-white font-extrabold bg-primaryOrange-50 hover:bg-orange-700 text-lg py-3 px-16 rounded-md"
                >
                  Apply
                </button>
              ) : (
                <p className="font-extrabold text-primaryOrange-50 text-lg hidden md:block">
                  Applied
                </p>
              )}
              <button
                onClick={handleFavorite}
                className="text-primaryOrange-50 hover:text-orange-700"
              >
                {!session.data?.user.user.favorites?.includes(params.id) ? (
                  <AiOutlineStar size={28} />
                ) : (
                  <AiFillStar size={28} />
                )}
              </button>
            </div>
          </div>

          <div className="px-2 md:px-5 md:pt-3 flex flex-col gap-2 md:gap-5">
            <h2 className="font-extrabold text-3xl">{data?.name}</h2>
            <p>{data?.wage}</p>
            <div className="flex gap-4 items-center">
              <span>{data?.company}</span>
              <div className="w-2 h-2 rotate-45 bg-black"></div>
              <span>{data?.address}</span>
            </div>
            <p>{data?.description}</p>
            <div className=" md:mt-4 flex justify-between items-center">
              {!session.data?.user.user.applications?.includes(params.id) ? (
                <button
                  onClick={apply}
                  className="text-white font-extrabold bg-primaryOrange-50 hover:bg-orange-700 text-lg py-4 w-full md:w-auto px-20 rounded-md "
                >
                  Apply
                </button>
              ) : (
                <p className="font-extrabold text-primaryOrange-50 text-lg">
                  Applied
                </p>
              )}
              <button
                onClick={handleFavorite}
                className="hidden md:block text-primaryOrange-50 hover:text-orange-700"
              >
                {!session.data?.user.user.favorites?.includes(params.id) ? (
                  <AiOutlineStar size={28} />
                ) : (
                  <AiFillStar size={28} />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
