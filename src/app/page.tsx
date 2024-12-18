import CategoriesList from "@/components/categories/categories-list";
import MainSection from "@/components/main-section";
import Product from "@/components/products-list/product";
import ProductsList from "@/components/products-list/products-list";
import { NEW_PRODUCTS } from "@/DUMMY_DATA";
import prisma from "@/lib/prisma";
import { Product as ProductProps } from "@/types/product";

export default async function Home() {
  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <main>
      <MainSection />
      <CategoriesList />
      <ProductsList
        renderItem={(POPULAR_PRODUCTS: ProductProps) => (
          <Product key={POPULAR_PRODUCTS.title} {...POPULAR_PRODUCTS} />
        )}
        data={products}
        title="Popular Products"
      />
      <ProductsList<ProductProps>
        renderItem={(NEW_PRODUCTS: ProductProps) => (
          <Product key={NEW_PRODUCTS.title} {...NEW_PRODUCTS} />
        )}
        data={NEW_PRODUCTS}
        title="New Products"
      />
    </main>
  );
}
