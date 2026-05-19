"use client";
import React from "react";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Freelancer",
      hasArrow: true,
      description:
        "I work on multiple projects simultaneously, creating user-friendly projects for diverse clients. My expertise includes web development, app development, UI/UX design, and problem-solving. I deliver quality solutions tailored to each client's unique needs and requirements.",
      services: ["Web Development", "App Development", "UI/UX"],
      link: "#",
    },
    {
      period: "Nov 2023 — Apr 2024",
      title: "Frontend Developer",
      company: "Kwiqsoft",
      hasArrow: true,
      description:
        "Wrapped up an incredible Web Developer internship at Kwiqsoft! Built responsive websites with React, JavaScript, HTML & CSS while working on real projects with an amazing team. This experience taught me not just how to code better, but how to collaborate, communicate, and solve problems creatively.",
      technologies: [
        "HTML & CSS",
        "JavaScript",
        "Bootstrap",
        "WordPress",
        "Figma",
      ],
      link: "https://www.kwiqsoft.com/",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="experience">
      <div className="space-y-12">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300 mb-10">
          Experiences
        </h2>

        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:bg-slate-800/50 hover:shadow-lg transition-all duration-300 rounded-lg p-6 -mx-6 cursor-pointer"
          >
            {/* Top Section: Title + Period */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                {exp.title}
                {exp.company && (
                  <span className="text-slate-400">• {exp.company}</span>
                )}
                {exp.hasArrow && (
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </h3>

              {/* Date on right side */}
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1 sm:mt-0">
                {exp.period}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed mb-6 text-sm lg:text-base">
              {exp.description}
            </p>

            {/* Services */}
            {exp.services && exp.services.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {exp.services.map((service, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 text-xs font-medium bg-indigo-400/10 text-indigo-300 rounded-full border border-indigo-400/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-indigo-400/10 text-indigo-300 rounded-full border border-indigo-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="text-slate-300 relative overflow-hidden">
      {/* Background noise texture */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />
      <ExperienceSection />
    </div>
  );
};

export default Experience;
