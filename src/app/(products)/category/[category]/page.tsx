// import Product from "@/components/products-list/product";
// import ProductsList from "@/components/products-list/products-list";
import { NEW_PRODUCTS, POPULAR_PRODUCTS } from "@/DUMMY_DATA";
import { Product as ProductProps } from "@/types/product";

import ProductGrid from "../../components/product-grid";

export default async function Category({}: // params,
{
  params: Promise<{ category: string }>;
}) {
  // const slug = (await params).category;

  // const filterProductsByCategory = () => {
  //   const newProducts = NEW_PRODUCTS.filter((p) => p.category === slug);
  //   const popularProducts = POPULAR_PRODUCTS.filter((p) => p.category === slug);

  //   return [...newProducts, ...popularProducts];
  // };

  const getAllProducts: ProductProps[] = [...NEW_PRODUCTS, ...POPULAR_PRODUCTS];

  // const products: ProductProps[] = filterProductsByCategory();
  // console.log(products);

  return (
    <main>
      <section>
        <span>Sorting</span>
      </section>
      <ProductGrid data={getAllProducts} />
    </main>
  );
}
