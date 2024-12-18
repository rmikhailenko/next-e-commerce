"use client";
import { NEW_PRODUCTS } from "@/DUMMY_DATA";
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(NEW_PRODUCTS[0].id);
  return (
    <section>
      <div className="rounded">
        {NEW_PRODUCTS.map((i) => (
          <Image
            className="m-2 rounded"
            key={i.id}
            src={i.image}
            alt="Product image"
            height={400}
            width={200}
          />
        ))}
      </div>
    </section>
  );
}
