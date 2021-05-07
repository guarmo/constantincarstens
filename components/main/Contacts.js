import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrSoundcloud } from "react-icons/gr";

const Contacts = () => {
  return (
    <div className="border-2 border-red-800 relative text-5xl flex justify-center">
      <a
        href="https://www.facebook.com/profile.php?id=100008687705479"
        target="_blank"
      >
        <AiOutlineFacebook />
      </a>
      <a href="https://www.instagram.com/heduda_flinkeswiesel" target="_blank">
        <AiOutlineInstagram />
      </a>
      <a href="https://soundcloud.com/hedudaflinkeswiesel" target="_blank">
        <GrSoundcloud />
      </a>
    </div>
  );
};

export default Contacts;
