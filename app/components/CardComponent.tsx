import React from "react";
import Image from "next/image";
import { Product } from "../utils/interface";

interface CardComponentProps {
  product: Product;
}

const CardComponent = ({ product }: CardComponentProps) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700">
      <a className="flex justify-center items-center " href="#">
        <Image
          className="p-8"
          src={product.imageUrl}
          alt={product.title}
          width={300}
          height={300}
          style={{
            objectFit: "cover",
            borderRadius: "50px",
          }}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        {product?.tags?.map((tag) => (
          <div
            key={tag._id}
            className="flex items-center mt-2.5 mb-5 text-orange-500"
          >
            <span className="text-xs font-semibold">{tag.name}</span>
          </div>
        ))}

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {product.price.toLocaleString()} VNĐ
          </span>
          <a
            href="https://zalo.me/0888393339"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-50 dark:text-amber-950 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Liên hệ
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
