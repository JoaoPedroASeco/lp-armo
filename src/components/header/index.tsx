import React, { JSX } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import Image from "next/image";

export const Header = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "Sobre", active: true },
    { label: "Nossos Serviços", active: false },
    { label: "Contato", active: false },
    { label: "Resultado", active: false },
  ];

  return (
    <header
      className="flex justify-center items-center relative h-[90px] w-full max-w-[100vw] min-w-[100vw] overflow-hidden bg-[#333693cc] border-b border-real-impact300"
      data-model-id="1:730"
    >
      <div className="w-full max-w-[90%] flex h-full items-center justify-between ">
        {/* Logo */}
        <Image
          alt="Logo ARMO PNG RGB"
          src="/logos/armo-logo.svg"
          width={225}
          height={38}
          className="min-w-[225px]"
        />

        {/* Navigation */}
        <NavigationMenu className="flex min-w-[50%] max-w-[50%] w-full px-5 max-[1024px]:hidden">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index} className="list-none w-full">
              <NavigationMenuLink
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
        <Button
          variant={"default"}
          className="h-auto rounded-lg px-6 py-4 [font-family:'Integral_CF-DemiBold',Helvetica] font-bold text-base tracking-[0px] text-[#313372] uppercase"
        >
          Entrar em contato
        </Button>
      </div>
    </header>
  );
};
