import Concept from "@/components/heduda/Concept";
import Links from "@/components/heduda/Links";
import Nav from "@/components/heduda/Nav";

const heduda = () => {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <Nav />
      <Concept />
      <Links />
    </div>
  );
};

export default heduda;
