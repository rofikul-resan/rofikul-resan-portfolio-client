import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import ContactInfo from "../Components/ContactInfo";

const MainLayout = () => {
  return (
    <div className="h-screen w-full main-layout text-white py-5 px-5 flex gap-5  ">
      <div className="min-h-full rounded-2xl shadow-inner shadow-white/40 overflow-hidden w-full flex ">
        <SideBar />
        <div className=" flex-1 h-full overflow-y-auto main-body relative">
          <div className="pr-14">
            <Outlet />
          </div>
          <div className="absolute bottom-10 right-5">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;