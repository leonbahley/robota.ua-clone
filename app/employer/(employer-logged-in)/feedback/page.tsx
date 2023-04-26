"use client";

import Footer from "@/app/components/Footer/Footer";

import { useSession } from "next-auth/react";
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
      "http://localhost:3001/vacancies/company-vacancies",
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
    const res = await fetch("http://localhost:3001/vacancies/candidates", {
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
        {vacancies &&
          vacancies.map(({ name, _id: vacId }) => (
            <div key={vacId}>
              {" "}
              {name}
              {candidates &&
                candidates
                  .filter(({ applications }) => applications.includes(vacId))
                  .map(({ _id, name }) => <div key={_id}>{name}</div>)}
            </div>
          ))}
      </section>{" "}
      <Footer />
    </>
  );
}
