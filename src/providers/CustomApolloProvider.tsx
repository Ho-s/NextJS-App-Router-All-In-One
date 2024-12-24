'use client';

import { ReactNode } from 'react';

import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import { getCookie } from 'cookies-next/client';

import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const endpoint = 'https://spacex-production.up.railway.app/';

const defaultHeader = {
  'Content-Type': 'application/json',
};

const makeClient = () => {
  const authLink = setContext(async (_, { headers }) => {
    const token = getCookie('token');

    return {
      headers: {
        ...headers,
        ...defaultHeader,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };
  });

  const httpLink = new HttpLink({
    uri: endpoint,
  });

  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      const unauthorized = graphQLErrors.some(({ message }) => message === 'Unauthorized');
      if (unauthorized) {
        // Do something
      }
    }
  });

  const linkList = ApolloLink.from([authLink, errorLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: linkList,
  });
};

export const CustomApolloProvider = ({ children }: { children: ReactNode }) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
