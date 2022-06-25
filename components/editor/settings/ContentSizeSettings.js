import IncrementalInput from "./Inputs";

const ContentSizeSettings = ({ props }) => {
  return (
    <div className="text-background dark:text-darkBackground">
      <div>
        <h2 className="text-primary font-bold text-lg">Size</h2>
        <hr />
        <div className="flex justify-between mt-2">
          <IncrementalInput
            min="1"
            max="1200"
            label="Font Size"
            handleOnChange={(e) => {
              props.setFontSize(e.target.value);
            }}
          />
          <IncrementalInput
            label="Line Height"
            min="1"
            max="750"
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
