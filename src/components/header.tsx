import Link from "next/link";
import MenuIcon from "./svg/menu";
import SearchIcon from "./svg/search";
import CartWithCounter from "./cart-with-counter";

export default function Header() {
  return (
    <header className="py-8 flex justify-center">
      <div className="flex items-center justify-between w-82 px-3">
        <div className="w-44 flex items-center">
          <MenuIcon />
          <Link href="/" className="text-2xl font-bold px-4">
            InStyle
          </Link>
        </div>
        <div className="flex items-center w-14 justify-between">
          <SearchIcon />
          <CartWithCounter count={1} />
        </div>
      </div>
    </header>
  );
}
