import { useState, useRef, useEffect } from "react";
import { VscCode } from "react-icons/vsc";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const GetCode = ({ props }) => {
  const [codeWidget, showCodeWidget] = useState(false);

  const togglingCodeWidget = () => showCodeWidget(!codeWidget);

  const ref = useRef();
  // Detect Outside Click
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if ([codeWidget] && ref.current && !ref.current.contains(e.target)) {
        // setBgOpen(false);
        // setCBgOpen(false);
        showCodeWidget(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [codeWidget]);
  return (
    <>
      <button
        type="button"
        onClick={togglingCodeWidget}
        className="absolute bottom-16 mt-5 p-2 bg-darkBackground dark:bg-background rounded-md text-2xl text-center text-primary hover:bg-primary dark:hover:bg-primary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
      >
        <VscCode />
      </button>
      {codeWidget && <CodeWidget props={props} />}
    </>
  );
};

export default GetCode;

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
    <div className="p-0 w-2/5 h-screen bg-background dark:bg-darkBackground fixed top-14 right-0 shadow-md rounded-md">
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
      <div className="border-l-4 border-secondary h-full mt-2">
        <div className="border-b-2 border-t-2  border-secondary w-full bg-darkBackground">
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
          <div ref={ref}>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(InlineCodeOutput);
              }}
              className="absolute right-4 mt-3 p-2 bg-background dark:bg-darkBackground rounded-md text-2xl text-center text-secondary hover:bg-secondary dark:hover:bg-secondary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
            >
              <HiOutlineClipboardCopy />
            </button>

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
              {InlineCodeOutput}
            </SyntaxHighlighter>
          </div>
        )}
        {codeTailwindType && (
          <div ref={ref}>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(TailwindCodeOutput);
              }}
              className="absolute right-4 mt-3 p-2 bg-background dark:bg-darkBackground rounded-md text-2xl text-center text-secondary hover:bg-secondary dark:hover:bg-secondary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
            >
              <HiOutlineClipboardCopy />
            </button>

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
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(ScCodeOutput);
              }}
              className="absolute right-4 mt-3 p-2 bg-background dark:bg-darkBackground rounded-md text-2xl text-center text-secondary hover:bg-secondary dark:hover:bg-secondary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
            >
              <HiOutlineClipboardCopy />
            </button>

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
