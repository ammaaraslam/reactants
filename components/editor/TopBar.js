const TopBar = () => {
  return (
    <div className="p-3 w-full bg-background dark:bg-darkBackground shadow-md flex items-center justify-between font-roboto">
      <div className="ml-8">Logo</div>
      <div className="text-darkText dark:text-text">Untitled</div>
      <div className="mr-8">Save</div>
    </div>
  );
};

export default TopBar;
