import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProjectCard from "../../Components/ProjectCard";

const ProjectContener = ({ tabName }) => {
  const [url, setUrl] = useState(null);
  const [project, setProject] = useState([]);
  useEffect(() => {
    if (tabName === "all") {
      setUrl(`https://rofikul-islam-protfolio-server.vercel.app/project`);
    } else {
      setUrl(
        `https://rofikul-islam-protfolio-server.vercel.app/project?filter=${tabName}`
      );
    }
  }, [tabName]);
  useEffect(() => {
    if (url) {
      axios(url).then((res) => setProject(res.data));
    }
  }, [url]);
  console.log(tabName);
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {project.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};

export default ProjectContener;
