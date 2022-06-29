import React, { useState } from "react";
import Component, { Element, RectangleElement, TextElement } from "./Component";

const Canvas = ({ props }) => {
  if (props.codeWidget) {
    return (
      <div className="bg-canvas bg-lightCanvas dark:bg-darkCanvas dark:darkCanvas bg-background dark:bg-darkBackground h-1/2">
        <div className=" bg-transparent ml-16 flex justify-center items-center text-center h-full">
          {props.elements}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-canvas bg-lightCanvas dark:bg-darkCanvas dark:darkCanvas bg-background dark:bg-darkBackground h-full">
        <div className=" bg-transparent ml-16 flex justify-center items-center text-center h-full">
          {props.elements.map((element, index) => (
            <Element removeElement={props.removeElement} id={index}>
              {element}
            </Element>
          ))}
        </div>
      </div>
    );
  }
};

export default Canvas;
