import Image from "next/image";

const partnerImages = [
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/2661158_20221227152437.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/536358_20210521144529.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/1568398_20220923124624.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/2758915_20200210171412.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/2548784_20171220170540.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/223469_20210609173751.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/492293_20230126160232.jpeg",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/901981_20181004170622.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/2149612_20230222201106.jpeg",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/1218975_20211103111045.png",
  "  https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/2922888_20210430131648.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/7194438_20230103141111.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/1277303_20210511150814.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/1055_20201130174246.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/35878_20211215180229.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/763166_20210430161601.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/477532_20210430122646.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/11197968_20210730124000.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/1049_20211206141025.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/1026_20210506132612.png",
  "  https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/34990_20230329120201.jpeg",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/916660_20210430111618.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/296810_20210430112052.png",
  "https://company-logo-frankfurt.rabota.ua/cdn-cgi/image/w=250/424794_20210430120924.png",
];

export default function PartnerList() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto ">
        <ul className="flex justify-around flex-wrap pt-10">
          {partnerImages.map((item, i) => (
            <li className="px-3 mb-9" key={i}>
              <Image
                className="block object-contain w-[120px] h-[60px]"
                width={120}
                height={60}
                src={item}
                alt="partner"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
