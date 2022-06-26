import IncrementalInput from "./Inputs";

const SizeSettings = ({ props }) => {
  return (
    <div className="text-background dark:text-darkBackground w-60">
      <div>
        <h2 className="text-primary font-bold text-lg">Size</h2>
        <hr />
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="1"
            max="1200"
            label="Width"
            handleOnChange={(e) => {
              props.setWidth(e.target.value);
            }}
          />
          <IncrementalInput
            label="Height"
            min="1"
            max="750"
            handleOnChange={(e) => {
              props.setHeight(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-primary font-bold text-lg mt-5">Padding</h2>
        <hr />
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setPaddingT(e.target.value);
            }}
            label="Top"
          />
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setPaddingL(e.target.value);
            }}
            label="Left"
          />
        </div>
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setPaddingB(e.target.value);
            }}
            label="Bottom"
          />
          <IncrementalInput
            min="0"
            max="100"
            handleOnChange={(e) => {
              props.setPaddingR(e.target.value);
            }}
            label="Right"
          />
        </div>
      </div>
    </div>
  );
};

export default SizeSettings;
