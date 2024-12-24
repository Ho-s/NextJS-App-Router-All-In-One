'use client';

import { ReactNode } from 'react';

import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';
import { getCookie } from 'cookies-next/client';

import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

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

  const httpLink = createUploadLink({
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
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            linkList,
          ])
        : linkList,
  });
};

export const CustomApolloProvider = ({ children }: { children: ReactNode }) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
