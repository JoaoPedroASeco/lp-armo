"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

export const Footer = () => {
  const { is768 } = useMediaQuery();

  return (
    <footer className="flex w-full h-fit min-h-[431px] bg-[#333693] pb-[50px]">
      <div className="flex flex-col justify-center items-center z-1 w-full h-full max-w-[68.80%] max-[768px]:max-w-[100%] max-[769px]:px-4 mx-auto">
        <div className="flex max-[441px]:flex-col max-[441px]:gap-[56px] w-full h-fit justify-between mt-[84px] mb-[71px] px-5">
          <Image
            src={"/logos/armo-short-logo.svg"}
            width={92}
            height={92}
            alt="Armo Logo"
            className="max-w-[15vw]"
          />

          <div className="flex flex-col gap-4 max-w-[22vw] max-[441px]:max-w-[60%]">
            <Image
              src={"/sections/footer/help-icon.svg"}
              width={40}
              height={40}
              alt=""
            />
            <Image
              src={"/sections/footer/help-label-text.svg"}
              width={180}
              height={14}
              alt=""
              className="max-[441px]:max-w-[55%]"
            />
            <Image
              src={"/sections/footer/help-value-text.svg"}
              width={320}
              height={14}
              alt=""
              className="max-[441px]:mt-[-6px] max-[441px]:max-w-[120%]"
            />
          </div>

          <div className="flex flex-col gap-4 max-w-[15vw] max-[441px]:max-w-[60%]">
            <Image
              src={"/sections/footer/phone-icon.svg"}
              width={40}
              height={40}
              alt=""
            />
            <Image
              src={"/sections/footer/phone-label-text.svg"}
              width={127}
              height={14}
              alt=""
              className="max-[441px]:max-w-[40%]"
            />
            <Image
              src={"/sections/footer/phone-value-text.svg"}
              width={137}
              height={14}
              alt=""
              className="max-[441px]:mt-[-6px] max-[441px]:max-w-[120%]"
            />
          </div>

          <div className="flex flex-col gap-4 max-w-[25vw] max-[441px]:max-w-[60%]">
            <Image
              src={"/sections/footer/email-icon.svg"}
              width={40}
              height={40}
              alt=""
            />
            <Image
              src={"/sections/footer/email-label-text.svg"}
              width={70}
              height={14}
              alt=""
              className="max-[441px]:max-w-[25%]"
            />
            <Image
              src={"/sections/footer/email-value-text.svg"}
              width={246}
              height={14}
              alt=""
              className="max-[441px]:mt-[-6px] max-[441px]:max-w-[80%]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-full p-7 bg-[#CBCDF6] rounded-[24px] max-[769px]:flex-col max-[769px]:gap-6">
          <strong>
            <Image
              src={`/sections/footer/${is768 ? "mobile/" : ""}rights-text.svg`}
              width={516}
              height={13}
              alt=""
            />
          </strong>

          <div className="flex items-center gap-3 ">
            <Image
              src={"/sections/footer/linkedin-icon.svg"}
              width={44}
              height={44}
              alt=""
            />

            <Image
              src={"/sections/footer/instagram-icon.svg"}
              width={44}
              height={44}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
