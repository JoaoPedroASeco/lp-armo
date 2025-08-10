"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
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

      <Link
        href={"#contact"}
        className="flex justify-center items-center bg-gradient-to-b w-[353px] max-[1441px]:w-[300px] max-[1025px]:w-[250px]  h-[62px] max-[1441px]:h-[54px] max-[1025px]:h-[48px] rounded-[10px] from-[#7500CD] via-[#413393] to-[#333693] absolute left-[15%] top-[70%] max-[769px]:left-auto max-[769px]:top-[53%] max-[441px]:top-[47%] max-[769px]:w-[80%] max-[769px]:h-[59px] max-[441px]:h-[52px]"
      >
        <Image
          src={"/sections/1/cta-txt.svg"}
          width={257}
          height={14}
          alt="Queri informações"
          className="max-w-[257px] h-[20px] max-[1441px]:h-[18px] max-[1025px]:h-[16px]"
        />
      </Link>
    </section>
  );
};
