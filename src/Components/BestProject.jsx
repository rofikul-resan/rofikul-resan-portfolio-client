import { Link } from "react-router-dom";

const BestProject = () => {
  return (
    <div>
      <div className="flex justify-between md:w-10/12 md:ml-12 mt-6">
        <h1 className="text-2xl font-semibold text-white"> Project</h1>
        <Link to={"/project"} className="link link-hover">
          +see more
        </Link>
      </div>{" "}
    </div>
  );
};

export default BestProject;
