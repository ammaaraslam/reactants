export const PrimaryButton = ({ handleOnClick, children, type, textColor }) => {
  if (type == "small") {
    return (
      <button
        type="button"
        className={`p-2 w-24 bg-primary inline-flex justify-center items-center hover:translate-x-1 hover:-translate-y-1 hover:shadow-primaryShadow transition-all duration-200 font-roboto font-extrabold text-text dark:text-darkBackground text-xl text-center`}
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
        className={`p-4 w-fit bg-secondary text-background dark:text-darkBackground  inline-flex justify-center items-center hover:translate-x-1 hover:-translate-y-1 hover:shadow-secondaryShadow hover:text-secondaryDark transition-all duration-200 font-roboto font-extrabold  text-3xl text-center`}
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

export const PrimaryOutlineButton = ({
  handleOnClick,
  children,
  type,
  textColor,
}) => {
  if (type == "small") {
    return (
      <button
        type="button"
        className={`p-2 w-24 bg-transparent border-2 border-primary inline-flex justify-center items-center hover:bg-primary transition-all duration-200 font-roboto font-bold text-primary hover:text-background hover:dark:text-darkBackground text-md text-center`}
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
        className="p-5 w-fit bg-transparent rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-extrabold text-darkText text-2xl text-center"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="p-3 w-fit bg-transparent border-1 border-primary rounded-xl inline-flex justify-center items-center hover:scale-105 transition-all duration-200 font-bold text-darkText text-xl text-center"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  }
};
