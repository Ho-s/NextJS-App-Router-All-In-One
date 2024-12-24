import { gql } from '@apollo/client';

export const GET_LANDPADS = gql`
  query {
    landpads {
      id
      wikipedia
      successful_landings
      status
      location {
        region
        name
        longitude
        latitude
      }
      landing_type
      full_name
      details
      attempted_landings
    }
  }
`;
