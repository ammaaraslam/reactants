import React from "react";

const Component = ({ props }) => {
  return (
    <div
      className="text-center flex justify-center"
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        paddingTop: `${props.paddingT}px`,
        paddingBottom: `${props.paddingB}px`,
        paddingLeft: `${props.paddingL}px`,
        paddingRight: `${props.paddingR}px`,
        fontSize: `${props.fontSize}px`,
        lineHeight: `${props.lineHeight}`,
        backgroundColor: `${props.componentColor}`,
        color: `${props.componentContentColor}`,
      }}
    >
      Component
    </div>
  );
};

export default Component;
