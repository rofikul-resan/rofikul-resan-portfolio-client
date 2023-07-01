import { FiFacebook, FiGithub } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin, AiOutlineSkype } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-3 text-2xl text-white">
      <button>
        <a
          href="https://github.com/rofikul-resan"
          rel="noreferrer"
          target={"_blank"}
        >
          <FiGithub className="text-lg" />
        </a>
      </button>

      <button>
        <a
          href="https://www.linkedin.com/in/rofikul-islam-resan-74555a278"
          rel="noreferrer"
          target={"_blank"}
        >
          <AiOutlineLinkedin className="text-lg" />
        </a>
      </button>
      <button>
        <a
          href="https://www.facebook.com/resan.rafin"
          rel="noreferrer"
          target={"_blank"}
        >
          <FiFacebook className="text-lg" />
        </a>
      </button>
      <button>
        <a href="tel://+8801642673809" rel="noreferrer" target={"_blank"}>
          <BsWhatsapp className="text-lg" />
        </a>
      </button>
      <button>
        <a
          href="https://join.skype.com/invite/XwuMvTgDYKFk"
          rel="noreferrer"
          target={"_blank"}
        >
          <AiOutlineSkype className="text-lg" />
        </a>
      </button>
    </div>
  );
};

export default ContactInfo;
