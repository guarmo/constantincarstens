import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrSoundcloud } from "react-icons/gr";

const Contacts = () => {
  return (
    <div id="contacts" name="contacts"  className="py-20 relative text-5xl flex justify-center">
      <a
        className="transition transform hover:scale-125"
        href="https://www.facebook.com/profile.php?id=100008687705479"
        target="_blank"
      >
        <AiOutlineFacebook />
      </a>
      <a
        className="mx-4 transition transform hover:scale-125"
        href="https://www.instagram.com/heduda_flinkeswiesel"
        target="_blank"
      >
        <AiOutlineInstagram />
      </a>
      <a
        className="transition transform hover:scale-125"
        href="https://soundcloud.com/hedudaflinkeswiesel"
        target="_blank"
      >
        <GrSoundcloud />
      </a>
    </div>
  );
};

export default Contacts;
