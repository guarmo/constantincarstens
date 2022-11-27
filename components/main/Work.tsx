import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        {/* Saving Serafino */}
        <div className="p-2">
          <Link
            href="https://www.youtube.com/watch?v=SIy2SaTYx3Q"
            target="_blank"
            onMouseOver={() => setHovered("SavingSerafino")}
          >
            Saving Serafino - Gin Tonic
          </Link>
          <Image
            className={`z-10 w-40 absolute ${
              hovered !== "SavingSerafino" && "hidden"
            }`}
            src="/SavingSerafino.png"
            alt="Saving serafino"
            width={100}
            height={100}
          />
        </div>{" "}
        · {/* Leer */}
        <div className="p-2">
          <Link
            href="https://www.youtube.com/watch?v=3i-NmcDiNBI"
            target="_blank"
            onMouseOver={() => setHovered("Leer")}
          >
            Churn Out Clique - Leer
          </Link>
          <Image
            className={`z-10 w-40 absolute ${hovered !== "Leer" && "hidden"}`}
            src="/Leer.png"
            alt="Leer"
            width={100}
            height={100}
          />
        </div>{" "}
        · {/* Floatin */}
        <div className="p-2">
          <Link
            href="https://www.youtube.com/watch?v=I2zj129qJrM"
            target="_blank"
            onMouseOver={() => setHovered("Floatin")}
          >
            Churn Out Clique - Floatin'
          </Link>
          <Image
            className={`z-10 w-40 absolute ${
              hovered !== "Floatin" && "hidden"
            }`}
            src="/Floatin.png"
            alt="Floatin"
            width={100}
            height={100}
          />
        </div>{" "}
        · {/* Blubberblasen */}
        <div className="p-2">
          <Link
            href="https://www.youtube.com/watch?v=yFNQMrqlw0o"
            target="_blank"
            onMouseOver={() => setHovered("Blubberblasen")}
          >
            Churn Out Clique - Blubberblasen
          </Link>
          <Image
            className={`z-10 w-40 absolute ${
              hovered !== "Blubberblasen" && "hidden"
            }`}
            src="/Blubberblasen.png"
            alt="Blubberblasen"
            width={100}
            height={100}
          />
        </div>{" "}
        · {/* Heduda */}
        <div className="p-2">
          <Link
            href="/heduda"
            target="_blank"
            onMouseOver={() => setHovered("Heduda")}
          >
            HeDuDa
          </Link>
          <Image
            className={`z-10 w-40 absolute ${hovered !== "Heduda" && "hidden"}`}
            src="/Heduda.png"
            alt="Heduda"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
