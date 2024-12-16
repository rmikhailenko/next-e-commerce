import CartIcon from "./svg/cart";

export default function CartWithCounter({ count }: { count: number }) {
  return (
    <div className="relative">
      <CartIcon />
      <span className="text-white bg-black rounded-[12px] absolute h-4 w-4 text-center text-[10px] top-0 right-0">
        {count}
      </span>
    </div>
  );
}
