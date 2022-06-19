import { useSession, signIn, signOut } from "next-auth/react";
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
    <header className="p-3 w-full h-fit flex items-center justify-between bg-red-500">
      <div className="p-0 ml-2 ">
        <span className="text-xl">Reactants</span>
      </div>
      {session && (
        <a href="#" onClick={handleSignout} className="mr-2">
          Sign out
        </a>
      )}
      {!session && (
        <a href="#" onClick={handleSignin} className="mr-2">
          Sign in
        </a>
      )}
    </header>
  );
};

export default Header;
