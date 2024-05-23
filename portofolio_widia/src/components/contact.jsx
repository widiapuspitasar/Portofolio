import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rr9digd",
        "template_bjwp6i8",
        formRef.current,
        "cuu9yz9KcQPP8_Caa"
      )
      .then(
        (result) => {
          alert("Your message sending success");
          formRef.current.reset();
          setSuccess(true);
        },
        (error) => {
          alert("An error occurred, please try again");
          setError(true);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:gap-12 max-w-screen-xl min-h-screen mx-auto py-8 px-4">
      <div className="flex-1 flex flex-col gap-10 text-white">
        <h1 className="pt-10 font-poppins font-bold text-4xl text-center lg:ext-7xl leading-tight">Let’s Work Together</h1>
        <div className="hidden lg:flex lg:flex-col">
          <h2 className="text-xl font-semibold">Email</h2>
          <span>puspitasariwidia@gmail.com</span>
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <h2 className="text-xl font-semibold">Address</h2>
          <span>Bogor, West Java</span>
        </div>
        
      </div>

      <div className="flex-1 relative text-white w-full">
        <h1 className="mb-5 lg:text-4xl lg:mb-5 font-bold font-poppins">Get In Touch</h1>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-full"
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="p-2 lg:p-5 bg-transparent border border-white text-white rounded-md focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            className="p-2 lg:p-5 bg-transparent border border-white text-white rounded-md focus:outline-none"
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            className="p-2 lg:p-5 bg-transparent border border-white text-white rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 lg:p-5 bg-main-color text-white rounded-md cursor-pointer hover:bg-blue-900 transition-colors font-poppins font-semibold text-xl"
          >
            Send
          </button>
          {error && <p className="text-red-500">Error</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
