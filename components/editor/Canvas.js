import React from "react";
import Component from "./Component";

const Canvas = ({ props }) => {
  if (props.codeWidget) {
    return (
      <div className="bg-canvas bg-lightCanvas dark:bg-darkCanvas dark:darkCanvas bg-background dark:bg-darkBackground h-1/2">
        <div className=" bg-transparent ml-16 flex justify-center items-center text-center h-full">
          <Component props={props} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-canvas bg-lightCanvas dark:bg-darkCanvas dark:darkCanvas bg-background dark:bg-darkBackground h-full">
        <div className=" bg-transparent ml-16 flex justify-center items-center text-center h-full">
          <Component props={props} />
        </div>
      </div>
    );
  }
};

export default Canvas;
