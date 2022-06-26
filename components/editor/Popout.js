import React from "react";

const Popout = ({ children, useRef }) => {
  return (
    <div
      ref={useRef}
      className="p-3 w-fit h-fit bg-darkBackground dark:bg-background absolute ml-16 mt-5 shadow-md rounded-md"
    >
      {children}
    </div>
  );
};

export default Popout;
