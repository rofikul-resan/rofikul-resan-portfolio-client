import { TypeAnimation } from "react-type-animation";
import BestProject from "../../Components/BestProject";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <img
            src="/resan.png"
            alt="resan"
            className="rounded-full mx-auto h-72"
          />
          <div className=" mt-6 text-3xl ">
            <h1 className="font-semibold">Hi, I am Rofikul Islam Resan</h1>

            <h1 className="font-semibold ">
              <TypeAnimation
                sequence={[
                  " I am MERN Stack web Developer....",
                  2000,
                  " I am from Bangladesh....",
                  2000,
                ]}
                wrapper="h1"
                speed={50}
                cursor={true}
                repeat={Infinity}
              />
            </h1>
          </div>
        </div>
      </div>
      <BestProject />
    </>
  );
};

export default Home;
