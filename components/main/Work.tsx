import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "data";

const Work = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      id="work"
      className="relative sm:p-20 p-10 break-words text-center"
      onMouseOut={() => setHovered(null)}
    >
      <h1 className="text-6xl mb-8">WORK</h1>
      <div className="text-5xl">
        {data.work.map((work, i) => (
          <div key={i}>
            <div className="p-2">
              <Link
                href={work.href}
                target="_blank"
                onMouseOver={() => setHovered(work.id)}
              >
                {work.text}
              </Link>
              <Image
                className={`z-10 w-40 absolute ${
                  hovered !== work.id && "hidden"
                }`}
                src={work.imgSrc}
                alt={work.imgAlt}
                width={100}
                height={100}
              />
            </div>
            {i < data.work.length - 1 && <span>·</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
