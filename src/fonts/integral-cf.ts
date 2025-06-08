import localFont from "next/font/local";

const integralCF = localFont({
  src: [
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-boldoblique.otf",
      weight: "700",
      style: "oblique",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-demiboldoblique.otf",
      weight: "600",
      style: "oblique",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-extraboldoblique.otf",
      weight: "800",
      style: "oblique",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-heavy.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-heavyoblique.otf",
      weight: "900",
      style: "oblique",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-mediumoblique.otf",
      weight: "500",
      style: "oblique",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./files/integral-cf/Fontspring-DEMO-integralcf-regularoblique.otf",
      weight: "400",
      style: "oblique",
    },
  ],
  variable: "--font-integral-cf",
  display: "swap",
});

export default integralCF;