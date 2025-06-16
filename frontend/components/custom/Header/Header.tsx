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
    <header className="header">
      <div className="header__topDiv">
        <IoMdAirplane size={20} className="text-white" />
        <span className="topDiv__span">
          FRETE GRÁTIS PARA TODO O BRASIL NAS COMPRAS ACIMA DE R$ 499,99
        </span>
        <IoMdAirplane size={20} className="text-white" />
      </div>
      <div className="header__bottomDiv">
        <nav className="bottomDiv__nav">
          <img src="logo.png" className="w-[145px]" />
          <LinksCardsMenu />
          <ProfileButtons search={{ setShowSearchDiv, showSearchDiv }} />
          <MobileMenu />
        </nav>
      </div>

      {renderSearchDiv && (
        <div
          ref={searchRef}
          className={`header__divSearch animate__animated ${
            showSearchDiv ? "animate__fadeIn" : "animate__fadeOut"
          }`}
        >
          <div className="divSearch__div">
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
