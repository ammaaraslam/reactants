import IncrementalInput from "./Inputs";

const ContentSizeSettings = ({ props }) => {
  return (
    <div className="text-background dark:text-darkBackground w-72">
      <div>
        <h2 className="text-primary font-bold text-lg">Size</h2>
        <hr />
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="1"
            max="1200"
            label="Font Size"
            defaultValue={props.fontSize}
            handleOnChange={(e) => {
              props.setFontSize(e.target.value);
            }}
          />
          <IncrementalInput
            label="Line Height"
            min="1"
            max="750"
            step="0.1"
            defaultValue={props.lineHeight}
            handleOnChange={(e) => {
              props.setLineHeight(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSizeSettings;
