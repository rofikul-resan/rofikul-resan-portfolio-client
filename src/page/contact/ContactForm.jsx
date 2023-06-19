import { AiOutlineArrowRight } from "react-icons/ai";

const ContactForm = () => {
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center pt-12">
        <div>
          <h1 className="text-center text-3xl font-bold">contact</h1>
          <div className="space-y-3 text-center">
            <p className="w-10/12 mx-auto text-center my-6">
              {" "}
              I am Rofikul Islam Resan. I am From Bangladesh.I am a MERN stack
              Developer. Programming is not only my job it is my passion. Thanks
              for viewing my portfolio website. I respect your opinion. Give me
              a message to improve myself or if you have any work for me sent a
              message.
            </p>
            <div className="pt-14">
              <h1 className="text-2xl font-bold">Address</h1>
              <p>Pabna,Bangladesh</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Email</h1>
              <p>resan6231@gmail.com</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Phone</h1>
              <p>+8801642673809</p>
              <p>WhatsApp and Telegram</p>
            </div>
          </div>
        </div>

        {/* form section  */}
        <div className="w-full">
          <div className="rounded-md shadow-lg shadow-black/50 ">
            <form onSubmit={handleSubmitMessage} className="p-10 space-y-5">
              <div className="form-control">
                <label
                  htmlFor="name"
                  className="text-xl font-semibold italic mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="focus:bg-white/40 bg-transparent border-b border-white focus-visible:border-0 rounded-t-md"
                />
              </div>
              <div className="form-control">
                <label
                  htmlFor="email"
                  className="text-xl font-semibold italic mb-2"
                >
                  Your Email
                </label>
                <input
                  type="Email"
                  name="name"
                  className="focus:bg-white/40 bg-transparent border-b border-white focus-visible:border-0 rounded-t-md"
                />
              </div>
              <div className="form-control">
                <label
                  htmlFor="email"
                  className="text-xl font-semibold italic mb-2 "
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="input input-bordered border-white p-4 h-48 resize-none bg-transparent focus:bg-white/25"
                ></textarea>
              </div>
              <div className="w-fit mx-auto">
                <button
                  type="submit"
                  className="btn gap-3 rounded-sm shadow-md p-4 shadow-black/50 hover:shadow-none"
                >
                  Sent Message <AiOutlineArrowRight />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
