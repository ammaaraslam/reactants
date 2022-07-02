import React from "react";

const ButtonComponent = ({ props }) => {
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
        borderWidth: `${props.borderThickness}px`,
        borderStyle: `${props.borderStyle}`,
        borderTopLeftRadius: `${props.borderTopLeft}px`,
        borderTopRightRadius: `${props.borderTopRight}px`,
        borderBottomLeftRadius: `${props.borderBottomLeft}px`,
        borderBottomRightRadius: `${props.borderBottomRight}px`,
      }}
    >
      Component
    </div>
  );
};

export default ButtonComponent;
