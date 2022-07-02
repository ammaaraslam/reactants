import React, { useState } from "react";
import Component, {
  ComponentFrame,
  Element,
  RectangleElement,
  TextElement,
} from "./Component";
import ButtonComponent from "./components/ButtonComponent";

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
          {/* <ComponentFrame>
            {props.elements.map((element, index) => (
              <Element removeElement={props.removeElement} id={index}>
                {React.cloneElement(element, { props })}
              </Element>
            ))}
          </ComponentFrame> */}
          <ButtonComponent props={props} />
        </div>
      </div>
    );
  }
};

export default Canvas;
