import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Информация о матче */
export type Match = {
  __typename?: 'Match';
  awayScore: Scalars['Float'];
  awayTeam: Team;
  date: Scalars['String'];
  homeScore: Scalars['Float'];
  homeTeam: Team;
  id: Scalars['ID'];
  kickOff: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Получить матч по id */
  match: Maybe<Match>;
  /** Получить список матчей */
  matches: Array<Match>;
};

export type QueryMatchArgs = {
  id: Scalars['String'];
};

/** Информация о команде */
export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MatchQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type MatchQuery = {
  __typename?: 'Query';
  match:
    | {
        __typename?: 'Match';
        id: string;
        homeScore: number;
        awayScore: number;
        date: string;
        kickOff: string;
        homeTeam: { __typename?: 'Team'; id: string; name: string };
        awayTeam: { __typename?: 'Team'; id: string; name: string };
      }
    | null
    | undefined;
};

export type MatchesQueryVariables = Exact<{ [key: string]: never }>;

export type MatchesQuery = {
  __typename?: 'Query';
  matches: Array<{
    __typename?: 'Match';
    id: string;
    kickOff: string;
    date: string;
    homeTeam: { __typename?: 'Team'; id: string; name: string };
    awayTeam: { __typename?: 'Team'; id: string; name: string };
  }>;
};

export const MatchDocument = gql`
  query Match($id: String!) {
    match(id: $id) {
      id
      homeScore
      awayScore
      homeTeam {
        id
        name
      }
      awayTeam {
        id
        name
      }
      date
      kickOff
    }
  }
`;

/**
 * __useMatchQuery__
 *
 * To run a query within a React component, call `useMatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMatchQuery(
  baseOptions: Apollo.QueryHookOptions<MatchQuery, MatchQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MatchQuery, MatchQueryVariables>(MatchDocument, options);
}
export function useMatchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MatchQuery, MatchQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MatchQuery, MatchQueryVariables>(MatchDocument, options);
}
export type MatchQueryHookResult = ReturnType<typeof useMatchQuery>;
export type MatchLazyQueryHookResult = ReturnType<typeof useMatchLazyQuery>;
export type MatchQueryResult = Apollo.QueryResult<MatchQuery, MatchQueryVariables>;
export const MatchesDocument = gql`
  query Matches {
    matches {
      id
      kickOff
      date
      homeTeam {
        id
        name
      }
      awayTeam {
        id
        name
      }
    }
  }
`;

/**
 * __useMatchesQuery__
 *
 * To run a query within a React component, call `useMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMatchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMatchesQuery(
  baseOptions?: Apollo.QueryHookOptions<MatchesQuery, MatchesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MatchesQuery, MatchesQueryVariables>(MatchesDocument, options);
}
export function useMatchesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MatchesQuery, MatchesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MatchesQuery, MatchesQueryVariables>(MatchesDocument, options);
}
export type MatchesQueryHookResult = ReturnType<typeof useMatchesQuery>;
export type MatchesLazyQueryHookResult = ReturnType<typeof useMatchesLazyQuery>;
export type MatchesQueryResult = Apollo.QueryResult<MatchesQuery, MatchesQueryVariables>;
