import Image from "next/image";

export const Section3 = () => {
  return (
    <section
      className="flex flex-col w-full h-full justify-center items-center relative z-[3]"
      style={{
        backgroundImage: "url(/sections/3/bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-start items-center z-1 w-full h-full max-w-[68.80%] mx-auto">
        <Image
          src={"/sections/3/headline.svg"}
          width={1139}
          height={148}
          alt=""
          className="mt-[-65px]"
        />

        <ul className="flex flex-col mt-[7.3%] gap-[87px] pb-[80px]">
          {[1, 2, 3, 4, 5].map((item) => (
            <li
              key={item}
              className="flex justify-between items-center gap-[60px]"
            >
              {item % 2 !== 0 ? (
                <>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/sections/3/cards/${item}/icon.svg`}
                        width={43}
                        height={43}
                        alt=""
                      />
                      <Image
                        src={`/sections/3/cards/${item}/icon-headline.svg`}
                        width={291}
                        height={43}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2>
                        <Image
                          src={`/sections/3/cards/${item}/text-headline.svg`}
                          width={611}
                          height={58}
                          alt=""
                        />
                      </h2>
                      <p>
                        <Image
                          src={`/sections/3/cards/${item}/text-description.svg`}
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
                  />
                </>
              ) : (
                <>
                  <Image
                    src={`/sections/3/cards/${item}/image.png`}
                    width={650}
                    height={388}
                    alt=""
                  />

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/sections/3/cards/${item}/icon.svg`}
                        width={43}
                        height={43}
                        alt=""
                      />
                      <Image
                        src={`/sections/3/cards/${item}/icon-headline.svg`}
                        width={291}
                        height={43}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2>
                        <Image
                          src={`/sections/3/cards/${item}/text-headline.svg`}
                          width={611}
                          height={58}
                          alt=""
                        />
                      </h2>
                      <p>
                        <Image
                          src={`/sections/3/cards/${item}/text-description.svg`}
                          width={611}
                          height={58}
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
