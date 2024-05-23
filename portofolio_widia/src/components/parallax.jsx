import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden w-full h-screen"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-poppins font-bold text-7xl lg:text-[72px] text-center"
      >
        {type === "about" ? "About Me?" : "My Portofolio?"}
      </motion.h1>

      <motion.div className="absolute inset-0 z-30">
        <img src="/mountains.png" alt="Mountains" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20"
        style={{ y: yBg }}
      >
        <img
          src={type === "about" ? "/planets.png" : "/sun.png"}
          alt={type === "about" ? "Planets" : "Sun"}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div className="absolute inset-0 z-10" style={{ x: yBg }}>
        <img src="/stars.png" alt="Stars" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

export default Parallax;
