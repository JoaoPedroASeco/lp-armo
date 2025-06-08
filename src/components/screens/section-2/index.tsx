import Image from "next/image";

export const Section2 = () => {
  return (
    <section className="flex flex-col w-full h-fit min-h-[839px] justify-center items-center relative">
      <div className="flex justify-between items-start absolute z-1 w-full h-full max-w-[68.80%] mx-auto">
        <Image
          src={"/sections/2/main-content.svg"}
          width={985}
          height={657}
          alt=""
          className="mt-[8%]"
        />
      </div>
    </section>
  );
}