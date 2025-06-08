import Image from "next/image";

export const Footer = () => {
  return (
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
  );
};
