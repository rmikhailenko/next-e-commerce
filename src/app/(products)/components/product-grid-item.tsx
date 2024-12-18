import Image from "next/image";
import { Product as ProductProps } from "@/types/product";

export default function ProductGridItem({ image, price, title }: ProductProps) {
  return (
    <article>
      <Image src={image} alt={`product ${title}`} height={250} width={300} />
      <h2>{title}</h2>
      <span>{price}</span>
    </article>
  );
}
