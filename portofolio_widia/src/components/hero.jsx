import React from 'react';
import { motion } from 'framer-motion';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="font-poppins relative h-[calc(100vh)] bg-gradient-to-b from-[#0c0c1d] to-[#111132] px-5">
      <div className="max-w-[1366px] h-full mx-auto flex flex-col lg:flex-row justify-center">
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 h-full lg:h-auto text-center lg:text-left"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="text-4xl lg:text-[30px] font-poppins lg:tracking-[10px] mb-10 ">
            WIDIA PUSPITASARI
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-4xl lg:text-[70px] tracking-wide leading-tight font-bold">
            Software Engineering 
          </motion.h1>
          <motion.div variants={textVariants} className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4">
            <motion.p
              variants={textVariants}
              className="py-4 text-white font-semibold"
              animate="scrollButton"
            >
              Let's Connect <ArrowCircleDownIcon />
            </motion.p>
          </motion.div>

          <div className="z-10 flex space-x-4 lg:justify-start justify-center">
            <a href="https://github.com/widiapuspitasar/" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
            <a href="https://instagram.com/widiapuspitasar/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
            <a href="https://linkedin.com/in/widiapuspitasar/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
          </div>
        </motion.div>

        <div className="hidden lg:flex lg:justify-end lg:items-end lg:w-1/2 lg:h-full lg:relative">
          <img src="/hero2.png" alt="Hero" className="w-full h-auto max-w-xs lg:max-w-md object-cover lg:absolute lg:bottom-0" />
        </div>
      </div>
      <motion.div
        className="absolute bottom-[-100px] text-[50vh] whitespace-nowrap text-[#ffffff09] font-bold w-full lg:w-1/2 z-0" // Added z-0 to make sure it is behind
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineering
      </motion.div>
    </div>
  );
};

export default Hero;