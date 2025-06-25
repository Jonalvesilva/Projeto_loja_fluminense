import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function OutletCard({ item }: { item: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const allSlides = document.querySelectorAll(".outletCard-content");
    let max = 0;

    allSlides.forEach((el) => {
      const height = (el as HTMLDivElement).offsetHeight;
      if (height > max) max = height;
    });

    setMaxHeight(max);
  }, []);

  return (
    <div className="outletCard">
      <div className="outletCard__outletWrapperImage">
        <span className="outletWrapperImage__text">{item.discount}</span>
        <img src={item.src} className="outletWrapperImage__img" />
      </div>
      <div
        ref={ref}
        className="outletCard__outletCardContent outletCard-content"
        style={{ height: maxHeight }}
      >
        <p className="outletCardContent__title">{item.name}</p>

        <div className="outletCardContent__outletCardSubContent">
          <div className="flex gap-x-2">
            <p className="relative top-1 text-sm text-gray-500 line-through">
              {item.oldPrice}
            </p>
            <p className="outletCardSubContent__price">{item.newPrice}</p>
          </div>
          <p className="outletCardSubContent__parcel">{item.parcel}</p>
          <Link href={`/${item.id}`} className="w-full">
            <Button variant="outline" className="outletCardSubContent__btn">
              Comprar
              <FaPlus className="outletCardSubContent__plusIcon" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
