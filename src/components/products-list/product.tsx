import { Product as Props } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function Product({ image, price, title, id }: Props) {
  console.log(id);

  return (
    <Link href={`/product/${id}`}>
      <Image
        className="rounded"
        src={image}
        height={250}
        width={350}
        alt={`Product ${title}`}
      />
      <h3 className="text-center pt-3 font-medium">{title}</h3>
      <h4 className="text-center pt-1 font-medium">{price}</h4>
    </Link>
  );
}
