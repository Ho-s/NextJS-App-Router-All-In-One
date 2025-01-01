import { render } from '@testing-library/react';

import { apolloServerClient } from '~/graphql/apolloServerClient';
import { GET_ONE_LANDPAD } from '~/graphql/query/landpad';

import LandpadsIdpage from './page';

jest.mock('../../../graphql/apolloServerClient', () => ({
  apolloServerClient: jest.fn(),
}));

describe('LandpadDetailPage', () => {
  it('should call useQuery with correct variables', async () => {
    const response = {
      attempted_landings: null,
      details: 'details',
      full_name: 'full_name',
      id: 'id',
      landing_type: null,
      location: { latitude: 0, longitude: 0, name: 'name', region: 'region' },
      status: 'status',
      successful_landings: null,
      wikipedia: 'wikipedia',
    };

    const mockClient = {
      query: jest.fn().mockResolvedValue({ data: { landpad: response } }),
    };
    (apolloServerClient as jest.Mock).mockResolvedValue(mockClient);

    const params = { id: '1' };

    render(await LandpadsIdpage({ params: Promise.resolve(params) }));

    expect(mockClient.query).toHaveBeenCalledWith({
      query: GET_ONE_LANDPAD,
      variables: params,
    });
  });
});
