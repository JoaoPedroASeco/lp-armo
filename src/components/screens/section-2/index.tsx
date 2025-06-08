"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

export const Section2 = () => {
  const { is768 } = useMediaQuery();

  return (
    <section
      className="flex flex-col w-full max-h-[839px] h-[80vh] max-[1441px]:h-[90vh] max-[769px]:h-[100vh] max-[441px]:max-h-[560px] justify-center items-center relative"
      style={{
        backgroundImage: "url(/sections/2/bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between items-start z-1 w-full h-full max-w-[68.80%] max-[769px]:max-w-[100%] max-[769px]:px-4 mx-auto relative">
        <div className="flex justify-start max-[769px]:justify-center items-start h-full absolute bottom-0 max-[441px]:top-0 left-0 w-[35vw] max-[769px]:w-[100%] z-1">
          <Image
            src={`/sections/2/${is768 ? "mobile/" : ""}arrow-traced.svg`}
            width={is768 ? 52 : 660}
            height={is768 ? 560 : 657}
            alt=""
            className="absolute bottom-0 max-[441px]:top-0 w-full z-0 max-h-[100%] max-[441px]:max-w-[52px]"
          />

          <Image
            src={`/sections/2/${is768 ? "mobile/" : ""}text-headline.svg`}
            width={590}
            height={144}
            alt=""
            className="mt-[18vh] max-[1601px]:mt-[20vh] max-[1441px]:mt-[30vh] max-[1025px]:mt-[20vh] max-[769px]:mt-[22vh] max-[441px]:mt-[14vh] max-w-[90%] max-[1601px]:max-w-[85%] max-[769px]:max-w-[70%] max-[441px]:max-w-[85%]"
          />

          <Image
            src={`/sections/2/${
              is768 ? "mobile/" : ""
            }card-text-description.svg`}
            width={590}
            height={192}
            alt=""
            className="absolute bottom-[23%] max-[1601px]:bottom-[19%] max-[1025px]:bottom-[22%] right-[-45%] max-[1601]:right-[-45%] max-[1601px]:max-w-[90%] max-[769px]:max-w-[80%] z-1 max-[769px]:right-[unset] max-[769px]:bottom-[26vh] max-[441px]:bottom-[17vh]"
          />
        </div>
      </div>
    </section>
  );
};
