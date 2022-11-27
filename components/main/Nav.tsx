import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex sm:justify-between flex-col sm:flex-row items-center">
      <div className="border-2 border-white p-1">
        <h1 className="uppercase text-lg tracking-wider">
          Constantin Carstens
        </h1>
      </div>

      <ul className="flex mt-5 sm:mt-0">
        <li className="mr-4">
          <Link href="#bio">Bio</Link>
        </li>
        <li className="mr-4">
          <Link href="#work">Work</Link>
        </li>
        <li className="mr-4">
          <Link href="#contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/heduda">HeDuDa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
