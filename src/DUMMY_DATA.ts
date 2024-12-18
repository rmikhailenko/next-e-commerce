import { ProductCategory } from "./types/product-category";
import { Product } from "./types/product";
import { v4 as uuidv4 } from "uuid";
console.log(uuidv4);

export const CATEGORIES: ProductCategory[] = [
  {
    image: "https://dummyimage.com/600x600/c7afc7/c6c6de",
    title: "Hoodie",
    category: "hoodie",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/600x600/c7afc7/c6c6de",
    title: "Zips",
    category: "hoodie",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/600x600/c7afc7/c6c6de",
    title: "T-Shirt",
    category: "t-shirt",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/600x600/c7afc7/c6c6de",
    title: "Long-Sleeved",
    category: "long-sleeved",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/600x600/c7afc7/c6c6de",
    title: "Women's Trousers",
    category: "womans-trousers",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/600x600/c7afc7/c6c6de",
    title: "Man's Trousers",
    category: "mans-trousers",
    id: uuidv4().toString(),
  },
];

export const POPULAR_PRODUCTS: Product[] = [
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 100",
    title: "Hoodie Black",
    category: "hoodie",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "T-Shirt Black",
    category: "t-shirt",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Long-Sleeved Black",
    category: "long-sleeved",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Unisex Trousers Black",
    category: "unisex-trousers",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Men's Trousers Black",
    category: "mans-trousers",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Women's Black",
    category: "womans-trousers",
    id: uuidv4().toString(),
  },
];

export const NEW_PRODUCTS: Product[] = [
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 100",
    title: "Hoodie Black",
    category: "hoodie",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "T-Shirt Black",
    category: "t-shirt",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Long-Sleeved Black",
    category: "long-sleeved",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Unisex Trousers Black",
    category: "unisex-trousers",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Men's Trousers Black",
    category: "mans-trousers",
    id: uuidv4().toString(),
  },
  {
    image: "https://dummyimage.com/250x300/000/fff",
    price: "$ 50",
    title: "Women's Black",
    category: "womans-trousers",
    id: uuidv4().toString(),
  },
];
