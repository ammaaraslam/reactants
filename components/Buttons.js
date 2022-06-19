export const PrimaryButton = ({ handleOnClick, children, type }) => {
  if (type == "small") {
    return (
      <button
        type="button"
        className="p-2 w-24 bg-primary rounded-xl hover:scale-105 transition-all duration-200 font-bold text-text text-base"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }
  if (type == "big") {
    return (
      <button
        type="button"
        className="p-5 w-fit bg-primary rounded-xl hover:scale-105 transition-all duration-200 font-extrabold text-text text-2xl text-center"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="w-28 p-3 bg-primary"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }
};
