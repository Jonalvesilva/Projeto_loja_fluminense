import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function LancamentosCard({ item }: { item: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const allSlides = document.querySelectorAll(".lancamentoCard-content");
    let max = 0;

    allSlides.forEach((el) => {
      const height = (el as HTMLDivElement).offsetHeight;
      if (height > max) max = height;
    });

    setMaxHeight(max);
  }, []);

  return (
    <div className="lancamentoCard">
      <img src={item.src} className="object-contain" />

      <div
        ref={ref}
        className="lancamentoCard__lancamentoCardContent lancamentoCard-content"
        style={{ height: maxHeight }}
      >
        <p className="lancamentoCardContent__title">{item.name}</p>

        <div className="lancamentoCardContent__lancamentoCardSubContent">
          <p className="lancamentoCardSubContent__price">{item.price}</p>
          <p className="lancamentoCardSubContent__parcel">{item.parcel}</p>
          <Link href={`/${item.id}`} className="w-full">
            <Button variant="outline" className="lancamentoCardSubContent__btn">
              Comprar
              <FaPlus className="lancamentoCardSubContent__plusIcon" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
