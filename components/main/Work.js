import React, { useState } from "react";

const Work = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      id="work"
      className="relative sm:p-20 p-10"
      onMouseOut={() => setHovered(null)}
    >
      <p className="text-5xl text-center break-all">
        {/* Saving Serafino */}
        <div className="inline-block p-2">
          <a
            href="https://www.youtube.com/watch?v=SIy2SaTYx3Q"
            target="_blank"
            onMouseOver={() => setHovered("SavingSerafino")}
          >
            Saving Serafino - Gin Tonic
          </a>
          <img
            className={`z-10 w-40 absolute ${
              hovered !== "SavingSerafino" && "hidden"
            }`}
            src="/SavingSerafino.png"
            alt=""
          />
        </div>{" "}
        · {/* Leer */}
        <div className="inline-block p-2">
          <a
            href="https://www.youtube.com/watch?v=3i-NmcDiNBI"
            target="_blank"
            onMouseOver={() => setHovered("Leer")}
          >
            Leer
          </a>
          <img
            className={`z-10 w-40 absolute ${hovered !== "Leer" && "hidden"}`}
            src="/Leer.png"
            alt=""
          />
        </div>{" "}
        · {/* Floatin */}
        <div className="inline-block p-2">
          <a
            href="https://www.youtube.com/watch?v=I2zj129qJrM"
            target="_blank"
            onMouseOver={() => setHovered("Floatin")}
          >
            Floatin' (feat. Nzalistic, HNY BBQ & Crooked Cuz)
          </a>
          <img
            className={`z-10 w-40 absolute ${
              hovered !== "Floatin" && "hidden"
            }`}
            src="/Floatin.png"
            alt=""
          />
        </div>{" "}
        · {/* Blubberblasen */}
        <div className="inline-block p-2">
          <a
            href="https://www.youtube.com/watch?v=yFNQMrqlw0o"
            target="_blank"
            onMouseOver={() => setHovered("Blubberblasen")}
          >
            Blubberblasen
          </a>
          <img
            className={`z-10 w-40 absolute ${
              hovered !== "Blubberblasen" && "hidden"
            }`}
            src="/Blubberblasen.png"
            alt=""
          />
        </div>
      </p>
    </div>
  );
};

export default Work;
