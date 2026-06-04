"use client";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";
import Project from "./Project";

const Hero = () => {
  return (
    <>
      <main className="relative z-10 flex-1 w-full lg:ml-[33.333%] px-5 py-10 lg:p-10 text-gray-300">
        <section id="about" data-aos="fade-up">
          <About />
        </section>
        <section id="skills" data-aos="fade-up">
          <Skill />
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
