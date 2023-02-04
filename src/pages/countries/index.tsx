import Link from "next/link";
import { request } from "graphql-request";
import { COUNTRIES_URL } from "../../../constans/constans";
import { GetStaticProps, NextPage } from "next";
import { GetCountriesQuery } from "../../../gql/graphql";
import { graphql } from "../../../gql";
import Head from "next/head";

export const GET_COUNTRIES = graphql(`
  query GetCountries {
    countries {
      name
      code
    }
  }
`);

export const getStaticProps: GetStaticProps = async () => {
  const data = await request(COUNTRIES_URL, GET_COUNTRIES);
  return {
    props: {
      countries: data,
    },
  };
};

const Countries: NextPage<{ countries: GetCountriesQuery }> = ({
  countries,
}) => {
  return (
    <>
      <Head>
        <title>List of countries</title>
        <meta name="description" content="List of countries page" />
      </Head>
      <main className="p-10 lg:px-40 lg:py-20 min-h-screen bg-black text-xl">
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20">
          {countries.countries.map((country) => (
            <Link
              className="p-10 bg-white rounded flex flex-col flex items-center hover:text-violet-600"
              href="/countries/[code]"
              as={`/countries/${country.code}`}
              key={country.code}
            >
              <div className="text-center">
                <p>{country.name}</p>
                <p>({country.code})</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Countries;
