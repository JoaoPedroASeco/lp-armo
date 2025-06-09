"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

const Var1 = ({ item }: { item: number }) => {
  const { is1024, is768 } = useMediaQuery();

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Image
            src={`/sections/3/cards/${item}/icon.svg`}
            width={43}
            height={43}
            alt="max-w-[43px]"
          />
          <Image
            src={`/sections/3/cards/${item}/${
              is1024 ? "mobile/" : ""
            }icon-headline.svg`}
            width={291}
            height={43}
            alt=""
            className="w-fit max-h-[43px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2>
            <Image
              src={`/sections/3/cards/${item}/${
                is768 ? "mobile/" : ""
              }text-headline.svg`}
              width={611}
              height={58}
              alt=""
            />
          </h2>
          <p>
            <Image
              src={`/sections/3/cards/${item}/${
                is768 ? "mobile/" : ""
              }text-description.svg`}
              width={611}
              height={58}
              alt=""
            />
          </p>
        </div>
      </div>

      <Image
        src={`/sections/3/cards/${item}/image.png`}
        width={650}
        height={388}
        alt=""
        className="z-1 max-w-[50%] max-[769px]:max-w-full"
      />
    </>
  );
};

const Var2 = ({ item }: { item: number }) => {
  return (
    <>
      <Image
        src={`/sections/3/cards/${item}/image.png`}
        width={650}
        height={388}
        alt=""
        className="z-1 max-w-[50%] max-[769px]:max-w-full"
      />

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Image
            src={`/sections/3/cards/${item}/icon.svg`}
            width={43}
            height={43}
            alt=""
            className=""
          />
          <Image
            src={`/sections/3/cards/${item}/icon-headline.svg`}
            width={291}
            height={43}
            alt=""
            className=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2>
            <Image
              src={`/sections/3/cards/${item}/text-headline.svg`}
              width={611}
              height={58}
              alt=""
              className=""
            />
          </h2>
          <p>
            <Image
              src={`/sections/3/cards/${item}/text-description.svg`}
              width={611}
              height={58}
              alt=""
              className=""
            />
          </p>
        </div>
      </div>
    </>
  );
};

export const Section3 = () => {
  const { is768 } = useMediaQuery();

  return (
    <section
      id="our-services"
      className="flex flex-col w-full h-full justify-center items-center relative z-[3]"
      style={{
        backgroundImage: `url(/sections/3/${is768 ? "mobile/" : ""}bg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-start items-center z-1 w-full h-full max-w-[68.80%] max-[769px]:max-w-[100%] max-[769px]:px-4 mx-auto pb-[80px] relative">
        <Image
          src={`/sections/3/${is768 ? "mobile/" : ""}headline.svg`}
          width={1139}
          height={148}
          alt=""
          className="mt-[-65px] max-w-[90%] max-[769px]:mt-0 max-[769px]:absolute max-[769px] top-[-1.5%]"
        />

        <ul className="flex flex-col h-full mt-[10vh] max-[1601px]:mt-[11vh] max-[1441px]:mt-[12vh] max-[1025px]:mt-[15vh] max-[769px]:mt-[35.3%] gap-[96px] max-[769px]:gap-[240px] max-[441px]:gap-[80px] max-[376px]:gap-[55px] z-1">
          {[1, 2, 3, 4, 5].map((item) =>
            !is768 ? (
              <li
                key={item}
                className="flex justify-between items-center gap-[60px] max-[769px]:gap-[110px] max-[441px]:gap-8 max-[769px]:flex-col-reverse"
              >
                {item % 2 !== 0 ? <Var1 item={item} /> : <Var2 item={item} />}
              </li>
            ) : (
              <li
                key={item}
                className="flex justify-between items-center gap-[60px] max-[769px]:gap-[110px] max-[441px]:gap-8 max-[769px]:flex-col-reverse"
              >
                <Var1 item={item} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};
