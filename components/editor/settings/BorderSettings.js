import IncrementalInput, { OptionalInput } from "./Inputs";
const styleOptions = [
  {
    label: "Solid",
    value: "solid",
  },
  {
    label: "Dotted",
    value: "dotted",
  },
  {
    label: "Dashed",
    value: "dashed",
  },
  {
    label: "Double",
    value: "double",
  },
  {
    label: "Groove",
    value: "groove",
  },
];

const BorderSettings = ({ props }) => {
  return (
    <div className="text-background dark:text-darkBackground w-80">
      <div>
        <h2 className="text-primary font-bold text-lg">Border</h2>
        <hr />
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="1"
            max="1200"
            label="Thickness"
            handleOnChange={(e) => {
              props.setBorderThickness(e.target.value);
            }}
          />
          <OptionalInput
            label="Style"
            options={styleOptions}
            handleOnChange={(e) => {
              props.setBorderStyle(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-primary font-bold text-lg mt-5">Border Radius</h2>
        <hr />
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setBorderTopLeft(e.target.value);
            }}
            label="Top Left"
          />
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setBorderTopRight(e.target.value);
            }}
            label="Top Right"
          />
        </div>
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setBorderBottomLeft(e.target.value);
            }}
            label="Bottom Left"
          />
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setBorderBottomRight(e.target.value);
            }}
            label="Bottom Right"
          />
        </div>
      </div>
    </div>
  );
};

export default BorderSettings;
