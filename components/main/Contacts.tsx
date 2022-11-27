import Link from "next/link";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import data from "data";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="py-20 relative text-5xl flex justify-center space-x-4"
    >
      {data.contacts.map((contact, i) => (
        <Link
          key={i}
          className="transition transform hover:scale-125"
          href={contact.src}
          target="_blank"
        >
          {contact.icon === "fb" && <AiOutlineFacebook />}
          {contact.icon === "insta" && <AiOutlineInstagram />}
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
