import React, { useState } from "react";

const Work = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      id="work"
      className="relative sm:p-20 p-10 break-words text-center"
      onMouseOut={() => setHovered(null)}
    >
      <h1 className="text-6xl mb-8">WORK</h1>
      <p className="text-5xl">
        {/* Saving Serafino */}
        <div className="p-2">
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
        <div className="p-2">
          <a
            href="https://www.youtube.com/watch?v=3i-NmcDiNBI"
            target="_blank"
            onMouseOver={() => setHovered("Leer")}
          >
            Churn Out Clique - Leer
          </a>
          <img
            className={`z-10 w-40 absolute ${hovered !== "Leer" && "hidden"}`}
            src="/Leer.png"
            alt=""
          />
        </div>{" "}
        · {/* Floatin */}
        <div className="p-2">
          <a
            href="https://www.youtube.com/watch?v=I2zj129qJrM"
            target="_blank"
            onMouseOver={() => setHovered("Floatin")}
          >
            Churn Out Clique - Floatin'
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
        <div className="p-2">
          <a
            href="https://www.youtube.com/watch?v=yFNQMrqlw0o"
            target="_blank"
            onMouseOver={() => setHovered("Blubberblasen")}
          >
            Churn Out Clique - Blubberblasen
          </a>
          <img
            className={`z-10 w-40 absolute ${
              hovered !== "Blubberblasen" && "hidden"
            }`}
            src="/Blubberblasen.png"
            alt=""
          />
        </div>{" "}
        · {/* Heduda */}
        <div className="p-2">
          <a
            href="/heduda"
            target="_blank"
            onMouseOver={() => setHovered("Heduda")}
          >
            HeDuDa
          </a>
          <img
            className={`z-10 w-40 absolute ${hovered !== "Heduda" && "hidden"}`}
            src="Heduda.png"
            alt=""
          />
        </div>
      </p>
    </div>
  );
};

export default Work;
