import { TypeAnimation } from "react-type-animation";
import BestProject from "../../Components/BestProject";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" w-full">
        <div className="grid grid-cols-2 justify-between ">
          <div className=" mt-6 md:text-3xl text-xl  ">
            <h1 className="font-semibold">
              Hi, I am <br /> Rofikul Islam Resan
            </h1>
            <div className="font-semibold ">
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
            </div>
            <p className="text-sm font-light text-justify mt-4">
              Dedicated MERN Stack developer with a passion for hard work and a
              genuine love for what I do. Proficient in JavaScript and
              experience in REACT with a understanding of backend concepts.
              Seeking a challenging role to contribute and grow with a company.
            </p>
            <Link
              to="https://drive.google.com/uc?id=1hIpvsITuMNC1oxxhNOvSKxHVXbqp_JcP&export=download"
              className="btn btn-primary mt-4 btn-sm"
            >
              Get Resume
            </Link>{" "}
          </div>
          <img
            src="/resan.png"
            alt="resan"
            className="rounded-full mx-auto h-72 "
          />
        </div>
      </div>
      <BestProject />
    </>
  );
};

export default Home;
