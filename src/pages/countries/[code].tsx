import { request } from "graphql-request";
import { COUNTRIES_URL } from "../../GraphQL/constans";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { GetOneCountryQuery } from "../../../gql/graphql";
import Head from "next/head";
import { GET_ALL_COUNTRIES, GET_ONE_COUNTRY } from "../../GraphQL/Queries";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request(COUNTRIES_URL, GET_ALL_COUNTRIES);
  return {
    paths: data.countries.map(
      (country: { code: string }) => `/countries/${country.code}`
    ),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { code: string };
}) => {
  const { code } = params;
  const data = await request(COUNTRIES_URL, GET_ONE_COUNTRY, {
    code,
  });
  return {
    props: {
      country: data,
    },
  };
};

const Country: NextPage<{ country: GetOneCountryQuery }> = ({ country }) => {
  return (
    <>
      <Head>
        <title>Country</title>
        <meta name="description" content="Country page" />
      </Head>
      <main className="min-h-screen bg-black flex justify-center items-center text-xl">
        <section className="p-10 bg-white rounded flex flex-col flex text-center gap-3">
          <p>
            {country.country?.name} ({country.country?.code}){" "}
            {country.country?.emoji}
          </p>
          <div>
            <ul>
              {country.country?.languages.map((language) => (
                <li className="text-base" key={language.name}>
                  {language.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Country;
