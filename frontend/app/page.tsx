import Buscados from "@/components/custom/Buscados/Buscados";
import MultipleHero from "@/components/custom/Hero/MultipleHero";
import Lancamentos from "@/components/custom/Lancamentos/Lancamentos";
import { homeBannersLink } from "@/constants/homeBannersLink";

export default function Home() {
  return (
    <section className="flex flex-col">
      <MultipleHero url={homeBannersLink} maxHeight={600} />
      <Buscados />
      <Lancamentos />
    </section>
  );
}
