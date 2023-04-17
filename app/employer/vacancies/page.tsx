import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function VacanciListPage() {
  return (
    <>
      <section className="bg-[#f3f5f8] pb-5 pt-9">
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
            className="w-[188px] h-[107px] md:w-[282px] md:h-[160px] mx-auto md:mx-0"
            src={
              "https://images.cf-rabota.com.ua/alliance/feature-vacancies/zero-vacancies-state-img.svg"
            }
            width={282}
            height={160}
            alt="hiring"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
