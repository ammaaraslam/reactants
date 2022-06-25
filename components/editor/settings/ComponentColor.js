const colors = [
  "#023047",
  "#ffb703",
  "#ffafcc",
  "#fb8500",
  "#e5989b",
  "#2a9d8f",
  "#00b4d8",
  "#ef233c",
  "#006d77",
  "#073b4c",
  "#118ab2",
  "#fb8500",
  "#ef476f",
  "#f08080",
  "#00b4d8",
  "#cad2c5",
  "#06d6a0",
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
