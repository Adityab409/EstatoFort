import React from "react";
import "./LogoLoop.css";

export default function LogoLoop({ logos }) {
  // Duplicate logos multiple times if you have few elements, 
  // ensuring a seamless continuous track loop wider than the screen viewport
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-loop overflow-hidden py-4 w-full relative">
      {/* Increased spacing from space-x-8 to space-x-16 */}
      <div className="logo-loop-inner flex items-center space-x-16 animate-scroll w-max">
        {/* Added h-16 (64px) or custom utility layout sizes */}
        {loopLogos.map((src, i) => (
          <div key={i} className="flex-shrink-0 px-4">
            <img
              src={src}
              alt="partner logo"
              className="h-14 sm:h-16 w-auto object-contain filter brightness-100 contrast-100 opacity-100 hover:opacity-100  hover:brightness-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}