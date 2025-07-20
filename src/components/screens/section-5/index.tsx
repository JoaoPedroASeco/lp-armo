"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { ContactForm } from "./Form";

export const Section5 = () => {
  const { is768 } = useMediaQuery();

  return (
    <section
      id="contact"
      className="flex flex-col w-full h-fit justify-center items-center relative bg-[#03042C]"
      style={{
        backgroundImage: `url(/sections/4/${is768 ? "mobile/" : ""}bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center py-[56px] z-1 w-full h-full max-w-[68.80%] max-[769px]:max-w-[100%] mx-auto">
        <Image
          src={"/sections/4/form-headline.svg"}
          width={562}
          height={144}
          alt="headline "
          className="max-[769px]:max-w-[80%]"
        />

        <ContactForm />
      </div>
    </section>
  );
};
