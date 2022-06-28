import Head from "next/head";
import { useSession } from "next-auth/react";
import Header from "../components/Header";
import { BigPrimaryButton } from "../components/Buttons";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiCss3,
  SiReact,
} from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
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
      <main className="w-full h-full bg-background dark:bg-darkBackground">
        <div className="pt-44 flex">
          <div className="ml-auto mr-auto max-w-3xl text-center">
            <h1 className="p-2 text-textDark dark:text-text font-bold text-7xl tracking-wider font-display">
              Build your React components{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0061ff] to-[#60efff] opacity-90">
                without code
              </span>
            </h1>
            <p className="text-darkText dark:text-text font-semibold text-3xl mt-2 max-w-3xl ml-auto mr-auto font-roboto opacity-80">
              An open-source, no-code platform to create beautiful custom
              ReactJS UI components
            </p>
            <div className="mt-7">
              <BigPrimaryButton type="big" textColor="background">
                Get Started{" "}
                <FiArrowRight className="mt-1 ml-2 group-hover:ml-4 transition-all duration-200" />
              </BigPrimaryButton>
            </div>
          </div>
        </div>
        <SiStyledcomponents className="absolute top-40 left-44 text-5xl text-darkBackground dark:text-background opacity-40" />
        <SiTailwindcss className="absolute top-96 left-24 text-5xl text-darkBackground dark:text-background opacity-40" />
        <SiReact className="absolute top-40 right-44 text-5xl text-darkBackground dark:text-background opacity-40" />
        <SiCss3 className="absolute top-96 right-24 text-5xl text-darkBackground dark:text-background  opacity-40" />

        {/* <div className="w-full pl-6 pr-6 mt-12 inline-flex text-center justify-center items-center text-darkText dark:text-text">
          <SiStyledcomponents className="mr-36 text-7xl opacity-70 hover:opacity-100 hover:text-styledComponents" />
          <SiTailwindcss className="mr-36 text-7xl opacity-70 hover:opacity-100 hover:text-tailwind" />
          <SiReact className="mr-36 text-7xl opacity-70 hover:opacity-100 hover:text-react" />
          <SiCss3 className="text-7xl opacity-70 hover:opacity-100 hover:text-css" />
        </div> */}
        <div className="w-fit h-fit border-tertiary border-4 mt-8 ml-auto mr-auto">
          <img
            className="w-full h-full"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
        </div>
        <div className="w-full pl-4 pr-4 mt-28">
          <div className="flex">
            <div className="w-1/2 h-80 bg-primary"></div>
            <div className="ml-20 max-w-xl">
              <h2 className="text-primary text-6xl tracking-wider font-extrabold font-display">
                Choose from Pre-built Component Templates
              </h2>
              <p className="text-darkText dark:text-text text-2xl mt-1 font-semibold font-roboto">
                Kick start your component with pre-built components like
                Buttons, Cards, Texts or create and save your own templates
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pl-4 pr-4 mt-24">
          <div className="flex">
            <div className="mr-36 max-w-xl">
              <h2 className="text-secondary text-6xl tracking-wider font-extrabold font-display">
                Build Codeless Components
              </h2>
              <p className="text-darkText dark:text-text text-2xl font-semibold">
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
              <h2 className="text-tertiary text-6xl tracking-wider font-extrabold font-display">
                Use Your Component The Way You Want
              </h2>
              <p className="text-darkText dark:text-text text-2xl font-semibold">
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
            <BigPrimaryButton type="big">
              Get Started, It's Free
            </BigPrimaryButton>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
