import { Container } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from '@mui/material';

const items = [
  {
    id: 1,
    title: "CareerSearch",
    img: "/portofolio1.png",
    desc: "CareerSearch is a platform designed for searching and creating job listings. This project utilizes frontend technologies such as React JS, Tailwind CSS, and Material UI. On the backend, it is built with Python, Flask, and Docker, and is deployed using Vercel and Railway.",
    link: "https://career-search-project-revou.vercel.app/",
  },
  {
    id: 2,
    title: "Pokemon Web",
    img: "/portofolio2.png",
    link: "https://milestone-2-widiapuspitasar.vercel.app/",
    desc: "Pokemon Web is a site that provides comprehensive information about Pokémon. Built using React TS, it integrates the Pokémon Rest API to fetch the latest data.",
  },
  {
    id: 3,
    title: "Courses Web",
    img: "/portofolio3.png",
    link: "https://www.webwid.site/",
    desc: "Courses Web is a platform for selling online courses. This project was developed using HTML, JavaScript, and CSS. Additionally, I learned how to create and manage my own domain through this project.",
  },
  {
    id: 4,
    title: "One Piece Blog",
    img: "/portofolio4.png",
    link: "https://www.myonepiece.site/",
    desc: "One Piece Blog is a site that provides information related to the One Piece series. This project uses advanced HTML and CSS to create an appealing and informative layout.",
  },
];

const Single = ({ item, isMobile }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="  mx-4 mt-10 lg:py-54 lg:mx-16 lg:mt-52 ">
      <div className="  flex flex-col md:flex-row items-center justify-center lg:gap-8 ">
        
        <div className="w-3/4 lg:w-1/2" ref={ref}>
          <img src={item.img} alt={item.title} className="w-full h-auto object-cover" />
        </div>
        {isMobile ? (
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold lg:mb-4">{item.title}</h2>
            <p className="text-gray-500 mb-4">{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-main-color text-white py-2 px-4 rounded mb-10">See Demo</button>
            </a>
          </div>
        ) : (
          <motion.div className="w-full md:w-1/2 text-center md:text-left" style={{ y }}>
            <h2 className="text-4xl mt-4 lg:text-6xl font-bold lg:mb-4">{item.title}</h2>
            <p className="text-gray-500 mb-4">{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="bg-main-color text-white py-2 px-4 rounded">See Demo</button>
            </a>
          </motion.div>
        )}
      </div>
    </section>


  );
};

const Portofolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div id="portofolio" className=" mx-auto lg:pb-48 ">
      <div className="sticky top-0 left-0 pt-10 pb-5 lg:pt-10 lg:pb-16 text-center bg-bg-color">
        <h1 className="text-4xl  md:text-7xl font-bold mb-5">
          My <span className="text-main-color  ">Projects</span>
        </h1>
        {!isMobile && <motion.div style={{ scaleX }} className="h-1 bg-main-color"></motion.div>}
      </div>
      <div ref={ref}>
        {items.map((item) => (
          <Single item={item} key={item.id} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
