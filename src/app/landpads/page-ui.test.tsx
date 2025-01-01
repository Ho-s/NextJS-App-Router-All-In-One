import { render, screen } from '@testing-library/react';

import LandpadsUIPage from './page-ui';

describe('LandpadsUIPage', () => {
  it('should display loading indicator when loading is true', () => {
    render(<LandpadsUIPage data={undefined} loading={true} />);

    expect(screen.getByText('loading')).toBeInTheDocument();
  });

  it('should render landpad data when loading is false', () => {
    const data = [
      {
        attempted_landings: null,
        details: 'Landing site details',
        full_name: 'Landing Pad 1',
        id: '1',
        landing_type: null,
        location: { latitude: 0, longitude: 0, name: 'Location 1', region: 'Region 1' },
        status: 'Active',
        successful_landings: null,
        wikipedia: 'https://wikipedia.org',
      },
    ];

    render(<LandpadsUIPage data={data} loading={false} />);

    expect(screen.getByText('Landing Pad 1')).toBeInTheDocument();
    expect(screen.getByText('Landing site details')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('https://wikipedia.org')).toBeInTheDocument();
  });
});
