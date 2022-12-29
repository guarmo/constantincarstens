import Link from "next/link";
import data from "data";

const Nav = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        {data.heduda.links.map((link, i) => (
          <Link
            className="w-full h-full"
            key={i}
            href={link.href}
            target="_blank"
          >
            <img src={link.imgSrc} alt={link.imgAlt} className="min-w-full h-[370px] sm:h-[300px]" />
            <h3>{link.text}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
