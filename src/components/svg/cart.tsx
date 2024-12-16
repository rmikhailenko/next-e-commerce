export default function CartIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000000"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="miter"
    >
      <polyline
        points="2 3 5 3 8.5 16 18 16 21 7 6.1 7"
        strokeLinecap="round"
      ></polyline>
      <line
        x1="9.99"
        y1="20"
        x2="10.01"
        y2="20"
        strokeLinecap="round"
        strokeWidth="2"
      ></line>
      <line
        x1="15.99"
        y1="20"
        x2="16.01"
        y2="20"
        strokeLinecap="round"
        strokeWidth="2"
      ></line>
    </svg>
  );
}
