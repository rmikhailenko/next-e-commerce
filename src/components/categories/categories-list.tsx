import { CATEGORIES } from "@/DUMMY_DATA";
import Category from "./category";

export default function CategoriesList() {
  return (
    <section className="flex items-center flex-col w-82 mx-auto">
      <h2 className="text-4xl font-bold pb-4">Popular Categories</h2>
      <div className="flex gap-3 flex-1-1-160 flex-wrap">
        {CATEGORIES.map((c) => (
          <Category key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
