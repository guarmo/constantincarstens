import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-baseline justify-between">
      <h1 className="text-6xl">HeDuDa</h1>
      <Link href="/">
        <h1 className="text-lg uppercase">Back</h1>
      </Link>
    </div>
  );
};

export default Nav;
