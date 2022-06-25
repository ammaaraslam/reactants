import { useSession, signIn, signOut } from "next-auth/react";
import { PrimaryOutlineButton } from "./Buttons";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
  const [navActive, setNavActive] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 13 ? setNavActive(true) : setNavActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      {navActive && (
        <header className="fixed p-3 w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground bg-opacity-50 dark:bg-opacity-80 backdrop-blur-lg backdrop-saturate-150 text-darkText dark:text-text">
          <div className="p-0 ml-8 text-center inline-flex items-center justify-center">
            <span className="text-2xl font-bold">Reactants</span>
          </div>
          <div className="inline-flex font-normal text-xl font-roboto tracking-wider">
            <li className="list-none mr-8 text-greyText hover:text-darkText dark:hover:text-text transition-all duration-200">
              <Link href="/">Contribute</Link>
            </li>
            <li className="list-none text-greyText hover:text-darkText dark:hover:text-text transition-all duration-200">
              <Link href="/">About</Link>
            </li>
          </div>
          <div className="mr-8">
            {session && (
              <PrimaryOutlineButton handleOnClick={handleSignout} type="small">
                Sign Out
              </PrimaryOutlineButton>
            )}
            {!session && (
              <PrimaryOutlineButton
                handleOnClick={handleSignin}
                type="small"
                textColor="background"
              >
                Sign In
              </PrimaryOutlineButton>
            )}
          </div>
        </header>
      )}
      {!navActive && (
        <header className="fixed p-3 w-full h-fit flex items-center justify-between bg-background dark:bg-darkBackground  text-darkText dark:text-text">
          <div className="p-0 ml-8 text-center inline-flex items-center justify-center">
            <span className="text-2xl font-bold">Reactants</span>
          </div>
          <div className="inline-flex font-normal text-xl font-roboto tracking-wider">
            <li className="list-none mr-8 text-greyText hover:text-darkText dark:hover:text-text transition-all duration-200">
              <Link href="/">Contribute</Link>
            </li>
            <li className="list-none text-greyText hover:text-darkText dark:hover:text-text transition-all duration-200">
              <Link href="/">About</Link>
            </li>
          </div>
          <div className="mr-8">
            {session && (
              <PrimaryOutlineButton handleOnClick={handleSignout} type="small">
                Sign Out
              </PrimaryOutlineButton>
            )}
            {!session && (
              <PrimaryOutlineButton
                handleOnClick={handleSignin}
                type="small"
                textColor="background"
              >
                Sign In
              </PrimaryOutlineButton>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
