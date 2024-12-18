import { NEW_PRODUCTS, POPULAR_PRODUCTS } from "@/DUMMY_DATA";
import { Product as ProductProps } from "@/types/product";
import Gallery from "./components/gallery";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  const allProducts: ProductProps[] = [...NEW_PRODUCTS, ...POPULAR_PRODUCTS];

  const currentProduct = allProducts.find((p) => p.id === productId);

  if (!currentProduct) {
    return <p>Product not found</p>;
  }
  return (
    <main>
      <Gallery
        images={[
          currentProduct.image,
          currentProduct.image,
          currentProduct.image,
        ]}
      />
    </main>
  );
}
