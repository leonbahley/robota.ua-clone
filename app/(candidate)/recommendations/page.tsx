import Image from "next/image";

import Footer from "../../components/Footer/Footer";
import Header from "../components/Header";

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <section className="grow bg-[#f2f5f8] pt-6 md:pt-8 pb-16 px-3">
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
      </section>
      <Footer />
    </div>
  );
}
