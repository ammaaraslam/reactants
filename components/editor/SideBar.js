import { TbResize, TbBorderAll } from "react-icons/tb";
import { IoTextSharp } from "react-icons/io5";
import { AiOutlineBgColors, AiOutlineFontColors } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import SizeSettings from "./settings/SizeSettings";
import ContentSizeSettings from "./settings/ContentSizeSettings";
import Popout from "./Popout";
import ComponentColorSettings from "./settings/ComponentColor";
import ComponentContentColorSettings from "./settings/ComponentContentColor";
import GetCode from "./GetCode";
import BorderSettings from "./settings/BorderSettings";

const SideBar = ({ props }) => {
  const [sizeSettings, showSizeSettings] = useState(false);
  const [contentSizeSettings, showContentSizeSettings] = useState(false);
  const [componentColorSettings, showComponentColorSettings] = useState(false);
  const [componentContentColorSettings, showComponentContentColorSettings] =
    useState(false);
  const [borderSettings, showBorderSettings] = useState(false);

  const togglingSizeSettings = () => showSizeSettings(!sizeSettings);
  const togglingBorderSettings = () => showBorderSettings(!borderSettings);

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
  ]);

  return (
    <div className="absolute top-0 p-3 h-screen w-fit bg-background dark:bg-darkBackground shadow-md items-center justify-between font-roboto">
      <div className="mt-16 flex flex-col">
        <SideBarButton handleOnClick={togglingSizeSettings}>
          <TbResize />
        </SideBarButton>
        {sizeSettings && (
          <Popout useRef={ref}>
            <SizeSettings props={props} />
          </Popout>
        )}
        <SideBarButton handleOnClick={togglingContentSizeSettings}>
          <IoTextSharp />
        </SideBarButton>
        {contentSizeSettings && (
          <Popout useRef={ref}>
            <ContentSizeSettings props={props} />
          </Popout>
        )}
        <SideBarButton handleOnClick={togglingComponentColorSettings}>
          <AiOutlineBgColors />
        </SideBarButton>
        {componentColorSettings && (
          <Popout useRef={ref}>
            <ComponentColorSettings props={props} />
          </Popout>
        )}
        <SideBarButton handleOnClick={togglingComponentContentColorSettings}>
          <AiOutlineFontColors />
        </SideBarButton>
        {componentContentColorSettings && (
          <Popout useRef={ref}>
            <ComponentContentColorSettings props={props} />
          </Popout>
        )}
        <SideBarButton handleOnClick={togglingBorderSettings}>
          <TbBorderAll />
        </SideBarButton>
        {borderSettings && (
          <Popout useRef={ref}>
            <BorderSettings props={props} />
          </Popout>
        )}
      </div>
      <div className="absolute bottom-5 flex flex-col">
        <GetCode props={props} />
        <SideBarButton>
          <BiExit className="rotate-180" />
        </SideBarButton>
      </div>
    </div>
  );
};

export default SideBar;

const SideBarButton = ({ children, handleOnClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className="mt-5 p-2 bg-darkBackground dark:bg-background rounded-md text-2xl text-center text-primary hover:bg-primary dark:hover:bg-primary hover:rounded-lg hover:text-darkBackground dark:hover:text-background transition-all ease-in-out duration-150"
      >
        {children}
      </button>
    </>
  );
};
