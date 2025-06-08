import { mocks } from "@/mocks";
import Image from "next/image";

export const Section1 = () => {
  return (
    <section className="flex flex-col w-full h-fit justify-center items-center relative overflow-hidden">
      <Image
        src={mocks.header.desktop.bg}
        width={1920}
        height={806}
        quality={100}
        priority
        className="flex w-full max-w-screen aspect-auto z-0"
        alt=""
      />
      <Image
        src="/sections/1/arrow-traced.svg"
        width={267}
        height={823}
        alt="Arrow traced"
        className="absolute top-[15.38%] left-[4.73%]"
      />
      <div className="flex justify-center items-center absolute z-1 w-full h-full max-w-[68.80%] mx-auto">
        <div className="flex justify-between items-start w-full h-full mx-auto">
          <div className="mt-[220px] max-w-[35%]">
            <h1 className="text-[64px] leading-[64px] text-[#FFFFFF] max-w-[502px]">
              <Image
                src={"/sections/1/text-headline.svg"}
                width={502}
                height={126}
                alt=""
                className=""
              />
            </h1>
            <p className="text-[#CBCDF6] text-[24px] leading-[24px] max-w-[538px] mt-6">
              <Image
                src={"/sections/1/text-description.svg"}
                width={538}
                height={128}
                alt=""
                className=""
              />
            </p>

            <button className="bg-gradient-to-bl from-[#7500CD] to-[#333693]  text-[#FFFFFF] font-bold py-6 px-12 rounded-[20px] mt-14">
              <Image
                src={"/sections/1/cta-text.svg"}
                width={253}
                height={14}
                alt=""
              />
            </button>
          </div>

          <Image
            src={mocks.header.desktop.image1}
            width={805}
            height={451}
            alt=""
            quality={100}
            className="mr-[-71px] mt-[177px] max-w-[65%]"
          />
        </div>
      </div>
    </section>
  );
};
