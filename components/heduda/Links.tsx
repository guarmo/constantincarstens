import Link from "next/link";
import data from "data";

const Nav = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-8">
        {data.heduda.links.map((link, i) => (
          <Link key={i} href={link.href} target="_blank">
            <img src={link.imgSrc} alt={link.imgAlt} />
            <h3>{link.text}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
