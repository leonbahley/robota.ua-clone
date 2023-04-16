import Carousel from "./Carousel";
import Image from "next/image";
import data from "./data.json";
const EmblaCarousel = () => {
  return (
    <div className="container mx-auto my-2">
      <Carousel loop>
        {data.map(
          (
            {
              text,
              name,
              profileImg,
              position,
              company,
              companyImg,
              width,
              height,
            },
            i
          ) => {
            return (
              <div
                className="bg-[#fffde7] flex-[0_0_100%] rounded-md px-4 md:px-12 py-7 md:py-14 flex flex-col gap-4 justify-between relative "
                key={i}
              >
                <svg
                  className="absolute text-[#ffe886] -top-[27px] -right-[20px] z-10"
                  width={128}
                  height={120}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 120"
                >
                  <path
                    fill="currentColor"
                    d="M57.533 112.335c-2.098 3.329.295 7.665 4.23 7.665h24.468a4.999 4.999 0 004.18-2.257l36.096-55a5 5 0 000-5.486l-36.096-55A5 5 0 0086.231 0H61.763c-3.935 0-6.328 4.336-4.23 7.665l31.293 49.67a5 5 0 010 5.33l-31.293 49.67zm-56.704 0c-2.097 3.329.296 7.665 4.23 7.665h24.469a4.999 4.999 0 004.18-2.257l36.096-55a5 5 0 000-5.486l-36.096-55A5 5 0 0029.528 0H5.06C1.125 0-1.268 4.336.83 7.665l31.293 49.67a5 5 0 010 5.33L.829 112.335z"
                  ></path>
                </svg>
                <p className="text-lg italic md:pr-[68px] z-10">{text}</p>
                <div className="flex justify-between flex-col sm:flex-row">
                  <div className="flex  items-center gap-3">
                    <Image
                      className="rounded-full"
                      src={profileImg}
                      width={80}
                      height={80}
                      alt="avatar"
                    />
                    <div>
                      <h5 className="font-bold mb-1">{name}</h5>
                      <p>
                        {position}
                        <span className="font-bold text-primaryOrange-50">
                          {" "}
                          {company}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Image
                    src={companyImg}
                    width={width}
                    height={height}
                    alt="company-logo"
                  />
                </div>
              </div>
            );
          }
        )}
      </Carousel>
    </div>
  );
};

export default EmblaCarousel;
