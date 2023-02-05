import { graphql } from "../../gql";

export const GET_ONE_COUNTRY = graphql(`
  query GetOneCountry($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      languages {
        name
      }
    }
  }
`);

export const GET_ALL_COUNTRIES = graphql(`
  query GetAllCountries {
    countries {
      code
    }
  }
`);

export const GET_POLAND = graphql(`
  query GetPoland {
    country(code: "PL") {
      name
      code
    }
  }
`);

export const GET_COUNTRIES = graphql(`
  query GetCountries {
    countries {
      name
      code
    }
  }
`);
