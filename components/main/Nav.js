import React from "react";

const Nav = () => {
  return (
    // @todo add hamburger menu on sm screens
    <nav className="flex sm:justify-between flex-col sm:flex-row items-center">
      <div className="border-2 border-white p-1">
        <h1 className="uppercase text-lg tracking-wider">
          Constantin Carstens
        </h1>
      </div>

      <ul className="flex mt-5 sm:mt-0">
        <li className="mr-4">
          <a href="#bio">Bio</a>
        </li>
        <li className="mr-4">
          <a name="work" href="#work">Work</a>
        </li>
        <li className="mr-4">
          <a name="contacts" href="#contacts">Contacts</a>
        </li>
        <li>
          <a href="/heduda">HeDuDa</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
