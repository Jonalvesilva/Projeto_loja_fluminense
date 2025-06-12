import { IoMdAirplane } from "react-icons/io";
import ProfileButtons from "./ProfileButtons";
import MobileMenu from "./MobileMenu";
import LinksCardsMenu from "./LinksCardsMenu";

export default function Header() {
  return (
    <header className="h-26 w-full fixed">
      <div className="bg-maroon h-[45%] flex items-center justify-center gap-x-3 px-2">
        <IoMdAirplane size={20} className="text-white" />
        <span className="text-xs text-white text-center font-semibold">
          FRETE GRÁTIS PARA TODO O BRASIL NAS COMPRAS ACIMA DE R$ 499,99
        </span>
        <IoMdAirplane size={20} className="text-white" />
      </div>
      <div className="bg-green h-[55%] border border-white">
        <nav className="w-full h-full flex items-center justify-between max-w-screen-xl mx-auto px-12 lg:px-6">
          <img src="logo.png" className="w-[145px]" />
          <LinksCardsMenu />
          <ProfileButtons />
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
