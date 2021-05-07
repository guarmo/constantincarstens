import React from "react";

const Header = () => {
  return (
    <div className="border-2 border-red-600">
      <video width="100%" height="240" loop="true" autoplay="autoplay" muted>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Header;
