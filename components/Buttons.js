export const PrimaryButton = ({ handleOnClick, children, type, textColor }) => {
  if (type == "small") {
    return (
      <button
        type="button"
        className={`p-2 w-24 bg-primary rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-roboto font-bold text-${textColor} text-xl text-center`}
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
        className="p-5 w-fit bg-primary rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-extrabold text-darkText text-2xl text-center"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="p-3 w-fit bg-primary rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-bold text-darkText text-xl text-center"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }
};

export const SecondaryButton = ({
  handleOnClick,
  children,
  type,
  textColor,
}) => {
  if (type == "small") {
    return (
      <button
        type="button"
        className={`p-2 w-fit bg-secondary rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-roboto font-bold text-${textColor} text-xl text-center`}
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
        className={`p-4 w-fit bg-secondary rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-roboto font-extrabold text-${textColor} text-3xl text-center`}
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`p-4 w-fit bg-secondary rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-roboto font-extrabold text-${textColor} text-2xl text-center`}
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }
};
