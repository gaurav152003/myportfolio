import React from "react";
import { FaArrowDown } from "react-icons/fa";
function Curveline() {
  return (
    <div>
      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-neutral-300">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <a href="#about">
          {" "}
          <FaArrowDown className="h-5 w-5 " />
        </a>
      </div>
    </div>
  );
}

export default Curveline;
