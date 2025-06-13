"use client";
import { IoMdAirplane } from "react-icons/io";
import ProfileButtons from "./ProfileButtons";
import MobileMenu from "./MobileMenu";
import LinksCardsMenu from "./LinksCardsMenu";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "animate.css";

export default function Header() {
  const [showSearchDiv, setShowSearchDiv] = useState(false);
  const [renderSearchDiv, setRenderSearchDiv] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showSearchDiv) {
      setRenderSearchDiv(true);
    } else {
      const timeout = setTimeout(() => setRenderSearchDiv(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [showSearchDiv]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearchDiv(false);
      }
    }

    if (renderSearchDiv) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [renderSearchDiv]);

  return (
    <header className="h-26 fixed w-full">
      <div className="bg-maroon flex h-[45%] items-center justify-center gap-x-3 px-2">
        <IoMdAirplane size={20} className="text-white" />
        <span className="text-center text-xs font-semibold text-white">
          FRETE GRÁTIS PARA TODO O BRASIL NAS COMPRAS ACIMA DE R$ 499,99
        </span>
        <IoMdAirplane size={20} className="text-white" />
      </div>
      <div className="bg-green h-[55%] border border-white">
        <nav className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between px-12 lg:px-6">
          <img src="logo.png" className="w-[145px]" />
          <LinksCardsMenu />
          <ProfileButtons search={{ setShowSearchDiv, showSearchDiv }} />
          <MobileMenu />
        </nav>
      </div>

      {renderSearchDiv && (
        <div
          ref={searchRef}
          className={`animate__animated flex h-14 items-center border-b border-gray-300 shadow-sm shadow-neutral-300 ${
            showSearchDiv ? "animate__fadeIn" : "animate__fadeOut"
          }`}
        >
          <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between gap-x-12">
            <Input
              className="!border-gray-400/70"
              placeholder="Digite aqui o que deseja buscar"
            />
            <Button className="bg-green hover:bg-green cursor-pointer">
              Buscar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
