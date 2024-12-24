'use client';

import { useQuery } from '@apollo/client';

import { GET_LANDPADS } from '~/graphql/query/landpad';

import PostUIPage, { Landpad } from './page-ui';

const PostPage = () => {
  const { data, loading } = useQuery<
    { landpads: Landpad[] },
    { options: { paginate: { page: number; limit: number } } }
  >(GET_LANDPADS, {
    variables: { options: { paginate: { page: 1, limit: 10 } } },
  });

  return <PostUIPage data={data?.landpads} loading={loading} />;
};

export default PostPage;
