export const BigPrimaryButton = ({ handleOnClick, children }) => {
  return (
    <button
      type="button"
      className="group pt-5 pb-5 pl-10 pr-10 w-fit bg-primary rounded-full inline-flex justify-center items-center transition-all duration-400 font-roboto font-extrabold text-background dark:text-darkBackground text-2xl text-center "
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export const SmallSecondaryButton = ({
  handleOnClick,
  children,
  type,
  textColor,
}) => {
  return (
    <button
      type="button"
      className="pt-1 pb-1 pl-6 pr-6 w-fit border-2 border-darkBackground dark:border-background text-darkBackground dark:text-background rounded-full inline-flex justify-center items-center hover:bg-darkBackground dark:hover:bg-background hover:text-background dark:hover:text-darkBackground transition-all duration-200 font-roboto font-bold  text-lg text-center"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};
