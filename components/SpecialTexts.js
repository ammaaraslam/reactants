export const PrimarySpecialText = ({ children, textColor }) => {
  return (
    <div
      className={`bg-gradient-to-r rounded-lg from-primary to-tertiary text-${textColor} w-fit h-fit inline-flex`}
    >
      <span className="pt-1 pb-1 pl-2 pr-2"> {children}</span>
    </div>
  );
};
