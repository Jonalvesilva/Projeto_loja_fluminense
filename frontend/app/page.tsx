import Buscados from "@/components/custom/Buscados/Buscados";
import Hero from "@/components/custom/Hero/Hero";
import MultipleHero from "@/components/custom/Hero/MultipleHero";
import Lancamentos from "@/components/custom/Lancamentos/Lancamentos";
import MaisVendidosFeminino from "@/components/custom/MaisVendidosFeminino/MaisVendidosFeminino";
import MaisVendidosInfantil from "@/components/custom/MaisVendidosInfantil/MaisVendidosInfantil";
import Outlet from "@/components/custom/Outlet/Outlet";
import WhatsappBottomButton from "@/components/custom/WhatsappBottomButton/WhatsappBottomButton";
import { homeBannersLink } from "@/constants/homeBannersLink";

export default function Home() {
  return (
    <section className="flex flex-col">
      <MultipleHero url={homeBannersLink} maxHeight={600} />
      <Buscados />
      <Lancamentos />
      <Outlet />
      <Hero
        height={600}
        url="./hero/flu-caderno-banner-desktop.png"
        className="my-6"
      />
      <MaisVendidosFeminino />
      <MaisVendidosInfantil />
      <WhatsappBottomButton />
    </section>
  );
}
