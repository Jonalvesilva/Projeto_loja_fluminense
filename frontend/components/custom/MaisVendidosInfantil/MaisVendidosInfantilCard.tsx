import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";

export default function MaisVendidosInfantilCard({ item }: { item: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const allSlides = document.querySelectorAll(
      ".maisVendidosFemininoCard-content",
    );
    let max = 0;

    allSlides.forEach((el) => {
      const height = (el as HTMLDivElement).offsetHeight;
      if (height > max) max = height;
    });

    setMaxHeight(max);
  }, []);

  return (
    <div className="maisVendidosInfantilCard">
      <div className="maisVendidosInfantilCard__maisVendidosInfantilWrapperImage">
        {item.discount && (
          <span className="maisVendidosInfantilWrapperImage__text">
            {item.discount}
          </span>
        )}
        <img src={item.src} className="maisVendidosInfantilWrapperImage__img" />
      </div>
      <div
        ref={ref}
        className="maisVendidosInfantilCard__maisVendidosInfantilCardContent maisVendidosInfantilCard-content"
        style={{ height: maxHeight }}
      >
        <p className="maisVendidosInfantilCardContent__title">{item.name}</p>

        <div className="maisVendidosInfantilCardContent__maisVendidosInfantilCardSubContent">
          <div className="flex gap-x-2">
            <p className="relative top-1 text-sm text-gray-500 line-through">
              {item.oldPrice}
            </p>
            <p className="maisVendidosInfantilCardSubContent__price">
              {item.newPrice}
            </p>
          </div>
          <p className="maisVendidosInfantilCardSubContent__parcel">
            {item.parcel}
          </p>
          <Button
            variant="outline"
            className="maisVendidosInfantilCardSubContent__btn"
          >
            Comprar
            <FaPlus className="maisVendidosInfantilCardSubContent__plusIcon" />
          </Button>
        </div>
      </div>
    </div>
  );
}
