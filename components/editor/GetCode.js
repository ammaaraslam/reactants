import { useState, useRef, useEffect } from "react";
import { VscCode } from "react-icons/vsc";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `const GetCode = () => {
    return (
        <div></div>
    )
}
`;

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
  return (
    <div className="p-0 w-2/5 h-screen bg-background dark:bg-darkBackground fixed top-14 right-0 shadow-md rounded-md">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText(InlineCodeOutput);
        }}
        className="absolute right-5 mt-5 p-2 bg-darkBackground dark:bg-background rounded-md text-2xl text-center text-primary hover:bg-primary dark:hover:bg-primary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
      >
        <HiOutlineClipboardCopy />
      </button>
      <SyntaxHighlighter
        language="jsx"
        style={coldarkDark}
        showLineNumbers="true"
        customStyle={{
          backgroundColor: "#212738",
          marginTop: "60px",
        }}
        wrapLongLines="true"
      >
        {InlineCodeOutput}
      </SyntaxHighlighter>
    </div>
  );
};
