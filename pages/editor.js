import Head from "next/head";
import { useState } from "react";
import Canvas from "../components/editor/Canvas";
import GetCode from "../components/editor/GetCode";
import SideBar from "../components/editor/SideBar";
import TopBar from "../components/editor/TopBar";

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

  const propsForSettings = {
    width,
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
  };

  return (
    <div>
      <Head>
        <title>Editor - Reactants</title>
        <meta name="description" content="Editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen bg-background dark:bg-darkBackground">
        <TopBar />
        <SideBar props={propsForSettings} />
        <Canvas props={propsForSettings} />
      </main>
    </div>
  );
}
