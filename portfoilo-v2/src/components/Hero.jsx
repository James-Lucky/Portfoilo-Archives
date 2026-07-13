"use client";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import Certification from "./Certification";

const Hero = () => {
  return (
    <>
      <main className="relative z-10 w-full lg:w-2/3 lg:ml-[33.333%] px-5 py-10 lg:p-10 text-gray-300">
        <section id="about" data-aos="fade-up">
          <About />
        </section>
        <section id="skills" data-aos="fade-up">
          <Skill />
        </section>
        <section id="education" data-aos="fade-up">
          <Education />
        </section>
        <section id="certification" data-aos="fade-up">
          <Certification />
        </section>
        <section id="experience" data-aos="fade-up">
          <Experience />
        </section>
        <section id="projects" data-aos="fade-up">
          <Project />
        </section>
      </main>
    </>
  );
};

export default Hero;
