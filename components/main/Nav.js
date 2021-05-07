import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="border-2 border-white p-1">
        <h1 className="uppercase text-lg tracking-wider">
          Constantin Carstens
        </h1>
      </div>

      <ul className="flex">
        <li className="mr-4">
          <a href="#bio">Bio</a>
        </li>
        <li className="mr-4">
          <a href="#work">Work</a>
        </li>
        <li className="mr-4">
          <a href="#contacts">Contacts</a>
        </li>
        <li>
          <a href="/heduda">HeDuDa</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
