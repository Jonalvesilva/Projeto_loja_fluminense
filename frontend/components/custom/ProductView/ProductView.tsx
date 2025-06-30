"use client";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

interface Product {
  product: ProductItem;
}
interface ProductItem {
  name?: string;
  src?: string;
  oldPrice?: string;
  newPrice?: string;
  price?: string;
  parcel?: string;
  discount?: string;
}

export default function ProductView({ product }: Product) {
  const { name, src, oldPrice, newPrice, price, parcel, discount } = product;
  const size = ["PP", "P", "M", "G", "GG", "XG"];

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="mx-auto grid h-full max-w-screen-lg px-4 py-16 md:grid-cols-2">
      <div className="max-h-[500px] shadow-lg shadow-neutral-200">
        <img src={src} alt="Product" className="h-full w-full" />
      </div>
      <div className="max-h-[500px] w-full pt-6 md:pl-6 md:pt-0">
        <h2 className="mb-2 text-3xl font-bold">{name}</h2>

        <div className="flex items-center gap-x-2">
          {oldPrice && (
            <span className="text-gray-500 line-through">{oldPrice}</span>
          )}
          <span className="mr-2 text-2xl font-bold text-green-600">
            {price || newPrice}
          </span>
        </div>

        {parcel && (
          <div className="my-2">
            <span className="text-lg text-gray-500">{parcel}</span>
          </div>
        )}

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">Tamanhos</h3>
          <div className="flex space-x-2">
            {size.map((str: string) => (
              <button
                key={`size_${str}`}
                className="h-8 w-8 cursor-pointer rounded-sm bg-white ring-2 ring-gray-200/65 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                {str}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Quantidade:
          </label>
          <div className="flex items-center gap-x-2">
            <input
              type="text"
              min={1}
              max={10}
              value={quantity}
              disabled
              className="h-8 w-12 rounded-md border border-gray-300 text-center shadow-sm"
            />
            <FaMinusSquare
              size={22}
              className="cursor-pointer text-slate-900"
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
            />
            <FaPlusSquare
              size={22}
              className="cursor-pointer text-slate-900"
              onClick={() => {
                if (quantity < 10) setQuantity(quantity + 1);
              }}
            />
          </div>
        </div>

        <div className="mb-6 flex space-x-4">
          <button className="bg-green md:text-md flex h-10 w-fit cursor-pointer items-center gap-2 rounded-md px-2 text-sm text-white">
            <IoCart />
            Adicionar ao Carrinho
          </button>
          <button className="bg-maroon md:text-md flex h-10 w-fit cursor-pointer items-center gap-2 rounded-md px-2 text-sm text-white">
            <IoStarSharp />
            Lista de Desejos
          </button>
        </div>
      </div>
    </div>
  );
}
