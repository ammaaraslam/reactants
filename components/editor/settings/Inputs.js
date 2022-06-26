import React from "react";

const settings = ["Width", "Height", "Top", "Bottom", "Left", "Right"];

const IncrementalInput = ({ handleOnChange, label, max, min }) => {
  return (
    <form
      className="p-0"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>{label}:</label>
      <input
        type="number"
        min={min}
        max={max}
        onChange={handleOnChange}
        className="ml-2 w-12 h-6 rounded-sm bg-secondary text-darkBackground dark:text-background text-right"
      />
    </form>
  );
};

export default IncrementalInput;

export const OptionalInput = ({ label, options, handleOnChange }) => {
  return (
    <form
      className="p-0"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>{label}:</label>
      <select
        onChange={handleOnChange}
        className="ml-2 w-fit h-6 rounded-sm bg-secondary text-darkBackground dark:text-background text-right"
      >
        {options.map((o) => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>
    </form>
  );
};
