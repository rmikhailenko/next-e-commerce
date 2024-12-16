import { Category as Props } from "@/types/category";
import Image from "next/image";

export default function Category({ title, image }: Props) {
  return (
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
  );
}
