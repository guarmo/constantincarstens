import React from "react";

const Nav = () => {
  return (
    <div className="border-2 border-red-500 flex justify-between">
      <h1>ConstantinCarstens</h1>

      <ul className="flex">
        <li className="mr-4">
          <a href="">Bio</a>
        </li>
        <li className="mr-4">
          <a href="">Work</a>
        </li>
        <li className="mr-4">
          <a href="">Contacts</a>
        </li>
        <li>
          <a href="">HeDuDa</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
