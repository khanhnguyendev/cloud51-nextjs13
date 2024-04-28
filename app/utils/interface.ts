export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  excerpt: string;
  description: any;
  imageUrl: string;
  tags: Array<Tag>;
  vendors: Array<Vendor>;
}

export interface Tag {
  _id: string;
  name: string;
  slug: { current: string };
}

export interface Vendor {
  _id: string;
  name: string;
  slug: { current: string };
}
