import MultipleHero from "@/components/custom/Hero/MultipleHero";
import { homeBannersLink } from "@/constants/homeBannersLink";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      <MultipleHero url={homeBannersLink} maxHeight={600} />
    </section>
  );
}
