import { useState } from "react";
import Select from "react-select";

const AddProject = () => {
  const [technology, setTechnology] = useState([]);
  const options = [
    { value: "html", label: "HTML" },
    { value: "css-formwork", label: "Css-formwork" },
    { value: "react", label: "react Js" },
    { value: "node", label: "node" },
    { value: "mern", label: "Mern" },
    { value: "nextJs", label: "next js" },
  ];

  const handelAddProject = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const client = form.client.value;
    const server = form.server.value;
    const live = form.live.value;
    const technologyList = technology.map((tec) => tec.value);
    const projectInfo = { name, image, client, server, live, technologyList };
    console.log(projectInfo);
  };
  return (
    <form
      onSubmit={handelAddProject}
      className="md:w-9/12 p-6 mx-auto rounded-md shadow-md shadow-white/40 mt-10 bg-black/30"
    >
      <h1 className="text-2xl text-center font-bold">Add New Project</h1>
      <div className="form-control w-full ">
        <label className="label">
          <span className="italic font-semibold">Project Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          className="input input-bordered w-full text-black"
          required
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="italic font-semibold">Project Technology</span>
        </label>
        <Select
          isMulti
          placeholder="Select Technology"
          onChange={setTechnology}
          options={options}
          className="uppercase text-black"
          required
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="italic font-semibold">Project Thumbnail Link</span>
        </label>
        <input
          type="text"
          name="image"
          placeholder="Type here"
          className="input input-bordered w-full text-black"
          required
        />
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="form-control w-full ">
          <label className="label">
            <span className="italic font-semibold">Project Client Link</span>
          </label>
          <input
            type="text"
            name="client"
            placeholder="Client Link"
            className="input input-bordered w-full text-black"
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="italic font-semibold">Project Server Link</span>
          </label>
          <input
            type="text"
            name="server"
            placeholder="Server Link"
            className="input input-bordered w-full text-black"
            required
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="italic font-semibold">Project Live Link</span>
          </label>
          <input
            type="text"
            name="live"
            placeholder="Live link"
            className="input input-bordered w-full text-black"
            required
          />
        </div>
      </div>
      <div className="form-control my-5">
        <button type="submit" className="btn btn-warning">
          submit
        </button>
      </div>
    </form>
  );
};

export default AddProject;
