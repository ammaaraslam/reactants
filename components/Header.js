import { useSession, signIn, signOut } from "next-auth/react";
import { PrimaryButton } from "./Buttons";
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
