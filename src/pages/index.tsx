import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <main className="min-h-screen bg-black flex justify-center items-center text-xl">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <Link href="/profile">
            <div className="p-10 bg-white rounded flex flex-col flex items-center hover:text-violet-600">
              Your country
            </div>
          </Link>
          <Link href="/countries">
            <div className="p-10 bg-white rounded flex flex-col flex items-center hover:text-violet-600">
              All countries
            </div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
