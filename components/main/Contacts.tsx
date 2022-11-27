import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GrSoundcloud } from "react-icons/gr";

const Contacts = () => {
  return (
    <div id="contacts"  className="py-20 relative text-5xl flex justify-center">
      <Link
        className="transition transform hover:scale-125"
        href="https://www.facebook.com/profile.php?id=100008687705479"
        target="_blank"
      >
        <AiOutlineFacebook />
      </Link>
      <Link
        className="mx-4 transition transform hover:scale-125"
        href="https://www.instagram.com/heduda_flinkeswiesel"
        target="_blank"
      >
        <AiOutlineInstagram />
      </Link>
      <Link
        className="transition transform hover:scale-125"
        href="https://soundcloud.com/hedudaflinkeswiesel"
        target="_blank"
      >
        <GrSoundcloud />
      </Link>
    </div>
  );
};

export default Contacts;
