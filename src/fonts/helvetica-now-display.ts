import localFont from "next/font/local";

const helvetica_now_display = localFont({
  src: [
    {
      path: "./files/helvetica-now-display/HelveticaNowDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./files/helvetica-now-display/HelveticaNowDisplay-Medium.ttf",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--helvetica-now-display",
});

export default helvetica_now_display;
