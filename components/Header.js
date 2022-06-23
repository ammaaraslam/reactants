import { useSession, signIn, signOut } from "next-auth/react";
import { PrimaryButton } from "./Buttons";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header className="fixed p-3 w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg backdrop-saturate-150 text-darkText dark:text-text ">
      <div className="p-0 ml-2">
        <span className="text-2xl font-bold">Reactants</span>
      </div>
      <div className="inline-flex font-bold text-xl font-roboto tracking-wider">
        <li className="list-none mr-8 decoration-2 underline-offset-4 hover:underline hover:text-tertiary decoration-tertiary transition-all duration-200">
          <Link href="/">Contribute</Link>
        </li>
        <li className="list-none decoration-2 underline-offset-4 hover:underline hover:text-tertiary decoration-tertiary transition-all duration-200">
          <Link href="/">About</Link>
        </li>
      </div>
      {session && (
        <PrimaryButton
          handleOnClick={handleSignout}
          type="small"
          buttonText="Sign Out"
        >
          Sign Out
        </PrimaryButton>
      )}
      {!session && (
        <PrimaryButton
          handleOnClick={handleSignin}
          type="small"
          textColor="background"
        >
          Sign In
        </PrimaryButton>
      )}
    </header>
  );
};

export default Header;
