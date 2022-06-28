import Link from "next/link";
import { SmallSecondaryButton } from "../Buttons";

const TopBar = () => {
  return (
    <div className="absolute top-0 p-3 w-full z-50 bg-background dark:bg-darkBackground shadow-md flex items-center justify-between font-roboto">
      <div className="ml-8">
        <Link href="/">Logo</Link>
      </div>
      <div className="text-darkText dark:text-text">Untitled</div>
      <div className="mr-8">
        <SmallSecondaryButton type="small" textColor="background">
          Save
        </SmallSecondaryButton>
      </div>
    </div>
  );
};

export default TopBar;
