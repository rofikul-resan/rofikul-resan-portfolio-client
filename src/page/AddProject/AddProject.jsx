import axios from "axios";
import { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import CreatableSelect from "react-select/creatable";

const AddProject = () => {
  const [technology, setTechnology] = useState([]);
  const [feature, setFeature] = useState([]);
  const options = [
    { value: "html", label: "HTML" },
    { value: "css-formwork", label: "Css-formwork" },
    { value: "javaScript", label: "javaScript" },
    { value: "react", label: "react Js" },
    { value: "node", label: "node" },
    { value: "mern", label: "Mern" },
    { value: "nextJs", label: "next js" },
  ];

  const handelAddProject = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imageFile = form.image.files[0];
    const client = form.client.value;
    const server = form.server.value;
    const live = form.live.value;
    const projectType = form.projectType.value;
    const featureLIst = feature.map((feature) => feature.value);
    const technologyList = technology.map((tec) => tec.value);
    console.log(imageFile);
    const formData = new FormData();
    formData.append("image", imageFile);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API}`,
        formData
      )
      .then(async (res) => {
        const image = res.data.data.display_url;
        if (!image) {
          return;
        }
        const projectInfo = {
          name,
          image: image,
          client,
          server,
          live,
          technologyList,
          featureLIst,
          projectType,
        };
        console.log(projectInfo);
        const response = await axios.post(
          "https://rofikul-islam-protfolio-server.vercel.app/add-project",
          projectInfo
        );
        if (response.data.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Project add successfully",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      onSubmit={handelAddProject}
      className="md:w-9/12 p-6 mx-auto rounded-md shadow-md shadow-white/40 mt-10 bg-black/5"
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
          <span className="italic font-semibold">Project Feature</span>
        </label>
        <CreatableSelect
          required
          isMulti
          options={feature}
          onChange={setFeature}
          className="text-black"
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="italic font-semibold">Project Type</span>
        </label>
        <select
          required
          name="projectType"
          className="input input-bordered text-black"
        >
          <option value="normal">Normal</option>
          <option value="best">Best</option>
        </select>
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="italic font-semibold">Project Thumbnail Link</span>
        </label>
        <input
          type="file"
          name="image"
          placeholder="Type here"
          className="file-input file-input-bordered file-input-info w-full text-black"
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
