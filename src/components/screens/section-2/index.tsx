"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

export const Section2 = () => {
  const { is768 } = useMediaQuery();

  return (
    <section
      id="about"
      className="flex flex-col w-full max-h-[839px] h-[80vh] max-[1441px]:h-[65vh] max-[1025px]:h-[60vh] max-[769px]:h-[100vh]  max-[441px]:max-h-[560px] max-[441px]:min-h-[560px] justify-end items-center relative"
      style={{
        backgroundImage: "url(/sections/2/bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src={`/sections/2/${is768 ? "mobile/" : ""}text-headline.svg`}
        width={590}
        height={144}
        alt=""
        className={`absolute mr-[17%] w-[45%] max-[1660px]:w-[55%] max-[1441px]:w-[50%] max-[769px]:mr-[0%] max-[768px]:w-[88%]`}
      />
    </section>
  );
};
