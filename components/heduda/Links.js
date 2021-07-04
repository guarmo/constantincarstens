import React from "react";

const Nav = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-8">

        {/* Subliminal */}
        <a href="https://soundcloud.com/denied-area/subliminal" target="_blank">
          <img src="/Subliminal.png" alt="" />
          <h3>Subliminal</h3>
        </a>

        {/* Perzeption (Installationsaufbau) */}
        <a href="https://vimeo.com/535892840" target="_blank">
          <img src="/Perzeption.png" alt="" />
          <h3>Perzeption (Installationsaufbau) - Marlon Nicolaisen</h3>
        </a>

        {/* Sound Installation (Documentation) */}
        <a href="https://vimeo.com/536014499" target="_blank">
          <img src="/Installation2.png" alt="" />
          <h3>Sound Installation Janis Binder und Constantin Carstens</h3>
        </a>

         {/* Sound Installation (Documentation) */}
         <a href="https://vimeo.com/536008116" target="_blank">
          <img className="w-full h-auto" src="/Installation.png" alt="" />
          <h3>
            Sound Installation Janis Binder und Constantin Carstens
            (Documentation)
          </h3>
        </a>

        {/* Lyte Confinement 9 */}
        <a
          href="https://soundcloud.com/quotationmarks/lyte-confinement-radio-session-9-heduda"
          target="_blank"
        >
          <img src="/LyteConfinement9.png" alt="" />
          <h3>The lyte confinement radio - session 9 - Heduda</h3>
        </a>

        {/* Lyte Confinement 7 */}
        <a
          href="https://soundcloud.com/quotationmarks/the-lyte-confinement-radio-session-7"
          target="_blank"
        >
          <img src="/LyteConfinement7.png" alt="" />
          <h3>The lyte confinement radio - session 7 - Heduda</h3>
        </a>

        {/* Session */}
        <a
          href="https://soundcloud.com/quotationmarks/the-lyte-confinement-radio-session-2-heduda"
          target="_blank"
        >
          <img src="/Session.png" alt="" />
          <h3>the lyte confinement radio - session 2</h3>
        </a>

        {/* GUDDI */}
        <a href="https://soundcloud.com/microbrew/heduda-guddi" target="_blank">
          <img src="/Guddi.png" alt="" />
          <h3>GUDDI</h3>
        </a>

        {/* Frohnatur */}
        <a
          href="https://soundcloud.com/hedudaflinkeswiesel/sets/frohnatur"
          target="_blank"
        >
          <img src="/Frohnatur.png" alt="" />
          <h3>Frohnatur</h3>
        </a>
      </div>
    </div>
  );
};

export default Nav;
