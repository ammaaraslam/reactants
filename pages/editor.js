import Head from "next/head";
import { useState } from "react";
import Canvas from "../components/editor/Canvas";
import CodeWidget from "../components/editor/CodeWidget";
import SideBar from "../components/editor/SideBar";
import TopBar from "../components/editor/TopBar";
import Component, {
  IconElement,
  RectangleElement,
  TextElement,
} from "../components/editor/Component";

export default function Editor() {
  const [width, setWidth] = useState("250");
  const [height, setHeight] = useState("50");
  const [paddingT, setPaddingT] = useState("5");
  const [paddingB, setPaddingB] = useState("5");
  const [paddingL, setPaddingL] = useState("5");
  const [paddingR, setPaddingR] = useState("5");
  const [fontSize, setFontSize] = useState("30");
  const [lineHeight, setLineHeight] = useState("1.2");
  const [componentColor, setComponentColor] = useState("#f97068");
  const [componentContentColor, setComponentContentColor] = useState("#F4F6FF");
  const [borderStyle, setBorderStyle] = useState("Solid");
  const [borderThickness, setBorderThickness] = useState("2");
  const [borderTopLeft, setBorderTopLeft] = useState("10");
  const [borderTopRight, setBorderTopRight] = useState("10");
  const [borderBottomLeft, setBorderBottomLeft] = useState("10");
  const [borderBottomRight, setBorderBottomRight] = useState("10");
  const [codeWidget, showCodeWidget] = useState(false);
  const [elements, setElements] = useState([
    <TextElement removeElement={removeElement} />,
    <RectangleElement removeElement={removeElement} />,
  ]);
  const addTextElement = () => {
    const newElement = [
      ...elements,
      <TextElement removeElement={removeElement} />,
    ];
    setElements(newElement);
  };
  const addRectangleElement = () => {
    const newElement = [
      ...elements,
      <RectangleElement removeElement={removeElement} />,
    ];
    setElements(newElement);
  };
  const addIconElement = () => {
    const newElement = [
      ...elements,
      <IconElement removeElement={removeElement} />,
    ];
    setElements(newElement);
  };

  const removeElement = (index) => {
    const newTasks = [...elements];
    newTasks.splice(index, 1);
    setElements(newTasks);
  };

  const togglingCodeWidget = () => showCodeWidget(!codeWidget);

  const propsForSettings = {
    width,
    removeElement,
    addIconElement,
    setWidth,
    height,
    setHeight,
    paddingT,
    setPaddingT,
    paddingB,
    setPaddingB,
    paddingL,
    setPaddingL,
    paddingR,
    setPaddingR,
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    componentColor,
    setComponentColor,
    componentContentColor,
    setComponentContentColor,
    borderStyle,
    setBorderStyle,
    borderThickness,
    setBorderThickness,
    borderTopLeft,
    setBorderTopLeft,
    borderTopRight,
    setBorderTopRight,
    borderBottomLeft,
    setBorderBottomLeft,
    borderBottomRight,
    setBorderBottomRight,
    codeWidget,
    showCodeWidget,
    addRectangleElement,
    togglingCodeWidget,
    elements,
    setElements,
    addTextElement,
  };

  return (
    <div>
      <Head>
        <title>Editor - Reactants</title>
        <meta name="description" content="Editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen bg-background dark:bg-darkBackground overflow-hidden">
        <TopBar />
        <SideBar props={propsForSettings} />
        <div className="h-screen">
          <Canvas props={propsForSettings} />
          {codeWidget && <CodeWidget props={propsForSettings} />}
        </div>
      </main>
    </div>
  );
}
