import { ProductCategory as Props } from "@/types/product-category";
import Image from "next/image";
import Link from "next/link";

export default function Category({ title, image, category }: Props) {
  return (
    <Link href={`/category/${category}`}>
      <article className="relative flex rounded">
        <Image
          className="rounded"
          src={image}
          height={400}
          width={400}
          alt={`category ${title}`}
        />
        <h4 className=" rounded absolute bottom-7 right-2/4 translate-x-1/2 text-black bg-white p-3 w-[300px] text-center">
          {title}
        </h4>
      </article>
    </Link>
  );
}
