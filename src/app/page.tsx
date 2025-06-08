import { Header } from "@/components/header";
import { Section1 } from "@/components/screens/section-1";
import { Section2 } from "@/components/screens/section-2";
import { mocks } from "@/mocks";
import Image from "next/image";

export default function Home() {
  const {
    header: {},
  } = mocks;

  return (
    <main className="flex flex-col w-screen max-w-screen h-fit min-h-screen bg-[#CBCDF6] overflow-x-hidden">
      <Header />
      <Section1 />
      <Section2 />

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
      <section className="flex flex-col w-full h-fit min-h-[947px] justify-center items-center relative">
        <div className="flex flex-col justify-center items-center absolute z-1 w-full h-full max-w-[68.80%] mx-auto">
          <Image
            src={"/sections/4/form-headline.svg"}
            width={562}
            height={144}
            alt=""
            quality={100}
            className=""
          />

          <form className="flex flex-col max-w-[563px] min-w-[563px] bg-[#6064C9] p-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <input type="text" key={item} />
            ))}

            <button type="submit">
              <Image
                src={"/sections/4/form-buttom-text.svg"}
                width={238}
                height={14}
                alt=""
              />
            </button>
          </form>
        </div>
      </section>
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
      <footer className="flex w-full h-fit min-h-[431px] bg-[#333693]">
        <div className="flex flex-col justify-center items-center z-1 w-full h-full max-w-[68.80%] mx-auto">
          <div className="flex w-full h-fit justify-between mt-[84px] mb-[71px]">
            <Image
              src={"/logos/armo-short-logo.svg"}
              width={92}
              height={92}
              alt="Armo Logo"
            />

            <div className="flex flex-col gap-4">
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
              />
              <Image
                src={"/sections/footer/help-value-text.svg"}
                width={320}
                height={14}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-4">
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
              />
              <Image
                src={"/sections/footer/phone-value-text.svg"}
                width={137}
                height={14}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-4">
              <Image
                src={"/sections/footer/email-icon.svg"}
                width={40}
                height={40}
                alt=""
              />
              <Image
                src={"/sections/footer/email-label-text.svg"}
                width={90}
                height={14}
                alt=""
              />
              <Image
                src={"/sections/footer/email-value-text.svg"}
                width={216}
                height={14}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full p-7 bg-[#CBCDF6] rounded-[24px]">
            <strong>
              <Image
                src={"/sections/footer/rights-text.svg"}
                width={516}
                height={13}
                alt=""
              />
            </strong>

            <div className="flex items-center gap-3">
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
    </main>
  );
}
