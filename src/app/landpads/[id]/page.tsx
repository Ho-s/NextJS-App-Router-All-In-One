import 'server-only';

import { apolloServerClient } from '~/graphql/apolloServerClient';
import { GET_ONE_LANDPAD } from '~/graphql/query/landpad';

import { Landpad } from '../page-ui';
import LandpadsIdUIPage from './page-ui';

const LandpadsIdpage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const client = await apolloServerClient();
  const { data } = await client.query<{ landpad: Landpad }, { id: string }>({
    query: GET_ONE_LANDPAD,
    variables: { id },
  });

  return <LandpadsIdUIPage data={data.landpad} />;
};

export default LandpadsIdpage;
