"use client";
import React from "react";

const certificates = [
  { title: "React Developer", issuer: "Meta", date: "Jan 2024" },
  { title: "Machine Learning", issuer: "Stanford", date: "Mar 2024" },
  { title: "Data Structures in C++", issuer: "Coding Ninjas", date: "May 2024" },
  { title: "UI/UX Design", issuer: "Google", date: "Jul 2024" },
  { title: "Full Stack MERN", issuer: "Udemy", date: "Sep 2024" },
];

const CertificationSection = () => {
  // Duplicate array to create a seamless infinite loop
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12" id="certification">
      <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-blue-300 mb-10">
        Certifications
      </h2>

      {/* Marquee Container with fade effect */}
      <div 
        className="relative overflow-hidden w-full flex items-center py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div 
          className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]"
        >
          {duplicatedCertificates.map((cert, index) => (
            <div 
              key={index} 
              className="w-[250px] sm:w-[280px] shrink-0 bg-[#222b3a] hover:bg-[#263141] border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6 flex flex-col items-center text-center shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300 font-bold text-2xl shadow-inner">
                {cert.issuer.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-blue-400 mb-1 font-medium">{cert.issuer}</p>
              <p className="text-xs text-slate-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll half the width since we duplicated the array (plus half the gap) */
            transform: translateX(calc(-50% - 0.75rem));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CertificationSection;
