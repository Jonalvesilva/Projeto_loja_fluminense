import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";

export default function MaisVendidosFemininoCard({ item }: { item: any }) {
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
    <div className="maisVendidosFemininoCard">
      <div className="maisVendidosFemininoCard__maisVendidosFemininoWrapperImage">
        {item.discount && (
          <span className="maisVendidosFemininoWrapperImage__text">
            {item.discount}
          </span>
        )}
        <img src={item.src} className="maisVendidosFemininoWrapperImage__img" />
      </div>
      <div
        ref={ref}
        className="maisVendidosFemininoCard__maisVendidosFemininoCardContent maisVendidosFemininoCard-content"
        style={{ height: maxHeight }}
      >
        <p className="maisVendidosFemininoCardContent__title">{item.name}</p>

        <div className="maisVendidosFemininoCardContent__maisVendidosFemininoCardSubContent">
          <div className="flex gap-x-2">
            <p className="relative top-1 text-sm text-gray-500 line-through">
              {item.oldPrice}
            </p>
            <p className="maisVendidosFemininoCardSubContent__price">
              {item.newPrice}
            </p>
          </div>
          <p className="maisVendidosFemininoCardSubContent__parcel">
            {item.parcel}
          </p>
          <Button
            variant="outline"
            className="maisVendidosFemininoCardSubContent__btn"
          >
            Comprar
            <FaPlus className="maisVendidosFemininoCardSubContent__plusIcon" />
          </Button>
        </div>
      </div>
    </div>
  );
}
