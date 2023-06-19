import { MdMail, MdOutlineLocationOn } from "react-icons/md";
import BestProject from "../../Components/BestProject";
import SkillProgress from "../../Components/SkillProgress";

const About = () => {
  return (
    <div className="mt-6 ml-10">
      <div className="flex items-center gap-6 ">
        <img
          src="/aboutImg.png"
          alt="resan"
          className="rounded-full w-60 h-60 "
        />
        <div>
          <h1 className="text-4xl font-bold text-white uppercase">
            Rofikul Islam Resan
          </h1>
          <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
          <p className="flex gap-3 mt-4">
            <MdMail className="text-2xl" /> resan6231@gmail.com
          </p>
          <p className="flex gap-3 mt-2">
            <MdOutlineLocationOn className="text-2xl" /> Pabna , Bangladesh.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold underline mb-2 ">Objective</h2>
        <p className="w-2/3  font-light text-justify">
          Dedicated React developer with a passion for hard work and a genuine
          love for what I do. Proficient in JavaScript and experience in REACT
          with a basic understanding of backend concepts. Seeking a challenging
          role to contribute and grow with a company.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold underline mb-2 ">Education</h2>
        <p>
          <span className="font-bold">Academic : </span> BBA- Accounting .
          Government Edward University, Pabna
        </p>
        <p>
          <span className="font-bold">Course : </span> Complete Web Development
          .{" "}
          <a
            href="https://web.programming-hero.com"
            className="link link-hover"
          >
            Programming-hero
          </a>
        </p>
      </div>
      <div className="mt-6">
        <BestProject />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold underline mb-2 ">Skills</h2>
        <div className="grid grid-cols-2 gap-12">
          <SkillProgress value={80} name={"HTML"} />
        </div>
      </div>
    </div>
  );
};

export default About;
