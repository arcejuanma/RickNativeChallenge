import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export interface Result {
  error: string | null;
  nextPage: number | null;
  results: any[] | null;
  searchTerm: string | null;
  searchCategory: string;
}

export const searchResultHandler = async (
  searchType: string,
  searchTerm: string,
  pageNumber: number
):Promise<Result> => {
  switch (searchType) {
    case "characters":
      return await searchCharactersFunction(pageNumber, searchTerm);
    case "episodes":
      return await searchEpisodesFunction(pageNumber, searchTerm);
    case "locations":
      return await searchLocationsFunction(pageNumber, searchTerm);
    default:
      return {error: null, nextPage: null, results: null, searchTerm: searchTerm, searchCategory: searchType}
  }
};

export const handleGraphQLError = (error: any): string => {
  let errorResponse: string;
  if (error.networkError === "TypeError: Failed to fetch") {
    errorResponse = "No Internet :(";
  } else if (error.message === "404: Not Found") {
    errorResponse = `No results found`;
  } else {
    errorResponse = "Something went wrong...";
  }
  return errorResponse;
};

export const searchCharactersFunction = async (
  currentPage: number = 1,
  searchTerm: string
):Promise<Result> => {
  let query = gql`
    query searchCharacters($name: String!, $page: Int!) {
      characters(filter: { name: $name }, page: $page) {
        info {
          pages
          next
          count
          prev
        }
        results {
          id
          name
          status
          species
          type
          gender
          image
        }
      }
    }
  `;
  let cleanedResult: Result = {
    error: null,
    nextPage: null,
    results: [],
    searchTerm: "",
    searchCategory: "characters",
  };
  try {
    let result = await client.readQuery({
      query,
      variables: { page: currentPage, name: searchTerm },
    });
    const { data } = result;
    cleanedResult = {
      error: null,
      nextPage: data.characters.info.next,
      results: data.characters.results,
      searchTerm: searchTerm,
      searchCategory: "characters",
    };
  } catch {
    try {
      let result = await client.query({
        query,
        variables: { page: currentPage, name: searchTerm },
      });
      const { data } = result;
      cleanedResult = {
        error: null,
        nextPage: data.characters.info.next,
        results: data.characters.results,
        searchTerm: searchTerm,
        searchCategory: "characters",
      };
    } catch (error) {
      const cleanedErrror = handleGraphQLError(error);
      cleanedResult = {
        error: cleanedErrror,
        nextPage: null,
        results: null,
        searchTerm: searchTerm,
        searchCategory: "characters",
      };
    }
  }

  return cleanedResult;
};

export const searchEpisodesFunction = async (
  currentPage: number = 1,
  searchTerm: string
):Promise<Result> => {
  let query = gql`
    query searchEpisodes($name: String!, $page: Int!) {
      episodes(filter: { name: $name }, page: $page) {
        info {
          pages
          next
        }
        results {
          id
          name
          air_date
          episode
          characters {
            id
            name
            image
          }
        }
      }
    }
  `;
  let cleanedResult: Result = {
    error: null,
    nextPage: null,
    results: [],
    searchTerm: "",
    searchCategory: "episodes",
  };
  try {
    let result = await client.readQuery({
      query,
      variables: { page: currentPage, name: searchTerm },
    });
    const { data } = result;
    cleanedResult = {
      error: null,
      nextPage: data.episodes.info.next,
      results: data.episodes.results,
      searchTerm: searchTerm,
      searchCategory: "episodes",
    };
  } catch  {
    try {
      let result = await client.query({
        query,
        variables: { page: currentPage, name: searchTerm },
      });
      const { data } = result;
      cleanedResult = {
        error: null,
        nextPage: data.episodes.info.next,
        results: data.episodes.results,
        searchTerm: searchTerm,
        searchCategory: "episodes",
      };
    } catch (error) {
      const cleanedErrror = handleGraphQLError(error);
      cleanedResult = {
        error: cleanedErrror,
        nextPage: null,
        results: null,
        searchTerm: searchTerm,
        searchCategory: "episodes",
      };
    }
  }
  return cleanedResult;
};

export const searchLocationsFunction = async (
  currentPage: number = 1,
  searchTerm: string
):Promise<Result> => {
  let query = gql`
    query searchLocations($name: String!, $page: Int!) {
      locations(filter: { name: $name }, page: $page) {
        info {
          pages
          next
        }
        results {
          id
          name
          type
          dimension
          residents {
            id
            name
            image
          }
        }
      }
    }
  `;
  let cleanedResult: Result = {
    error: null,
    nextPage: null,
    results: [],
    searchTerm: "",
    searchCategory: "locations",
  };
  try {
    let result = await client.readQuery({
      query,
      variables: { page: currentPage, name: searchTerm },
    });
    const { data } = result;
    cleanedResult = {
      error: null,
      nextPage: data.locations.info.next,
      results: data.locations.results,
      searchTerm: searchTerm,
      searchCategory: "locations",
    };
  } catch  {
    try {
      let result = await client.query({
        query,
        variables: { page: currentPage, name: searchTerm },
      });
      const { data } = result;
      cleanedResult = {
        error: null,
        nextPage: data.locations.info.next,
        results: data.locations.results,
        searchTerm: searchTerm,
        searchCategory: "locations",
      };
    } catch (error) {
      const cleanedErrror = handleGraphQLError(error);
      cleanedResult = {
        error: cleanedErrror,
        nextPage: null,
        results: null,
        searchTerm: searchTerm,
        searchCategory: "locations",
      };
    }
  }
  return cleanedResult;
};
