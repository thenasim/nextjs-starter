import Head from "next/head";
import { DarkModeButton } from "@/components/DarkModeButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full h-screen p-6 space-y-5">
        <h1 className="text-2xl text-gray-800 dark:text-white">
          Nextjs, Tailwind Starter Template
        </h1>
        <DarkModeButton />
      </div>
    </>
  );
}
