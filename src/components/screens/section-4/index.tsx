import Image from "next/image";

export const Section4 = () => {
  return (
    <section className="flex flex-col w-full h-fit min-h-[1025px] justify-center items-center relative bg-[#03042C]">
      <div className="flex flex-col justify-center items-center absolute z-1 w-full h-full max-w-[68.80%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-6 mb-[45px]">
          <Image src={"/sections/5/icon.svg"} width={64} height={64} alt="" />
          <Image
            src={"/sections/5/headline.svg"}
            width={586}
            height={68}
            alt=""
          />
        </div>

        <div className="bg-gradient-to-r from-[#333693] to-[#181946] w-[90%] h-[565px] rounded-[24px]"></div>
      </div>
      <Image
        src={"/sections/5/bg.svg"}
        width={1920}
        height={399}
        alt=""
        className="absolute bottom-0"
      />
    </section>
  );
};
