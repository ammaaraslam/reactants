import Head from "next/head";
import { useSession } from "next-auth/react";
import Header from "../components/Header";
import { PrimaryButton } from "../components/Buttons";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiCss3,
  SiReact,
} from "react-icons/si";
import Footer from "../components/Footer";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div>
      <Head>
        <title>Reactants | A Custom React Components Builder</title>
        <meta name="description" content="A Custom React Components Builder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="w-full h-full bg-background">
        <div className="pt-28 flex">
          <div className="ml-auto mr-auto max-w-5xl text-center">
            <span className="text-secondary font-extrabold text-xl uppercase">
              open source
            </span>
            <h1 className="text-text font-extrabold text-8xl">
              Easily Build Custom React Components
            </h1>
            <p className="text-text font-semibold text-3xl mt-6 max-w-3xl ml-auto mr-auto">
              Reactants is an open-source platform to build custom ReactJS
              components without coding.
            </p>
            <div className="mt-7">
              <PrimaryButton type="big">Get Started</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="w-full pl-6 pr-6 mt-12 inline-flex text-center justify-center items-center text-text">
          <SiStyledcomponents className="mr-24 text-6xl" />
          <SiTailwindcss className="mr-24 text-6xl" />
          <SiReact className="mr-24 text-6xl" />
          <SiCss3 className="text-6xl" />
        </div>
        <div className="w-4/5 h-96 border-tertiary border-4 mt-8 ml-auto mr-auto" />
        <div className="w-full pl-4 pr-4 mt-28">
          <div className="flex">
            <div className="w-1/2 h-80 bg-primary"></div>
            <div className="ml-24 max-w-xl">
              <h2 className="text-primary text-4xl font-extrabold">
                Choose from Pre-built Component Templates
              </h2>
              <p className="text-text text-2xl font-semibold">
                Kick start your component with pre-built components like
                Buttons, Cards, Texts or create and save your own templates
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pl-4 pr-4 mt-24">
          <div className="flex">
            <div className="mr-24 max-w-xl">
              <h2 className="text-secondary text-4xl font-extrabold">
                Build Codeless Components
              </h2>
              <p className="text-text text-2xl font-semibold">
                Create your preferred component with an easy-to-use editor,
                without writing a single line of code.
              </p>
            </div>
            <div className="w-1/2 h-80 bg-secondary"></div>
          </div>
        </div>
        <div className="w-full pl-4 pr-4 mt-24">
          <div className="flex">
            <div className="w-1/2 h-80 bg-tertiary"></div>
            <div className="ml-24 max-w-xl">
              <h2 className="text-tertiary text-4xl font-extrabold">
                Use Your Component The Way You Want
              </h2>
              <p className="text-text text-2xl font-semibold">
                Copy the component's style to match with the rest of your React
                app's codebase. Choose between CSS, Styled-Components or
                TailwindCSS.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-24 p-8 bg-text">
          <div className="ml-auto mr-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Create your new custom component now
            </h2>
            <PrimaryButton type="big">Get Started, It's Free</PrimaryButton>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
