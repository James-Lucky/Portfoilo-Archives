"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const certificates = [
  { 
    title: "Wordpress", 
    issuer: "Great Learning", 
    date: "Aug 2021",
    image: "/wordpress.png", 
    link: "#"
  },
  { 
    title: "AWS", 
    issuer: "Edureka", 
    date: "May 2022",
    image: "/aws.png", 
    link: "#"
  },
  { 
    title: "Robotics", 
    issuer: "Kodacy", 
    date: "Oct 2024",
    image: "/robotics.jpg", 
    link: "#"
  },

];

const CertificationSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12" id="certification">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300">
          Certifications
        </h2>
      </div>

      {/* Scrollable Container with Fade Effect and Hidden Overflow */}
      <div 
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee py-4">
          {/* Copy 1 */}
          <div className="flex gap-6 shrink-0 pr-6">
            {certificates.map((cert, index) => (
              <a 
                key={`a-${index}`} 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[280px] shrink-0 bg-[#222b3a] hover:bg-[#263141] border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-xl flex flex-col shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Image Section */}
                <div className="h-[160px] w-full overflow-hidden relative bg-slate-800/50">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to text initials if image fails to load
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(59,130,246,0.1);color:#93c5fd;font-size:2.5rem;font-weight:bold;">${cert.issuer.charAt(0)}</div>`;
                      }
                    }}
                  />
                  {/* Arrow Icon on Hover */}
                  <div className="absolute top-3 right-3 bg-slate-900/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiArrowUpRight className="text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-200 mb-1 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-3 font-medium">{cert.issuer}</p>
                  <div className="mt-auto">
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/80 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Copy 2 (Enables infinite seamless loop) */}
          <div className="flex gap-6 shrink-0 pr-6">
            {certificates.map((cert, index) => (
              <a 
                key={`b-${index}`} 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[280px] shrink-0 bg-[#222b3a] hover:bg-[#263141] border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-xl flex flex-col shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Image Section */}
                <div className="h-[160px] w-full overflow-hidden relative bg-slate-800/50">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to text initials if image fails to load
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(59,130,246,0.1);color:#93c5fd;font-size:2.5rem;font-weight:bold;">${cert.issuer.charAt(0)}</div>`;
                      }
                    }}
                  />
                  {/* Arrow Icon on Hover */}
                  <div className="absolute top-3 right-3 bg-slate-900/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiArrowUpRight className="text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-200 mb-1 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-3 font-medium">{cert.issuer}</p>
                  <div className="mt-auto">
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/80 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
