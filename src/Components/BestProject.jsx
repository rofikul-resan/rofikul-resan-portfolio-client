import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

const BestProject = () => {
  const [best, setBest] = useState([]);
  useEffect(() => {
    axios("https://rofikul-islam-protfolio-server.vercel.app/best").then(
      (res) => setBest(res.data)
    );
  }, []);
  return (
    <div>
      <div className="flex justify-between md:w-10/12 md:ml-12 mt-6">
        <h1 className="text-2xl font-semibold text-white"> Project</h1>
        <Link to={"/project"} className="link link-hover">
          +see more
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {best.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold mb-6">
          MY Github Commit Information
        </h1>
        <GitHubCalendar username="rofikul-resan" />
      </div>
    </div>
  );
};

export default BestProject;
