import { MdMail, MdOutlineLocationOn } from "react-icons/md";
import BestProject from "../../Components/BestProject";
import SkillProgress from "../../Components/SkillProgress";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-6 md:ml-10">
      <div className="md:flex items-center gap-6 ">
        <img
          src="/aboutImg.png"
          alt="resan"
          className="rounded-full w-60 h-60 "
        />
        <div>
          <h1 className="md:text-4xl text-2xl font-bold text-white uppercase">
            Rofikul Islam Resan
          </h1>
          <h3 className="text-xl font-semibold">MERN Stack Developer</h3>
          <p className="flex gap-3 mt-4">
            <MdMail className="text-2xl" /> resan6231@gmail.com
          </p>
          <p className="flex gap-3 mt-2">
            <MdOutlineLocationOn className="text-2xl" /> Pabna , Bangladesh.
          </p>
          <Link
            to="https://drive.google.com/uc?id=1hIpvsITuMNC1oxxhNOvSKxHVXbqp_JcP&export=download"
            className="btn btn-primary mt-4 btn-sm"
          >
            Get Resume
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold underline mb-2 ">Objective</h2>
        <p className="md:w-2/3  font-light text-justify">
          Dedicated MERN Stack developer with a passion for hard work and a
          genuine love for what I do. Proficient in JavaScript and experience in
          REACT with a understanding of backend concepts. Seeking a challenging
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
      <div className="mt-6 mb-4">
        <h2 className="text-2xl font-bold underline mb-2 ">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <SkillProgress value={90} name={"HTML"} />
          <SkillProgress value={80} name={"CSS"} />
          <SkillProgress value={75} name={"React JS"} />
          <SkillProgress value={50} name={"Node JS"} />
          <SkillProgress value={60} name={"Express JS"} />
          <SkillProgress value={60} name={"MOngodb"} />
        </div>
        <h2 className="text-2xl font-bold underline mb-2 mt-6 ">
          Related Skills
        </h2>
        <Marquee className="rounded-md">
          <div className="flex gap-8 my-4">
            <div>
              <img src="/visual-studio.svg" alt="" className="h-12 mx-auto" />
              <p className="text-center">VsCode</p>
            </div>
            <div>
              <img src="/tailwindcss.svg" alt="" className="h-12 mx-auto" />
              <p className="text-center">Tailwind</p>
            </div>
            <div>
              <img src="/node-js.png" alt="" className="h-12 mx-auto" />
              <p className="text-center">node JS</p>
            </div>
            <div>
              <img src="/redux-50.png" alt="" className="h-12 mx-auto" />
              <p className="text-center">Redux</p>
            </div>
            <div>
              <img src="/html-5.png" alt="" className="h-12 mx-auto" />
              <p className="text-center">HTML</p>
            </div>
            <div>
              <img src="/github.png" alt="" className="h-12 mx-auto" />
              <p className="text-center">Github</p>
            </div>
            <div>
              <img src="/git.svg" alt="" className="h-12 mx-auto" />
              <p className="text-center">Git</p>
            </div>
            <div>
              <img src="/css-3.png" alt="" className="h-12 mx-auto" />
              <p className="text-center">CSS</p>
            </div>
            <div>
              <img src="/bootstrap.svg" alt="" className="h-12 mx-auto" />
              <p className="text-center">Bootstrap</p>
            </div>
            <div>
              <img src="/express-js.svg" alt="" className="h-12 mx-auto" />
              <p className="text-center">Express</p>
            </div>
            <div>
              <img src="/mongodb.svg" alt="" className="h-12 mx-auto" />
              <p className="text-center">Mongodb</p>
            </div>
            <div>
              <img src="/firebase.svg" alt="" className="h-12 mx-auto" />
              <p className="text-center">Firebase</p>
            </div>
          </div>
        </Marquee>
      </div>
      <div>
        <h2 className="text-2xl font-bold underline mb-2 mt-6 ">Langues</h2>
        <ul className="text-xl list-disc mx-10">
          <li>Bangla</li>
          <li>English</li>
          <li>Hindi</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
