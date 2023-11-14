import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { MdLibraryAdd, MdOutlineContactMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ContactInfo from "./ContactInfo";

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <div
      className={`${
        isOpen ? "md:w-60" : "w-16"
      } relative duration-300 bg-black/30 h-full overflow-auto`}
    >
      <div className="absolute left-[10px]">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      <div>
        <div className="mt-14">
          <img
            alt="Rofikul Islam Resan"
            src="/resan.png"
            className={`${
              isOpen ? "block" : "hidden"
            } w-11/12 mx-auto rounded-full  `}
          />
        </div>
        <h1
          className={`${
            !isOpen ? "hidden" : "block"
          } text-2xl font-bold capitalize text-center mt-2`}
        >
          Rofikul Islam Resan
        </h1>
        <h3
          className={`${
            !isOpen ? "hidden" : "block"
          } text-lg font-light capitalize text-center mt-2`}
        >
          MERN Stack Developer
        </h3>
        <div className="text-white mt-4 w-fit mx-auto">
          <ul className="flex flex-col">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active-Nav" : "")}
            >
              <li className="btn btn-ghost justify-start gap-2">
                <AiOutlineHome className="text-2xl" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Home</span>
              </li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              <li className="btn btn-ghost justify-start gap-2">
                <RxAvatar className="text-2xl" />
                <span className={`${isOpen ? "block" : "hidden"}`}>About</span>
              </li>
            </NavLink>
            <NavLink
              to={"/project"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              <li className="btn btn-ghost justify-start gap-2">
                <AiOutlineProject className="text-2xl" />
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  Project
                </span>
              </li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              <li className="btn btn-ghost justify-start gap-2">
                <MdOutlineContactMail className="text-2xl " />
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  contact
                </span>
              </li>
            </NavLink>
            <div className="hidden">
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
            </div>
          </ul>
          <div className="w-fit md:hidden ml-[17px]">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
