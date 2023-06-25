import { Tooltip } from "@mui/material";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { MdLibraryAdd, MdOutlineContactMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setOpen] = useState(true);
  console.log(isOpen);
  return (
    <div
      className={`${
        isOpen ? "w-60" : "w-16"
      } relative duration-300 bg-black/30 h-full overflow-hidden`}
    >
      <div className="absolute right-1">
        <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
      </div>
      <div>
        <img
          alt="Rofikul Islam Resan"
          src="/resan.png"
          className="mt-14 w-11/12 mx-auto rounded-full  "
        />
        <h1
          className={`${
            !isOpen ? "hidden" : "block"
          } text-2xl font-bold capitalize text-center mt-2`}
        >
          Rofikul Islam Resan
        </h1>
        <div className="text-white mt-4">
          <ul className="flex flex-col">
            <Tooltip title="Home" arrow>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-orange-500" : ""
                }
              >
                <li className="btn btn-ghost justify-start gap-2">
                  <AiOutlineHome className="text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>Home</span>
                </li>
              </NavLink>
            </Tooltip>
            <Tooltip title="About" arrow>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-orange-500" : ""
                }
              >
                <li className="btn btn-ghost justify-start gap-2">
                  <RxAvatar className="text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    About
                  </span>
                </li>
              </NavLink>
            </Tooltip>
            <Tooltip title="project" arrow>
              <NavLink
                to={"/project"}
                className={({ isActive }) =>
                  isActive ? "text-orange-500" : ""
                }
              >
                <li className="btn btn-ghost justify-start gap-2">
                  <AiOutlineProject className="text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    Project
                  </span>
                </li>
              </NavLink>
            </Tooltip>
            <Tooltip title="contact" arrow>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-orange-500" : ""
                }
              >
                <li className="btn btn-ghost justify-start gap-2">
                  <MdOutlineContactMail className="text-2xl " />
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    contact
                  </span>
                </li>
              </NavLink>
            </Tooltip>
            <Tooltip title="Add project" arrow>
              <NavLink
                to={"/add-project"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li className="btn btn-ghost justify-start gap-2">
                  <MdLibraryAdd className="text-2xl " />
                  <span className={`${isOpen ? "block" : "hidden"}`}>
                    Add Project
                  </span>
                </li>
              </NavLink>
            </Tooltip>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
