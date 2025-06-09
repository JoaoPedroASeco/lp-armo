import { Header } from "@/components/header";
import { Footer } from "@/components/screens/footer";
import { Section1 } from "@/components/screens/section-1";
import { Section2 } from "@/components/screens/section-2";
import { Section3 } from "@/components/screens/section-3";
import { Section4 } from "@/components/screens/section-4";
import { Section5 } from "@/components/screens/section-5";
import { Section6 } from "@/components/screens/section-6";
import { mocks } from "@/mocks";

export default function Home() {
  const {
    header: {},
  } = mocks;

  return (
    <main className="flex flex-col w-screen max-w-screen h-fit min-h-screen bg-[#CBCDF6] overflow-x-hidden">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </main>
  );
}
