import Link from "next/link";
import { PrimaryOutlineButton } from "../Buttons";
import GetCode from "./GetCode";

const TopBar = () => {
  return (
    <div className="absolute top-0 p-3 w-full z-30 bg-background dark:bg-darkBackground shadow-md flex items-center justify-between font-roboto">
      <div className="ml-8">
        <Link href="/">Logo</Link>
      </div>
      <div className="text-darkText dark:text-text">Untitled</div>
      <div className="mr-8">
        <PrimaryOutlineButton type="small" textColor="background">
          Save
        </PrimaryOutlineButton>
      </div>
    </div>
  );
};

export default TopBar;
