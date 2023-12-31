import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import ContactInfo from "../Components/ContactInfo";

const MainLayout = () => {
  return (
    <div className="h-screen w-full main-layout text-white md:py-5 md:px-5 flex gap-5  ">
      <div className="min-h-full max-w-[1400px] mx-auto md:rounded-2xl shadow-inner shadow-white/40 overflow-hidden w-full flex relative  ">
        <SideBar />
        <div className=" flex-1 h-full overflow-y-auto main-body ">
          <div className="md:pr-14 p-6 pb-8 h-full">
            <div className="pb-7 overflow-y-hidden">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-5 hidden md:block ">
          <div className="w-[1px] bg-white h-[15vh] mx-auto mb-8"></div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
