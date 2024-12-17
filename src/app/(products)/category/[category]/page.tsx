import { NEW_PRODUCTS, POPULAR_PRODUCTS } from "@/DUMMY_DATA";
import { Product } from "@/types/product";

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const slug = (await params).category;

  const filterProductsByCategory = () => {
    const newProducts = NEW_PRODUCTS.filter((p) => p.category === slug);
    const popularProducts = POPULAR_PRODUCTS.filter((p) => p.category === slug);

    return [...newProducts, ...popularProducts];
  };

  const products: Product[] = filterProductsByCategory();

  return (
    <div>
      {products.map((p) => (
        <p key={p.id}>{p.id}</p>
      ))}
    </div>
  );
}
