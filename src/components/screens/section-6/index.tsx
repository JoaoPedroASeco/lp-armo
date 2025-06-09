import Image from "next/image";

export const Section6 = () => {
  return (
    <section
      className="flex flex-col w-full h-full min-h-[969px] justify-center items-center relative z-[3]"
      style={{
        backgroundImage: "url(/sections/6/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between items-center absolute z-1 w-full h-full max-w-[72%] mx-auto">
        <div>
          <Image
            src={"/sections/6/icon.svg"}
            width={64}
            height={64}
            alt=""
            className="mb-6"
          />

          <Image
            src={"/sections/6/headline.svg"}
            width={558}
            height={168}
            alt=""
            className="mb-14"
          />

          <button className="bg-gradient-to-bl from-[#7500CD] to-[#333693]  text-[#FFFFFF] font-bold py-6 px-12 rounded-[20px]">
            <Image
              src={"/sections/6/cta-text.svg"}
              width={253}
              height={14}
              alt=""
            />
          </button>
        </div>
        <div className="flex min-w-[588px] min-h-[600px] bg-[#6064C9]"></div>
      </div>
    </section>
  );
};
