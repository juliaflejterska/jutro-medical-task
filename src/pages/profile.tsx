import { useQuery } from "@apollo/client";
import Link from "next/link";
import { NextPage } from "next";
import Head from "next/head";
import { GET_POLAND } from "../GraphQL/Queries";

const Profile: NextPage = () => {
  const { loading, error, data } = useQuery(GET_POLAND);

  return (
    <>
      <Head>
        <title>Your country</title>
        <meta name="description" content="Your country page" />
      </Head>
      <main className="w-full min-h-screen bg-black flex justify-center items-center text-xl ">
        <section>
          <div className="flex flex-col flex items-center justify-center">
            {loading && <p className="text-white">Loading...</p>}
            {error && (
              <p className="text-white">
                An error occurred, please try again later.
              </p>
            )}
            {data && (
              <Link
                href="/countries/[code]"
                as={`/countries/${data.country?.code}`}
              >
                <div className="p-10 w-full h-full bg-white rounded cursor-pointer hover:text-violet-600">
                  {data.country?.name} ({data.country?.code})
                </div>
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
