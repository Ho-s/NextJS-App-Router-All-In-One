import { render } from '@testing-library/react';

import { useQuery } from '@apollo/client';

import { GET_LANDPADS } from '~/graphql/query/landpad';

import LandPadsPage from './page';

jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(),
  gql: jest.fn(),
}));

describe('LandPadsPage', () => {
  it('should call useQuery with correct variables', () => {
    const response = {
      data: {
        landpads: [
          {
            attempted_landings: null,
            details: 'details',
            full_name: 'full_name',
            id: 'id',
            landing_type: null,
            location: { latitude: 0, longitude: 0, name: 'name', region: 'region' },
            status: 'status',
            successful_landings: null,
            wikipedia: 'wikipedia',
          },
        ],
      },
      loading: false,
    };

    (useQuery as jest.Mock).mockReturnValue(response);

    render(<LandPadsPage />);

    expect(useQuery).toHaveBeenCalledWith(
      GET_LANDPADS,
      expect.objectContaining({
        variables: { options: { paginate: { page: 1, limit: 10 } } },
      }),
    );
  });
});
