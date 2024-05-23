
import React, { useState } from 'react';

const AboutMe = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        
        <section id="about" className="min-h-screen about flex flex-col items-center pt-16 text-white">
            <h2 className="heading text-5xl mb-5 text-center">
                <span className="text-main-color font-bold">About</span> Me
            </h2>

            <div className=" relative rounded-full flex justify-center items-center">
                <img src="/hero3.png" alt="Profile" className="w-60 h-60 rounded-full border-4 border-blue-500 bg-gray-900" />
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] rounded-full border-t-2 border-b-2 border-l-2 border-r-2 border-main-color border-b-second-bg-color border-l-main-color border-t-second-bg-color border-r-main-color animate-aboutSpinner'></span>
            </div>

            <div className="text-center font-poppins lg:max-w-6xl px-4 ">
                <h3 className="text-2xl mb-4 mt-4">Software Engineering</h3>
                <p className="lg:text-lg mb-8">
                    As a passionate career switcher transitioning into frontend development, I bring a unique blend of analytical skills honed from my background as a Laboratory Analyst and Data Analyst. This unique combination allows me to approach frontend development with a keen eye for detail and a strong analytical mindset, enabling me to create innovative solutions and exceptional user experiences.
                    {isExpanded && (
                        <span>
                            {" "}My proficiency in key frontend technologies such as React JS, Tailwind, and Material UI, coupled with a solid foundation in Python, MySQL, and Flask, equips me with the technical expertise to drive innovative projects. Having undergone intensive training and hands-on experience in modern web development practices through a comprehensive Software Engineering bootcamp at RevoU, I am eager to leverage my unique skill set in my transition into a frontend developer role. My meticulous attention to detail and ability to adapt quickly make me a valuable asset to any creative team.
                        </span>
                    )}
                </p>
                <div>
                    <button onClick={handleReadMore} className="bg-main-color text-white px-6 py-2 rounded-lg mb-10">
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
