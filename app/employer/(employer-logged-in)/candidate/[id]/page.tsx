"use client";

import Footer from "@/app/components/Footer/Footer";
import { BiArrowBack } from "react-icons/bi";

import { useEffect, useState } from "react";
import Link from "next/link";

interface IUser {
  name: string;
  email: string;
  age: string;
  location: string;
  phoneNumber: string;
  desiredPosition: string;
  workExperience: string;
  education: string;
}

export default function CandidatePage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<IUser>();
  useEffect(() => {
    fetchCandidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCandidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vacancies/candidate/${params.id}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    if (res.status === 302) {
      setData(data.candidate);
    }
  };

  return (
    <>
      <section className="grow bg-[#f3f5f8] pb-12 pt-2 md:pt-6">
        {data && (
          <div className="container mx-auto">
            <Link
              className="hidden sm:flex gap-1 items-center font-extrabold text-primaryOrange-50 hover:text-orange-700 mb-4"
              href={"employer/feedback"}
            >
              <BiArrowBack size={23} />
              To candidate list
            </Link>
            <div className="max-w-[600px] bg-white rounded-md px-2 py-4 md:px-5 md:py-7 ">
              <h2 className="font-extrabold text-xl mb-4 relative ">
                Personal information
              </h2>
              <p className="mb-1 font-extrabold">{data.name}</p>
              <p className="mb-1 font-extrabold">
                <span className="font-normal">Age:</span> {data.age}
              </p>
              <p className="mb-6 md:mb-10 font-extrabold">
                <span className="font-normal">Location:</span> {data.location}
              </p>
              <h2 className="font-extrabold text-xl mb-4 ">
                Contact information
              </h2>
              <p className="mb-1"> {data.email}</p>
              <p className="mb-6 md:mb-10">Phone number: {data.phoneNumber}</p>
              <h2 className="font-extrabold text-xl mb-4 ">Desired position</h2>
              <p className="mb-6 md:mb-10">{data.desiredPosition}</p>
              <h2 className="font-extrabold text-xl mb-4 ">Work experience</h2>
              <p className="mb-6 md:mb-10">{data.workExperience}</p>

              <h2 className="font-extrabold text-xl mb-4 ">
                Education <span className="text-red-600">*</span>
              </h2>
              <p>{data.education}</p>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
