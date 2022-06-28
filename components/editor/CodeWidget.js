import { useState, useRef, useEffect } from "react";
import { VscCode } from "react-icons/vsc";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Rnd from "react-rnd";

const CodeWidget = ({ props }) => {
  const [codeInlineType, setCodeInlineType] = useState(true);
  const [codeTailwindType, setCodeTailwindType] = useState(false);
  const [codeSCType, setCodeSCType] = useState(false);

  const togglingCodeInlineType = () => setCodeInlineType(true);
  const togglingCodeTailwindType = () => setCodeTailwindType(!codeTailwindType);
  const togglingCodeSCType = () => setCodeSCType(!codeSCType);

  const InlineCodeOutput = `import React from 'react'
    export const GetCode = () => {
        return (
            <div
              className="text-center flex justify-center"
              style={{
                width: "${props.width}px",
                height: "${props.height}px",
                paddingTop: "${props.paddingT}px",
                paddingBottom: "${props.paddingB}px",
                paddingLeft: "${props.paddingL}px",
                paddingRight: "${props.paddingR}px",
                fontSize: "${props.fontSize}px",
                lineHeight: "${props.lineHeight}",
                backgroundColor: "${props.componentColor}",
                color: "${props.componentContentColor}",
                paddingLeft: "${props.paddingL}px",
                paddingRight: "${props.paddingR}px",
                fontSize: "${props.fontSize}px",
                lineHeight: "${props.lineHeight}",
                backgroundColor: "${props.componentColor}",
                color: "${props.componentContentColor}",
                paddingLeft: "${props.paddingL}px",
                paddingRight: "${props.paddingR}px",
                fontSize: "${props.fontSize}px",
                lineHeight: "${props.lineHeight}",
                backgroundColor: "${props.componentColor}",
                color: "${props.componentContentColor}",
                paddingLeft: "${props.paddingL}px",
                paddingRight: "${props.paddingR}px",
                fontSize: "${props.fontSize}px",
                lineHeight: "${props.lineHeight}",
                backgroundColor: "${props.componentColor}",
                color: "${props.componentContentColor}",

              }}
            >
              Component
            </div>
          );
    }
    `;
  const TailwindCodeOutput = `tailwind`;
  const ScCodeOutput = `styled components`;
  const ref = useRef();
  // Detect Outside Click
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        [codeInlineType, codeTailwindType, codeSCType] &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        // setBgOpen(false);
        // setCBgOpen(false);
        setCodeInlineType(false);
        setCodeTailwindType(false);
        setCodeSCType(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [codeInlineType, codeTailwindType, codeSCType]);

  return (
    <div className="p-0 w-full h-1/2 pl-16 bg-background dark:bg-darkBackground shadow-md rounded-tl-lg">
      {/* <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText(InlineCodeOutput);
        }}
        className="absolute mt-5 right-5 p-2 bg-darkBackground dark:bg-background rounded-md text-2xl text-center text-secondary hover:bg-secondary dark:hover:bg-secondary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
      >
        <IoMdClose />
      </button> */}
      <div className="border-l-2 border-r-2 border-secondary rounded-tl-lg rounded-tr-lg h-full">
        <div className="w-full bg-darkBackground border-t-2 border-b-2 border-secondary rounded-tl-lg rounded-tr-lg ">
          <button
            type="button"
            onClick={togglingCodeInlineType}
            className="text-center text-lg text-background border-r-2 border-secondary pt-1 pb-1 pl-2 pr-2 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
          >
            Inline CSS
          </button>
          <button
            type="button"
            onClick={togglingCodeTailwindType}
            className="text-center text-lg text-background border-r-2 border-secondary pt-1 pb-1 pl-2 pr-2 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
          >
            Tailwind CSS
          </button>
          <button
            type="button"
            onClick={togglingCodeSCType}
            className="text-center text-lg text-background border-r-2 border-secondary pt-1 pb-1 pl-2 pr-2 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
          >
            Styled Components
          </button>
        </div>
        {codeInlineType && (
          <div ref={ref} className="p-0 w-full h-full">
            <CopyCodeButton codeToCopy={InlineCodeOutput} />

            <SyntaxHighlighter
              language="jsx"
              style={nightOwl}
              showLineNumbers="true"
              customStyle={{
                backgroundColor: "#212738",
                marginTop: "0",
                height: "100%",
                paddingBottom: "50px",
              }}
              wrapLongLines="true"
            >
              {InlineCodeOutput}
            </SyntaxHighlighter>
          </div>
        )}
        {codeTailwindType && (
          <div ref={ref}>
            <CopyCodeButton codeToCopy={TailwindCodeOutput} />

            <SyntaxHighlighter
              language="jsx"
              style={nightOwl}
              showLineNumbers="true"
              customStyle={{
                backgroundColor: "#212738",
                marginTop: "0",
              }}
              wrapLongLines="true"
            >
              {TailwindCodeOutput}
            </SyntaxHighlighter>
          </div>
        )}
        {codeSCType && (
          <div ref={ref}>
            <CopyCodeButton codeToCopy={ScCodeOutput} />

            <SyntaxHighlighter
              language="jsx"
              style={nightOwl}
              showLineNumbers="true"
              customStyle={{
                backgroundColor: "#212738",
                marginTop: "0",
              }}
              wrapLongLines="true"
            >
              {ScCodeOutput}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeWidget;

import React from "react";

const CopyCodeButton = ({ codeToCopy }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(codeToCopy);
      }}
      className="absolute right-6 mt-3 p-2 bg-background dark:bg-darkBackground rounded-md text-2xl text-center text-secondary hover:bg-secondary dark:hover:bg-secondary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
    >
      <HiOutlineClipboardCopy />
    </button>
  );
};
