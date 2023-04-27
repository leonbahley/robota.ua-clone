"use client";

import Footer from "@/app/components/Footer/Footer";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeedbackPage() {
  const [candidates, setCandidates] = useState<
    { applications: string[]; _id: string; name: string }[]
  >([]);
  const [vacancies, setVacancies] = useState([]);
  const session = useSession() as any;
  useEffect(() => {
    if (session.status === "authenticated") {
      fetchCandidates();
      fetchVacancies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const fetchVacancies = async () => {
    const res = await fetch(
      `${process.env.API_URL}/vacancies/company-vacancies`,
      {
        headers: {
          Authorization: `bearer ${session.data?.user.token}`,
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    setVacancies(data.vacancies);
  };

  const fetchCandidates = async () => {
    const res = await fetch(`${process.env.API_URL}/vacancies/candidates`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session.data?.user.token}`,
      },
    });
    const data = await res.json();

    if (res.status === 302) {
      setCandidates(data.candidates);
    }
  };

  return (
    <>
      {" "}
      <section className="grow bg-[#f3f5f8] pb-12 pt-2 md:pt-6">
        {vacancies && (
          <div className="flex flex-col gap-5 max-w-[750px] mx-auto">
            {vacancies.map(({ name, _id: vacId }) => (
              <div
                className="rounded-md bg-white p-4  shadow-md hover:shadow-lg"
                key={vacId}
              >
                <span className="font-extrabold text-lg">{name}</span>
                <p className="font-bold">Candidates:</p>

                {candidates &&
                  candidates
                    .filter(({ applications }) => applications.includes(vacId))
                    .map(({ _id, name }) => (
                      <p key={_id}>
                        <Link href={`employer/candidate/${_id}`}>{name}</Link>
                      </p>
                    ))}
              </div>
            ))}
          </div>
        )}
      </section>{" "}
      <Footer />
    </>
  );
}
