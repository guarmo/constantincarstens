import Image from "next/image";

const Bio = () => {
  return (
    <div
      id="bio"
      className="flex flex-col sm:flex-row items-center justify-center py-20"
    >
      <Image className="w-80 h-auto mb-8 sm:mb-0" src="/main.jpg" alt="Main image" width={300} height={300} />
      <p className="bioP text-lg sm:ml-8 text-center">
        Constantin Carstens is a Berlin based Sound Designer and -Engineer. At
        the age of 22 he finished with a distinction in “Advanced Diploma in
        Music Production and Sound Engineering” at the renowned Abbey Road
        Institute. Right after school, Constantin took on various internships
        and worked as an assistant and recording engineer in different Studios
        (Bewake Berlin, Paraverse Studio). Since then he has worked with Mouse
        on Mars, Lee Scratch Perry, Tomas Saraceno, Stephen O’Malley, Kali
        Malone, Peter Rehberg, Oren Ambarchi, Junk-E-cat, Reema and Hani
        Mojtahedy. In 2020 he helped with the installation of Meyer Sound’s
        multichannel monitoring system at Bewake Studios, and worked as engineer
        with the spatialization Software Spacemap Go for the CTM Festival.
        Constantin combines his knowledge with his curiosity and sense for
        experimentation in audio to achieve something unique and suitable for
        every project. Through his fascination for audio and music, he has
        developed a wide range of advanced skills, from recording and mixing to
        spatialization, sound design and music production.
      </p>
    </div>
  );
};

export default Bio;
