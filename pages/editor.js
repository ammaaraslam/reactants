import Head from "next/head";

export default function Editor() {
  return (
    <div>
      <Head>
        <title>Editor - Reactants</title>
        <meta name="description" content="Editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full bg-background dark:bg-darkBackground"></main>
    </div>
  );
}
