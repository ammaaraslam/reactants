import React from "react";

const Popout = ({ children, useRef }) => {
  return (
    <div
      ref={useRef}
      className="p-3 w-fit h-fit bg-background dark:bg-darkBackground bg-opacity-70 dark:bg-opacity-90 absolute ml-14 mt-5 shadow-md rounded-md"
    >
      {children}
    </div>
  );
};

export default Popout;
