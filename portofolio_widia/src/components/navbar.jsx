import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const sidebarVariants = {
        open: {
            clipPath: "circle(1200px at 40px 40px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(30px at 40px 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    const buttonVariants = {
        open: { rotate: 45 },
        closed: { rotate: 0 },
    };

    const listVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        open: {
            x: 0,
            opacity: 1,
        },
        closed: {
            x: 50,
            opacity: 0,
        },
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50  shadow-lg">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden lg:flex lg:justify-between lg:items-center lg:p-4 lg:font-bold lg:w-[1366px] lg:m-auto"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Widia
                </motion.span>

                <div className="flex space-x-4 cursor-pointer ">
                    <Link className="hover:text-main-color" to="Homepage"  >
                        Home
                    </Link>
                    <Link className="hover:text-main-color" to="About"  >
                        About Me
                    </Link>
                    <Link className="hover:text-main-color" to="Portofolio"  >
                        Portofolio
                    </Link>
                    <Link className="hover:text-main-color" to="Contact" >
                        Contact
                    </Link>
                </div>
            </motion.div>

            <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
                <motion.button
                    className="text-blue-600 p-3"
                    onClick={toggleMenu}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={buttonVariants}
                >
                    {isOpen ? <AddIcon /> : <MenuIcon />}
                </motion.button>
            </div>

            <motion.div
                className="lg:hidden fixed top-0 left-0  bottom-0 w-full z-40 pointer-events-none"
                animate={isOpen ? 'open' : 'closed'}
                variants={sidebarVariants}
            >
                <motion.div className="w-1/2 h-full flex flex-col items-center justify-center p-4 bg-gray-800 pointer-events-auto">
                    <motion.ul
                        className="flex flex-col items-center space-y-4 mt-4 text-4xl"
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={listVariants}
                    >
                        
                        <motion.li className='flex flex-col space-y-5 font-poppins'>
                            <Link className="hover:text-main-color" to="Homepage" smooth={true}  duration={500}>
                                Home
                            </Link>
                            <Link className="hover:text-main-color" to="About" smooth={true} duration={500}>
                                About Me
                            </Link>
                            <Link className="hover:text-main-color" to="Portofolio" smooth={true} duration={500}>
                                Portofolio
                            </Link>
                            <Link className="hover:text-main-color" to="Contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
