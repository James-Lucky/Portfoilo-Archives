"use client";
import React from "react";

const EducationSection = () => {
  const education = [
    {
      period: "2023 — 2027",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Dr. Akhilesh Das Gupta Institute of Professional Studies (GGSIPU)",
      description:
        "Currently pursuing a Bachelor of Technology with a focus on Artificial Intelligence and Data Science. Gaining hands-on experience in Machine Learning, Data Structures (C++), and modern web technologies.",
    },

  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="education">
      <div className="space-y-12">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300 mb-10">
          Education
        </h2>

        {education.map((edu, index) => (
          <div
            key={index}
            className="block group hover:bg-slate-800/50 hover:shadow-lg transition-all duration-300 rounded-lg p-6 -mx-6"
          >
            {/* Top Section: Title + Period */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-200">
                  {edu.degree}
                </h3>
                {edu.institution && (
                  <span className="text-slate-400 text-sm sm:text-base mt-1">
                    {edu.institution}
                  </span>
                )}
              </div>

              {/* Date on right side */}
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide shrink-0 sm:text-right mt-1 sm:mt-0">
                {edu.period}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="text-slate-300 relative overflow-hidden">
      <EducationSection />
    </div>
  );
};

export default Education;
