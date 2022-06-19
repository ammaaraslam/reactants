export const PrimaryButton = ({ handleOnClick, buttonText }) => {
  return (
    <button type="button" onClick={handleOnClick}>
      {buttonText}
    </button>
  );
};
