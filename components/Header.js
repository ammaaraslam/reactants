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
    <header className="p-3 w-full h-fit flex items-center justify-between bg-background text-text">
      <div className="p-0 ml-2">
        <span className="text-2xl font-bold">Reactants</span>
      </div>
      <div className="inline-flex font-bold text-text text-xl">
        <li className="list-none mr-8">
          <Link href="/">Contribute</Link>
        </li>
        <li className="list-none">
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
        <PrimaryButton handleOnClick={handleSignin} type="small">
          Sign In
        </PrimaryButton>
      )}
    </header>
  );
};

export default Header;
