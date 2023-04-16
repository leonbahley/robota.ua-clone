import Image from "next/image";

import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import PartnerList from "./components/PartnerList/PartnerList";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative bg-primaryOrange-50 text-white  ">
        <Image
          className="absolute bottom-0 left-0"
          width={245}
          height={365}
          src={
            "https://images.cf-rabota.com.ua/alliance/jobseeker-home/flag-left.svg"
          }
          alt="flag"
        />
        <div className="container mx-auto flex flex-col min-h-[330px]   text-center">
          <h1 className="font-extrabold text-4xl z-10 mt-6">
            robota.ua — working for victory!
          </h1>
          <Searchbar />
          <div className="flex  flex-col lg:flex-row gap-5 lg:gap-12 z-10 justify-center items-center px-2 mt-14 mb-3">
            <p>
              <span className="font-bold">63 685</span> announcements from{" "}
              <span className="font-bold">25 613</span> companies
            </p>
            <div className="w-[10px] h-[10px] rotate-45 bg-white"></div>
            <p>
              <span className="font-bold">4 829 741</span> candidates trusted us
              their own CV
            </p>
          </div>
        </div>
      </section>
      <section>
        <PartnerList />
      </section>
      <Footer />
    </>
  );
}
