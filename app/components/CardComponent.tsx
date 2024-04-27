import React from "react";
import Image from "next/image";
import { Product } from "../utils/interface";

interface CardComponentProps {
  product: Product;
}

const CardComponent = ({ product }: CardComponentProps) => {
  return (
    <div className="card">
      <Image
        width={300}
        height={300}
        src={product.imageUrl}
        alt={product.title}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-description">{product.excerpt}</p>
        <p className="card-price">${product.price}</p>
      </div>
    </div>
  );
};

export default CardComponent;
