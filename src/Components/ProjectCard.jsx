import { BsCodeSlash } from "react-icons/bs";
import { VscLiveShare } from "react-icons/vsc";
const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className="project-card duration-200">
      <div className="h-72 overflow-hidden rounded-2xl shadow-inner shadow-white glass relative ">
        <div className="py-2 bg-black/80">
          <p className="text-center font-semibold ">{project.name}</p>
        </div>
        <div className="flex flex-wrap gap-3 absolute top-11 left-3">
          {project.technologyList.map((tec, i) => (
            <div key={i} className="badge badge-primary uppercase">
              {tec}
            </div>
          ))}
        </div>
        <img
          src={project.image}
          alt=""
          className=" min-h-full hover:scroll-mt-0"
        />
        <div className="absolute inset-x-0 h-0 bottom-0 bg-black/80 z-10 flex justify-center flex-col project-card-overlay shadow-inner shadow-white/50 overflow-hidden">
          <ul className="list-decimal ml-2 mt-3">
            {project.featureLIst?.map((fec, i) => (
              <li key={i}>
                <span className="text-orange-300">{i + 1} .</span> {fec}
              </li>
            ))}
          </ul>
          <div className=" flex gap-3 justify-center mt-4">
            <a
              href={project.client}
              rel="noreferrer"
              target={"_blank"}
              className="flex items-center flex-col "
            >
              <BsCodeSlash className="text-2xl text-orange-300" />
              <p className="text-sm">Client</p>
            </a>
            {project.server && (
              <a
                href={project.server}
                rel="noreferrer"
                target={"_blank"}
                className="flex items-center flex-col "
              >
                <BsCodeSlash className="text-2xl text-orange-300" />
                <p className="text-sm">Server</p>
              </a>
            )}
            <a
              href={project.live}
              rel="noreferrer"
              target={"_blank"}
              className="flex items-center flex-col "
            >
              <VscLiveShare className="text-2xl text-orange-300" />
              <p className="text-sm">Live Site</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
