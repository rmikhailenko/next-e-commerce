import Link from "next/link";

export default function MainSection() {
  return (
    <section className="h-[400px]">
      <h1 className="uppercase font-bold text-5xl my-16 mx-36">
        Instyle clothing company
      </h1>

      <div className="my-16 mx-36 max-w-72 flex justify-between">
        <Link
          href="/new"
          className="text-white bg-black w-32 py-1 text-center rounded-md"
        >
          New Collection
        </Link>
        <Link
          href="/popular"
          className="text-white bg-black w-32 py-1 text-center rounded-md"
        >
          Popular
        </Link>
      </div>
    </section>
  );
}
