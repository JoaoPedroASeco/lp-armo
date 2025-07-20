import React, { JSX } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import Image from "next/image";

export const Header = (): JSX.Element => {
  const navItems = [
    { label: "Sobre", active: false, href: "#about" },
    { label: "Nossos Serviços", active: false, href: "#our-services" },
    { label: "Contato", active: false, href: "#contact" },
    { label: "Resultado", active: false, href: "#results" },
  ];

  return (
    <header
      className="flex justify-center items-center relative h-[90px] max-[441px]:h-[56px] w-full max-w-[100vw] min-w-[100vw] overflow-hidden bg-[#333693cc] max-[441px]:bg-[#333693] border-b border-real-impact300"
      data-model-id="1:730"
    >
      <div className="w-full max-w-[68.8%] max-[1024px]:max-w-[90%] flex h-full items-center justify-between ">
        {/* Logo */}
        <Image
          alt="Logo ARMO PNG RGB"
          src="/logos/armo-logo.svg"
          width={225}
          height={38}
          className="max-w-[225px] max-[769px]:max-w-[130px] min-w-[10vw]"
        />

        {/* Navigation */}
        <NavigationMenu className="flex min-w-[50%] max-w-[50%] w-full px-5 max-[1024px]:hidden">
          {navItems.map((item, index) => (
            <NavigationMenuItem
              key={index}
              className="flex justify-center list-none w-full"
            >
              <NavigationMenuLink
                href={item.href}
                className={`text-lg tracking-[1.00px] leading-8 whitespace-nowrap  ${
                  item.active
                    ? "[font-family:'Helvetica_Now_Display-Bold',Helvetica] font-bold text-[#F8F8F8] underline"
                    : "[font-family:'Helvetica_Now_Display-Medium',Helvetica] font-medium text-[#F8F8F8]"
                }`}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>

        {/* Contact Button */}
        <button className="flex justify-center items-center px-[3%] bg-[#F8F8F8] h-[43px] max-[769px]:h-[32px] rounded-[8px] ">
          <Image
            alt="Logo ARMO PNG RGB"
            src="/sections/header/cta-text.svg"
            width={225}
            height={38}
            className="max-w-[225px] max-[769px]:max-w-[130px] min-w-[10vw]"
          />
        </button>
      </div>
    </header>
  );
};
