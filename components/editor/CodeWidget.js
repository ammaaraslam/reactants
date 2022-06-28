import { useState } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useTheme } from "next-themes";

const CodeWidget = ({ props }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [codeInlineType, setCodeInlineType] = useState(true);
  const [codeTailwindType, setCodeTailwindType] = useState(false);
  const [codeSCType, setCodeSCType] = useState(false);

  const togglingCodeInlineType = () => {
    setCodeInlineType(true);
    setCodeTailwindType(false);
    setCodeSCType(false);
  };
  const togglingCodeTailwindType = () => {
    setCodeInlineType(false);
    setCodeTailwindType(true);
    setCodeSCType(false);
  };
  const togglingCodeSCType = () => {
    setCodeInlineType(false);
    setCodeTailwindType(false);
    setCodeSCType(true);
  };

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

  if (currentTheme == "dark") {
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
          <div className="w-full bg-darkBackground border-t-2 border-b-2 border-secondary rounded-tl-lg rounded-tr-lg flex items-center justify-between font-roboto">
            <div>
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
            <button
              type="button"
              onClick={props.togglingCodeWidget}
              className="text-center text-lg text-background border-r-2 border-secondary pt-1 pb-1 pl-5 pr-5 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
            >
              X
            </button>
          </div>
          {codeInlineType && (
            <div className="p-0 w-full h-full">
              <CopyCodeButton codeToCopy={InlineCodeOutput} />

              <SyntaxHighlighter
                language="jsx"
                style={atomOneDark}
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
            <div className="p-0 w-full h-full">
              <CopyCodeButton codeToCopy={TailwindCodeOutput} />

              <SyntaxHighlighter
                language="jsx"
                style={atomOneDark}
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
            <div className="p-0 w-full h-full">
              <CopyCodeButton codeToCopy={ScCodeOutput} />

              <SyntaxHighlighter
                language="jsx"
                style={atomOneDark}
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
  }
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
        <div className="w-full bg-background dark:bg-darkBackground border-t-2 border-b-2 border-secondary rounded-tl-lg rounded-tr-lg flex items-center justify-between font-roboto">
          <div>
            <button
              type="button"
              onClick={togglingCodeInlineType}
              className="text-center text-lg text-darkBackground dark:text-background border-r-2 border-secondary pt-1 pb-1 pl-2 pr-2 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
            >
              Inline CSS
            </button>
            <button
              type="button"
              onClick={togglingCodeTailwindType}
              className="text-center text-lg text-darkBackground dark:text-background border-r-2 border-secondary pt-1 pb-1 pl-2 pr-2 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
            >
              Tailwind CSS
            </button>
            <button
              type="button"
              onClick={togglingCodeSCType}
              className="text-center text-lg text-darkBackground dark:text-background border-r-2 border-secondary pt-1 pb-1 pl-2 pr-2 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
            >
              Styled Components
            </button>
          </div>
          <button
            type="button"
            onClick={props.togglingCodeWidget}
            className="text-center text-lg text-darkBackground dark:text-background border-r-2 border-secondary pt-1 pb-1 pl-5 pr-5 hover:bg-secondary hover:bg-opacity-50 focus:bg-secondary focus:bg-opacity-90 transition-all duration-150"
          >
            X
          </button>
        </div>
        {codeInlineType && (
          <div className="p-0 w-full h-full">
            <CopyCodeButton codeToCopy={InlineCodeOutput} />

            <SyntaxHighlighter
              language="jsx"
              style={atomOneLight}
              showLineNumbers="true"
              customStyle={{
                backgroundColor: "#F4F6FF",
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
          <div className="p-0 w-full h-full">
            <CopyCodeButton codeToCopy={TailwindCodeOutput} />

            <SyntaxHighlighter
              language="jsx"
              style={atomOneLight}
              showLineNumbers="true"
              customStyle={{
                backgroundColor: "#F4F6FF",
                marginTop: "0",
              }}
              wrapLongLines="true"
            >
              {TailwindCodeOutput}
            </SyntaxHighlighter>
          </div>
        )}
        {codeSCType && (
          <div className="p-0 w-full h-full">
            <CopyCodeButton codeToCopy={ScCodeOutput} />

            <SyntaxHighlighter
              language="jsx"
              style={atomOneLight}
              showLineNumbers="true"
              customStyle={{
                backgroundColor: "#F4F6FF",
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
