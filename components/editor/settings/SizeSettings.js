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
            defaultValue={props.width}
            handleOnChange={(e) => {
              props.setWidth(e.target.value);
            }}
          />
          <IncrementalInput
            label="Height"
            min="1"
            max="750"
            defaultValue={props.height}
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
            defaultValue={props.paddingT}
            handleOnChange={(e) => {
              props.setPaddingT(e.target.value);
            }}
            label="Top"
          />
          <IncrementalInput
            min="0"
            max="100"
            defaultValue={props.paddingL}
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
            defaultValue={props.paddingB}
            handleOnChange={(e) => {
              props.setPaddingB(e.target.value);
            }}
            label="Bottom"
          />
          <IncrementalInput
            min="0"
            max="100"
            defaultValue={props.paddingR}
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
