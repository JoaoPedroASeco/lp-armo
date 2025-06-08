import Image from "next/image";

export const Section2 = () => {
  return (
    <section className="flex flex-col w-full min-h-[80vh] h-[80vh] justify-center items-center relative">
      <div className="flex justify-between items-start z-1 w-full h-full max-w-[68.80%] mx-auto relative">
        <Image
          src={"/sections/2/main-content.svg"}
          width={985}
          height={657}
          alt=""
          className="absolute bottom-0 left-0 w-[75%]"
        />
      </div>
    </section>
  );
};
