import React from "react";
import Component from "./Component";

const Canvas = ({ props }) => {
  return (
    <div className="bg-canvas bg-lightCanvas dark:bg-darkCanvas dark:darkCanvas bg-background dark:bg-darkBackground h-screen">
      <div className=" bg-transparent ml-16 flex justify-center items-center text-center h-full">
        <Component props={props} />
      </div>
    </div>
  );
};

export default Canvas;
