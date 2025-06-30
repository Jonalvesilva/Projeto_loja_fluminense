"use client";
import ProductView from "@/components/custom/ProductView/ProductView";
import { useParams } from "next/navigation";
import { products } from "@/constants/productsImgLink";

export default function ProductIdPage() {
  const id = useParams().productId;
  const product = products.filter((item: any) => item.id == id)[0];
  return product ? (
    <ProductView product={product} />
  ) : (
    <div className="flex h-[300px] items-center justify-center text-2xl font-semibold">
      Produto Indisponível
    </div>
  );
}
