"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  const experiences = [
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Years Coding" },
    { number: "5+", label: "Technologies Used" },
    { number: "10+", label: "Freelance Clients" },
  ];

  return (
    <main className="w-full relative z-20 overflow-hidden">
      <section className="max-w-5xl mx-auto text-gray-300 leading-relaxed px-5 sm:px-8 pt-12 lg:pt-15 pb-12 space-y-10">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300">
            About Me
          </h2>

          <a
            href="https://drive.google.com/file/d/1_YjNAWFIHHVIlBofJ5WMM3OxH0qcLAR-/view?usp=drive_link"
            id="about"
            className="group inline-flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-all duration-200 text-lg sm:text-xl font-semibold"
          >
            Resume
            <FiArrowUpRight className="text-2xl sm:text-3xl lg:text-4xl transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Paragraph */}
       <p className="text-base sm:text-lg leading-relaxed tracking-wide text-gray-300">
    I'm a passionate Software Developer focused on creating accessible, pixel-perfect
    user interfaces through thoughtful design and robust engineering.
    Currently, I am a <strong>B.Tech AI & Data Science</strong> student and a
    freelance <strong>MERN Stack Developer</strong> dedicated to building
    exceptional digital experiences in UI/UX design and web/app development.
  </p>

  <p className="text-base sm:text-lg leading-relaxed tracking-wide text-gray-300">
    My skills include strong proficiency in
    <strong> Data Structures and Algorithms (C++)</strong> and full-stack
    development with <strong> MongoDB, Express, React, and Node.js</strong>.
    I focus on transforming ideas into visually appealing and
    high-performance interfaces.
  </p>
        

        {/* Experience Section */}
        <div className="pt-3">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300 mb-8">
            Experience
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {experiences.map((item, index) => (
              <div
                key={index}
                className=" border border-blue-400/20 rounded-xl p-6 text-center hover:border-blue-400/40 transition"
              >
                <p className="text-4xl sm:text-5xl font-bold text-blue-300">
                  {item.number}
                </p>

                <p className="text-sm sm:text-base mt-2 text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
};

export default About;