import Product from "@/components/products-list/product";
import { Product as ProductProps } from "@/types/product";
import Link from "next/link";

type Props = {
  data: ProductProps[];
};

export default function ProductGrid({ data }: Props) {
  return (
    <section className="w-82 mx-auto grid grid-cols-4 gap-4">
      {data.map((p) => (
        <Link key={p.id} href={`/product/${p.id}`}>
          <Product {...p} />
        </Link>
      ))}
    </section>
  );
}
