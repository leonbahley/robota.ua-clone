"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Header from "../components/Header";
import { VscPersonAdd } from "react-icons/vsc";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Footer from "@/app/components/Footer/Footer";

export default function SearchPage() {
  const [data, setData] = useState([]);
  const session = useSession() as any;
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      fetchVacancies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const fetchVacancies = async () => {
    const res = await fetch(`${process.env.API_URL}/vacancies/favorites`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session.data?.user.token}`,
      },
    });
    const data = await res.json();

    if (res.status === 302) {
      setData(data.vacancies);
    }
  };

  const handleFavorite = async (id: string) => {
    let path;
    if (session.data?.user.user.favorites.includes(id)) {
      path = "delete-from-favorites";
    } else {
      path = "add-to-favorites";
    }
    const res = await fetch(`${process.env.API_URL}/vacancies/${path}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session.data?.user.token}`,
      },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      if (session.data?.user.user.favorites.includes(id)) {
        const arr = [...session.data?.user.user.favorites];
        const index = arr.indexOf(id);
        arr.splice(index, 1);
        session.update({
          info: {
            favorites: arr,
          },
        });
      } else {
        session.update({
          info: {
            ...session.data.user.user,
            favorites: [...session.data?.user.user.favorites, id],
          },
        });
      }
    }
  };

  const apply = async (id: string) => {
    const res = await fetch(
      `${process.env.API_URL}/vacancies/add-to-applications`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session.data?.user.token}`,
        },
        body: JSON.stringify({ id }),
      }
    );
    if (res.ok) {
      session.update({
        info: {
          ...session.data.user.user,
          applications: [...session.data?.user.user.applications, id],
        },
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <section className="bg-[#f3f5f8] grow p-2 md:pb-8 md:pt-16">
        <div className="max-w-[750px] mx-auto ">
          <div className="flex flex-col gap-5">
            {data.length !== 0 &&
              data.map(({ _id, name, address, wage, company }) => (
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

                  <div className="flex gap-6 items-center text-primaryOrange-50 ">
                    {!session.data?.user.user.applications?.includes(_id) ? (
                      <button
                        onClick={() => apply(_id)}
                        className="flex font-extrabold items-center gap-2 hover:text-orange-700"
                      >
                        <VscPersonAdd size={23} />
                        Apply
                      </button>
                    ) : (
                      <p className="font-extrabold text-primaryOrange-50">
                        Applied
                      </p>
                    )}
                    <button
                      onClick={() => handleFavorite(_id)}
                      className="text-primaryOrange-50 hover:text-orange-700"
                    >
                      {!session.data?.user.user.favorites.includes(_id) ? (
                        <AiOutlineStar size={23} />
                      ) : (
                        <AiFillStar size={23} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
