import React from "react";

type ListProps<T> = {
  title: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function ProductsList<T>({
  title,
  data,
  renderItem,
}: ListProps<T>) {
  return (
    <section className="w-82 mx-auto pt-10">
      <h2 className="mx-auto text-center text-4xl font-bold pb-4">{title}</h2>
      <div className="flex gap-x-5 gap-y-3 flex-1-1-160 flex-wrap">
        {data.map((p) => renderItem(p))}
      </div>
    </section>
  );
}
