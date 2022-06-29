import { useRef, useState, useEffect } from "react";

const settings = ["Width", "Height", "Top", "Bottom", "Left", "Right"];

const IncrementalInput = ({
  handleOnChange,
  label,
  max,
  min,
  defaultValue,
  step,
}) => {
  const [formActive, setFormActive] = useState(false);
  const togglingFormActive = () => setFormActive(!formActive);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if ([formActive] && ref.current && !ref.current.contains(e.target)) {
        // setBgOpen(false);
        // setCBgOpen(false);
        setFormActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [formActive]);

  if (formActive == true) {
    return (
      <form
        className=" p-2 text-darkBackground dark:text-background rounded-md text-center transition-all ease-in-out duration-150  bg-darkBackground dark:bg-background bg-opacity-10 dark:bg-opacity-10 font-roboto inline-flex justify-between items-center w-32 outline outline-offset-0 outline-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="number"
          ref={ref}
          min={min}
          max={max}
          value={defaultValue}
          onChange={handleOnChange}
          onFocus={togglingFormActive}
          step={step}
          className="text-sm bg-transparent text-left opacity-90 w-fit ml-1"
        />
        <label className="text-xs opacity-70 uppercase">{label}</label>
      </form>
    );
  } else {
    return (
      <form
        className="p-2 text-darkBackground dark:text-background rounded-md text-center transition-all ease-in-out duration-150  bg-darkBackground dark:bg-background bg-opacity-5 dark:bg-opacity-5 font-roboto inline-flex justify-between items-center w-32"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="number"
          ref={ref}
          min={min}
          max={max}
          value={defaultValue}
          onChange={handleOnChange}
          onFocus={togglingFormActive}
          step={step}
          className="text-sm bg-transparent text-left opacity-90 w-fit ml-1"
        />
        <label className="text-xs opacity-70 uppercase">{label}</label>
      </form>
    );
  }
};

export default IncrementalInput;

export const OptionalInput = ({ label, options, handleOnChange }) => {
  const [formActive, setFormActive] = useState(false);
  const togglingFormActive = () => setFormActive(!formActive);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if ([formActive] && ref.current && !ref.current.contains(e.target)) {
        // setBgOpen(false);
        // setCBgOpen(false);
        setFormActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [formActive]);

  if (formActive == true) {
    return (
      <form
        className="p-0 text-darkBackground dark:text-background"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className=" font-roboto text-base opacity-90">{label}</label>
        <select
          onChange={handleOnChange}
          onFocus={togglingFormActive}
          className="py-2 pl-2 pr-5 ml-2 w-fit h-fit rounded-md text-left transition-all ease-in-out duration-150  bg-darkBackground dark:bg-background bg-opacity-10 dark:bg-opacity-10 text-base opacity-90 outline outline-offset-0 outline-1"
        >
          {options.map((o) => (
            <option
              className="p-4 mt-2 rounded-md bg-background dark:bg-darkBackground bg-opacity-90  dark:bg-opacity-90 outline-none"
              value={o.value}
            >
              {o.label}
            </option>
          ))}
        </select>
      </form>
    );
  } else {
    return (
      <form
        className="p-0 text-darkBackground dark:text-background"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className=" font-roboto text-base opacity-90">{label}</label>
        <select
          onChange={handleOnChange}
          onFocus={togglingFormActive}
          className="py-2 pl-2 pr-5 ml-2 w-fit h-fit rounded-md text-left transition-all ease-in-out duration-150  bg-darkBackground dark:bg-background bg-opacity-5 dark:bg-opacity-5 text-base opacity-90"
        >
          {options.map((o) => (
            <option
              className="p-4 mt-2 rounded-md bg-background dark:bg-darkBackground bg-opacity-90  dark:bg-opacity-90 outline-none"
              value={o.value}
            >
              {o.label}
            </option>
          ))}
        </select>
      </form>
    );
  }
};
