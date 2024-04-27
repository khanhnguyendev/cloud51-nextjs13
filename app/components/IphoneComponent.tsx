import { client } from "@/sanity/lib/client";
import { Product } from "../utils/interface";
import CardComponent from "./CardComponent";

async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    slug,
    serial,
    price,
    "imageUrl": image.asset->url,
    tags[]->{
      _id, 
      name, 
      slug
    },
    vendor[]->{
      _id, 
      name, 
      slug
    }
  }`;
  return await client.fetch(query);
}

export default async function IphoneComponent() {
  const products: Product[] = await getProducts();
  console.log(products);

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <CardComponent product={product} key={product._id} />
      ))}
    </div>
  );
}
