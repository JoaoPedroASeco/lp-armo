"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { mocks } from "@/mocks";
import Image from "next/image";
// import motion from "framer-motion";

export const Section1 = () => {
  const { is768, is1440 } = useMediaQuery();

  return (
    <section
      id="#home"
      className="flex flex-col w-full h-fit justify-center items-center relative max-[769px]:h-[155vh] max-[441px]:h-[89vh] max-[441px]:min-h-[790px] "
      style={
        is768
          ? {
              backgroundImage: "url(/sections/1/mobile/bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <Image
        src={`/sections/1/bg.png`}
        width={1920}
        height={806}
        alt="Arrow traced"
        className="max-[769px]:hidden"
      />
      <Image
        src={`/sections/1/${is768 ? "mobile/" : ""}arrow-traced.svg`}
        width={267}
        height={823}
        alt="Arrow traced"
        className="absolute top-[15.38%] max-[769px]:top-0 left-[4.73%] max-[769px]:left-[unset] max-[1441px]:w-[15%] max-[769px]:w-[10%] max-[441px]:w-[12%]"
      />

      <div className="flex justify-center items-start absolute top-0 z-1 w-full h-full max-w-[68.80%] max-[769px]:max-w-[100%] max-[769px]:px-4 mx-auto">
        <div className="flex max-[769px]:flex-col justify-between items-center w-full h-fit mx-auto">
          <div className="flex flex-col mt-[18%] max-[769px]:mt-[35%] max-[441px]:mt-[41%] max-w-[35%] max-[769px]:max-w-[90vw] max-[769px]:items-center">
            <h1 className="flex max-[769px]:justify-center text-[64px] leading-[64px] text-[#FFFFFF] max-w-[502px]">
              <Image
                src={`/sections/1/${is768 ? "mobile/" : ""}text-headline.svg`}
                width={502}
                height={126}
                alt=""
                className="max-[769px]:max-w-[60vw] max-[441px]:max-w-[70vw]"
              />
            </h1>
            <p className="flex max-[769px]:justify-center text-[#CBCDF6] text-[24px] leading-[24px] max-w-[538px] mt-[5%]">
              <Image
                src={`/sections/1/${
                  is768 ? "mobile/" : ""
                }text-description.svg`}
                width={538}
                height={128}
                alt=""
                className="max-[769px]:max-w-[70vw] max-[441px]:max-w-[85vw]"
              />
            </p>

            <button className=" flex justify-center items-center w-fit bg-gradient-to-bl from-[#7500CD] to-[#333693] text-[#FFFFFF] font-bold max-w-[60%] h-[62px] max-[1441px]:h-[42px] max-[1157px]:h-[38px] rounded-[20px] max-[1441px]:rounded-[10px] max-[1157px]:rounded-[8px] max-[441px]:rounded-[12px] px-[8%] mt-[9%] max-[769px]:mt-[10%] max-[769px]:h-[8vh] max-[769px]:max-w-[100%] max-[769px]:w-full max-[441px]:mt-[13%]">
              <Image
                src={"/sections/1/cta-text.svg"}
                width={253}
                height={14}
                alt=""
                className=""
              />
            </button>
          </div>

          <Image
            src={
              is1440
                ? "/sections/1/mobile/image-1.png"
                : mocks.header.desktop.image1
            }
            width={805}
            height={451}
            alt=""
            quality={100}
            className="mr-[-71px] max-[769px]:mr-0 mt-[12%] max-w-[65%] max-[1441px]:max-w-[60%]  max-[769px]:max-w-[85%] max-[769px]:mt-[9%] max-[441px]:mt-[7%] max-[441px]:max-w-[105%]"
          />
        </div>
      </div>
    </section>
  );
};
