"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

export const Section4 = () => {
  const { is768 } = useMediaQuery();

  return (
    <section
      id="results"
      className="flex flex-col w-full h-fit min-h-screen max-h-[100vh] justify-center items-center relative bg-[#03042C]"
    >
      <div className="flex flex-col justify-center items-center absolute z-1 w-full h-full max-w-[68.80%] max-[769px]:max-w-[100%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-6 mb-[45px]">
          <Image src={"/sections/5/icon.svg"} width={64} height={64} alt="" />
          <Image
            src={`/sections/5/${is768 ? "mobile/" : ""}headline.svg`}
            width={586}
            height={68}
            alt=""
            className={`max-[441px]:w-[100%]`}
          />
        </div>

        <div className="bg-gradient-to-r from-[#333693] to-[#181946] w-[90%] h-[565px] max-[441px]:h-[614px] rounded-[24px]"></div>
      </div>
      <Image
        src={`/sections/5/${is768 ? "mobile/" : ""}bg.svg`}
        width={1920}
        height={399}
        alt=""
        className="absolute bottom-0"
      />
    </section>
  );
};
