import Header from "../components/Header/Header";
import { HiUserAdd } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import PartnerList from "../components/PartnerList/PartnerList";
import EmblaCarousel from "./components/Carousel/EmblaCarousel";

export default function EmployerPage() {
  return (
    <>
      <Header />
      <section className=" bg-primaryOrange-50 text-white  p-10">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-extrabold text-4xl mb-4">
            robota.ua — working for you
          </h1>
          <h2 className="text-xl mb-11">
            Post an announcement for free. Thousands of candidates are waiting
            for it
          </h2>
          <button className="bg-white text-black font-bold px-12 py-5 rounded-md active:opacity-75 xl:hover:opacity-75 mb-14">
            Publish free announcement
          </button>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="flex gap-3 max-w-[370px]">
              <HiUserAdd size={30} />
              <div className="flex flex-col">
                <h3 className="font-extrabold">Easily create an account</h3>
                <p>
                  You only need to provide a short description if your company
                </p>
                <svg
                  className="lg:hidden mx-auto my-2"
                  width={9}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 11 32"
                >
                  <path
                    d="M5.49998 1.92781C5.49998 1.68966 5.49998 1.34483 5.49998 1M5.49998 5.65057C5.49998 4.7931 5.49998 4.44828 5.49998 3.72799M5.49998 10.6351C5.49998 9.27586 5.49998 8.93103 5.49998 7.7415M5.49998 31C5.49998 29.9655 5.49998 28.931 5.49998 26.8621C5.49998 22.3793 5.49998 19.6207 5.49998 12.915M5.49998 31L10 27.2069M5.49998 31L1 27.2069"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 max-w-[370px]">
              <HiOutlineDocumentText size={30} />
              <div className="flex flex-col">
                <h3 className="font-extrabold">Publish free announcement</h3>
                <p>
                  Every user can post a free announcement to check the power of
                  robota.ua
                </p>
                <svg
                  className="lg:hidden mx-auto my-2"
                  width={9}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 11 32"
                >
                  <path
                    d="M5.49998 1.92781C5.49998 1.68966 5.49998 1.34483 5.49998 1M5.49998 5.65057C5.49998 4.7931 5.49998 4.44828 5.49998 3.72799M5.49998 10.6351C5.49998 9.27586 5.49998 8.93103 5.49998 7.7415M5.49998 31C5.49998 29.9655 5.49998 28.931 5.49998 26.8621C5.49998 22.3793 5.49998 19.6207 5.49998 12.915M5.49998 31L10 27.2069M5.49998 31L1 27.2069"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex gap-3 max-w-[370px]">
              <BsPeopleFill size={30} />
              <div>
                <h3 className="font-extrabold">
                  Receive candidate&apos;s feedback
                </h3>
                <p>
                  Candidates will see your announcement and will start to send
                  their CVs
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex gap-80 -m-4 ">
            <svg
              className="-rotate-45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width={80}
            >
              <path
                d="M2.86333 6.38333C2.70778 5.10111 2.58667 3.80667 2.5 2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 20.146C5.24657 17.9169 4.60796 15.6506 4.08667 13.356"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.2567 35.2623C11.5357 32.5826 10.0021 29.787 8.66675 26.8956"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M77.5 67.473C76.3233 67.533 73.5 67.473 72.32 67.473C50.9961 67.5109 30.8167 57.831 17.5 41.1763"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M67.5 57.5L77.5 67.5L67.5 77.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              className="-rotate-45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width={80}
            >
              <path
                d="M2.86333 6.38333C2.70778 5.10111 2.58667 3.80667 2.5 2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 20.146C5.24657 17.9169 4.60796 15.6506 4.08667 13.356"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.2567 35.2623C11.5357 32.5826 10.0021 29.787 8.66675 26.8956"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M77.5 67.473C76.3233 67.533 73.5 67.473 72.32 67.473C50.9961 67.5109 30.8167 57.831 17.5 41.1763"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M67.5 57.5L77.5 67.5L67.5 77.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="flex  flex-col lg:flex-row gap-5 lg:gap-12 z-10 justify-center items-center px-2 mt-12">
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
      <section className="container mx-auto flex flex-col md:flex-row gap-4 py-5 px-2 sm:px-0">
        <div className="border-2 pl-4 pr-9  py-8 rounded-md border-orange-600 relative grow shrink basis-0">
          <h3 className="font-extrabold text-3xl text-orange-600">4,3 mln</h3>
          <p className="text-lg mt-2">
            The largest announcement data base in Ukraine
          </p>
          <Image
            className="absolute top-2 right-2 w-[80px] h-[70px] "
            width={80}
            height={70}
            alt="book"
            src={
              "https://images.cf-rabota.com.ua/2022/commercial-info/Document.svg"
            }
          />
        </div>
        <div className="border-2 pl-4 pr-9 py-8 rounded-md border-orange-600 relative grow shrink basis-0">
          <h3 className="font-extrabold text-3xl text-orange-600">1,4 mln</h3>
          <p className="text-lg mt-2">
            Largest number of active candidates in a year
          </p>
          <Image
            className="absolute top-2 right-2"
            width={46}
            height={113}
            alt="book"
            src={
              "https://images.cf-rabota.com.ua/2022/commercial-info/Character.svg"
            }
          />
        </div>
        <div className="border-2 pl-4 pr-9 py-8 rounded-md border-orange-600 relative grow shrink basis-0">
          <h3 className="font-extrabold text-3xl text-orange-600">89%</h3>
          <p className="text-lg mt-2">
            Highest awareness level between ukrainians
          </p>
          <Image
            className="absolute top-2 right-2 w-[58px] h-[100px]"
            width={58}
            height={100}
            alt="book"
            src={
              "https://images.cf-rabota.com.ua/2022/commercial-info/freepik--Medal--inject-144.png"
            }
          />
        </div>
      </section>
      <section className="py-6 container mx-auto">
        <h4 className="font-extrabold text-3xl">
          We helped 60 thousand partners to find employees in 2020
        </h4>
        <PartnerList />
      </section>
      <EmblaCarousel />
      <Footer />
    </>
  );
}
