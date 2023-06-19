import { Link } from "react-router-dom";

const BestProject = () => {
  return (
    <div>
      <div className="flex justify-between w-10/12 ml-12 mt-6">
        <h1 className="text-2xl font-semibold text-white"> Project</h1>
        <Link to={"/project"} className="link link-hover">
          +see more
        </Link>
      </div>{" "}
    </div>
  );
};

export default BestProject;
