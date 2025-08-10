"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

export const Section6 = () => {
  const { is768 } = useMediaQuery();

  return (
    <section
      className="flex flex-col w-full h-full min-h-[969px] justify-center items-center relative z-[3]"
      style={{
        backgroundImage: `url(/sections/6/${is768 ? "mobile/" : ""}bg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex max-[769px]:flex-col justify-between max-[769px]:justify-center items-center absolute z-1 w-full h-full max-w-[68.80%] max-[769px]:max-w-[100%] px-4 mx-auto max-[769px]:gap-[44px]">
        <div className="flex w-full max-[769px]:max-w-[400px] max-[769px]:justify-center max-[769px]:items-center flex-col">
          <Image
            src={"/sections/6/icon.svg"}
            width={64}
            height={64}
            alt=""
            className="mb-6"
          />

          <Image
            src={`/sections/6/${is768 ? "mobile/" : ""}headline.svg`}
            width={558}
            height={168}
            alt=""
            className="mb-14 max-[441px]:max-w-[90%]"
          />

          <Link
            href={"#contact"}
            className="flex justify-center items-center w-full max-w-[75%] max-[769px]:max-w-full h-[62px] px-[8%] bg-gradient-to-bl from-[#7500CD] to-[#333693]  text-[#FFFFFF] font-bold rounded-[10px] max-[441px]:max-w-[90%]"
          >
            <Image
              src={"/sections/6/cta-text.svg"}
              width={253}
              height={14}
              alt=""
            />
          </Link>
        </div>

        <Image
          src={"/sections/6/cell-icon.png"}
          width={754}
          height={738}
          alt=""
          className=" max-w-[60%] w-full max-[769px]:max-w-[400px]"
        />
      </div>
    </section>
  );
};
