import { TbResize, TbBorderAll } from "react-icons/tb";
import { IoTextSharp, IoAddSharp } from "react-icons/io5";
import { AiOutlineBgColors, AiOutlineFontColors } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import SizeSettings from "./settings/SizeSettings";
import ContentSizeSettings from "./settings/ContentSizeSettings";
import Popout from "./Popout";
import ComponentColorSettings from "./settings/ComponentColor";
import ComponentContentColorSettings from "./settings/ComponentContentColor";
import BorderSettings from "./settings/BorderSettings";
import { VscCode } from "react-icons/vsc";
import AddElement from "./settings/AddElement";

const SideBar = ({ props }) => {
  const [sizeSettings, showSizeSettings] = useState(false);
  const [contentSizeSettings, showContentSizeSettings] = useState(false);
  const [componentColorSettings, showComponentColorSettings] = useState(false);
  const [componentContentColorSettings, showComponentContentColorSettings] =
    useState(false);
  const [borderSettings, showBorderSettings] = useState(false);
  const [addElement, showAddElement] = useState(false);

  const togglingSizeSettings = () => showSizeSettings(!sizeSettings);
  const togglingBorderSettings = () => showBorderSettings(!borderSettings);
  const togglingAddComponent = () => showAddElement(!addElement);

  const togglingContentSizeSettings = () =>
    showContentSizeSettings(!contentSizeSettings);
  const togglingComponentColorSettings = () =>
    showComponentColorSettings(!componentColorSettings);
  const togglingComponentContentColorSettings = () =>
    showComponentContentColorSettings(!componentContentColorSettings);

  const ref = useRef();
  // Detect Outside Click
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        [
          sizeSettings,
          contentSizeSettings,
          componentColorSettings,
          componentContentColorSettings,
          borderSettings,
          addElement,
        ] &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        // setBgOpen(false);
        // setCBgOpen(false);
        showSizeSettings(false);
        showContentSizeSettings(false);
        showComponentColorSettings(false);
        showComponentContentColorSettings(false);
        showBorderSettings(false);
        showAddElement(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [
    sizeSettings,
    contentSizeSettings,
    componentColorSettings,
    componentContentColorSettings,
    borderSettings,
    addElement,
  ]);

  return (
    <div className="absolute top-0 p-3 z-40 h-screen w-fit bg-background dark:bg-darkBackground shadow-md items-center justify-between font-roboto">
      <div className="mt-16 flex flex-col">
        {/* <SideBarButton handleOnClick={togglingAddComponent} active={addElement}>
          <IoAddSharp />
        </SideBarButton>
        {addElement && (
          <Popout useRef={ref}>
            <AddElement props={props} />
          </Popout>
        )} */}

        <SideBarButton
          handleOnClick={togglingSizeSettings}
          active={sizeSettings}
        >
          <TbResize />
        </SideBarButton>
        {sizeSettings && (
          <Popout useRef={ref}>
            <SizeSettings props={props} />
          </Popout>
        )}
        <SideBarButton
          handleOnClick={togglingContentSizeSettings}
          active={contentSizeSettings}
        >
          <IoTextSharp />
        </SideBarButton>
        {contentSizeSettings && (
          <Popout useRef={ref}>
            <ContentSizeSettings props={props} />
          </Popout>
        )}
        <SideBarButton
          handleOnClick={togglingComponentColorSettings}
          active={componentColorSettings}
        >
          <AiOutlineBgColors />
        </SideBarButton>
        {componentColorSettings && (
          <Popout useRef={ref}>
            <ComponentColorSettings props={props} />
          </Popout>
        )}
        <SideBarButton
          handleOnClick={togglingComponentContentColorSettings}
          active={componentContentColorSettings}
        >
          <AiOutlineFontColors />
        </SideBarButton>
        {componentContentColorSettings && (
          <Popout useRef={ref}>
            <ComponentContentColorSettings props={props} />
          </Popout>
        )}
        <SideBarButton
          handleOnClick={togglingBorderSettings}
          active={borderSettings}
        >
          <TbBorderAll />
        </SideBarButton>
        {borderSettings && (
          <Popout useRef={ref}>
            <BorderSettings props={props} />
          </Popout>
        )}
      </div>
      <div className="absolute bottom-5 flex flex-col">
        <SideBarButton
          handleOnClick={props.togglingCodeWidget}
          active={props.codeWidget}
        >
          <VscCode />
        </SideBarButton>

        <SideBarButton active={false}>
          <BiExit className="rotate-180" />
        </SideBarButton>
      </div>
    </div>
  );
};

export default SideBar;

const SideBarButton = ({ children, handleOnClick, active }) => {
  if (active) {
    return (
      <>
        <button
          type="button"
          onClick={handleOnClick}
          className="mt-5 p-2 text-darkBackground dark:text-background rounded-md text-2xl text-center transition-all ease-in-out duration-150  bg-primary"
        >
          {children}
        </button>
      </>
    );
  }
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className="mt-5 p-2 text-darkBackground dark:text-background rounded-md text-2xl text-center transition-all ease-in-out duration-150  hover:bg-darkBackground dark:hover:bg-background hover:bg-opacity-20 dark:hover:bg-opacity-20"
      >
        {children}
      </button>
    </>
  );
};
