const colors = [
  "#5271ff",
  "#5271ff",
  "#5271ff",
  "#5271ff",
  "#5271ff",
  "#5271ff",
  "#5271ff",
  "#5271ff",
  "#5271ff",
];

const ComponentColorSettings = ({ props }) => {
  return (
    <div className="text-background dark:text-darkBackground">
      <div>
        <h2 className="text-primary font-bold text-lg">
          Select Background Color
        </h2>
        <hr />
        <div className="flex flex-wrap justify-center ml-auto mr-auto overflow-auto whitespace-nowrap items-center h-9/10 mt-1">
          {colors.map((c) => (
            <div
              key={c}
              className={`w-11 h-11 inline-flex m-2 rounded-xl ml-1 text-center`}
              style={{ background: c }}
              onClick={() => {
                props.setComponentColor(c);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentColorSettings;
