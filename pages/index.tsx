import Contacts from "@/components/main/Contacts";
import Footer from "@/components/main/Footer";
import Bio from "@/components/main/Bio";
import Nav from "@/components/main/Nav";
import Meta from "@/components/main/Meta";
import Work from "@/components/main/Work";

export default function Home() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <Meta />
      <Nav />
      <Bio />
      <Work />
      <Contacts />
      <Footer />
    </div>
  );
}
