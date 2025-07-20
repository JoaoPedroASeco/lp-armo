"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
// import motion from "framer-motion";

export const Section1 = () => {
  const { is768 } = useMediaQuery();

  return (
    <section
      id="#home"
      className="flex flex-col w-full justify-start items-center max-[769px]:pb-10 relative"
      style={
        is768
          ? {
              backgroundImage: "url(/sections/1/mobile/bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }
          : {
              backgroundImage: "url(/sections/1/bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }
      }
    >
      <Image
        src={`/sections/1/${is768 ? "/mobile/" : ""}content.svg`}
        width={1595}
        height={681}
        alt={""}
        className="mt-[124px] max-w-[84%] mr-[7%] max-[769px]:mt-0 max-[769px]:w-[80%] max-[769px]:mr-[0%] max-[441px]:w-[100%]"
      />
    </section>
  );
};
