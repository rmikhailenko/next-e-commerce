type Category =
  | "hoodie"
  | "t-shirt"
  | "unisex-trousers"
  | "long-sleeved"
  | "mans-trousers"
  | "womans-trousers";

export type Product = {
  image: string;
  title: string;
  price: string;
  category: Category;
};
