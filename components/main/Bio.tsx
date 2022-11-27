import data from "data";

const Bio = () => {
  return (
    <div
      id="bio"
      className="flex flex-col sm:flex-row items-center justify-center py-20"
    >
      <img
        className="w-80 h-auto mb-8 sm:mb-0"
        src="/main.jpg"
        alt="Main image"
        width={300}
        height={300}
      />
      <p className="bioP text-lg sm:ml-8 text-center whitespace-pre-line">{data.bio.description}</p>
    </div>
  );
};

export default Bio;
