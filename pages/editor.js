import Head from "next/head";
import SideBar from "../components/editor/SideBar";
import TopBar from "../components/editor/TopBar";

export default function Editor() {
  return (
    <div>
      <Head>
        <title>Editor - Reactants</title>
        <meta name="description" content="Editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen bg-background dark:bg-darkBackground">
        <TopBar />
        <SideBar />
      </main>
    </div>
  );
}
