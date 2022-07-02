import { IoTrashBin } from "react-icons/io5";
import Draggable from "react-draggable";
import { useState } from "react";

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

export const Element = ({ children, removeElement, id }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  if (hover) {
    return (
      <Draggable bounds="parent">
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={console.log(children + id)}
          className="p-3 outline outline-2 outline-darkBackground dark:outline-background rounded-md"
        >
          <IoTrashBin
            onClick={() => removeElement(id)}
            className="text-sm absolute -top-4 right-0 text-red-400 hover:text-red-600 hover:cursor-pointer"
          />
          {children}
        </div>
      </Draggable>
    );
  }

  return (
    <Draggable bounds="parent">
      <div
        onClick={console.log(children + id)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="p-3 border-darkBackground dark:border-background rounded-md"
      >
        {children}
      </div>
    </Draggable>
  );
};

export default Component;

export const TextElement = ({ props }) => {
  return (
    <p
      style={{
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
      text element
    </p>
  );
};

export const RectangleElement = ({ props }) => {
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

export const IconElement = () => {
  return <p>icon element</p>;
};

export const ComponentFrame = ({ children }) => {
  return (
    <div className="relative w-fit h-fit p-5 flex justify-center items-center bg-primary">
      {children}
    </div>
  );
};
