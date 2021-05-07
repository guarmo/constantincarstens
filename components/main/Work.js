import React, { useState } from "react";

const Work = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className="border-2 border-red-800 relative"
      onMouseOut={() => setHovered(null)}
    >
      <p className="text-4xl text-center">
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
            className={`w-40 absolute ${
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
            className={`w-40 absolute ${hovered !== "Leer" && "hidden"}`}
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
            className={`w-40 absolute ${hovered !== "Floatin" && "hidden"}`}
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
            className={`w-40 absolute ${
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
