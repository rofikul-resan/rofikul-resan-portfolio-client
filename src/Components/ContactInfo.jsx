import { FaFacebookF, FaGithub, FaLinkedin, FaSkype } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-5 text-2xl text-white">
      <button>
        <a
          href="https://github.com/rofikul-resan"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaGithub />
        </a>
      </button>

      <button>
        <a
          href="https://www.linkedin.com/in/rofikul-islam-resan-74555a278"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaLinkedin />
        </a>
      </button>
      <button>
        <a
          href="https://www.facebook.com/resan.rafin"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaFacebookF />
        </a>
      </button>
      <button>
        <a href="tel://+8801642673809" rel="noreferrer" target={"_blank"}>
          <BsWhatsapp />
        </a>
      </button>
      <button>
        <a
          href="https://join.skype.com/invite/XwuMvTgDYKFk"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaSkype />
        </a>
      </button>
    </div>
  );
};

export default ContactInfo;
