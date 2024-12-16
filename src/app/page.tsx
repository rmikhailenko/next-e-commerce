import CategoriesList from "@/components/categories/categories-list";
import MainSection from "@/components/main-section";
import PopularProductsList from "@/components/popular-products/popular-products-list";

export default function Home() {
  return (
    <main>
      <MainSection />
      <CategoriesList />
      <PopularProductsList />
    </main>
  );
}
