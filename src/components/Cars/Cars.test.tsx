import { composeStories } from '@storybook/react';
import { cleanup, screen } from '@testing-library/react';

import { afterAll, describe } from '@jest/globals';

import { customRender } from '~/libs/customRender';

import * as stories from './Cars.stories';

const { Primary: PrimaryTest } = composeStories(stories);

afterAll(() => {
  cleanup();
});

describe('Cars Test', () => {
  it('Do Cars test', async () => {
    await PrimaryTest.load();

    customRender(<PrimaryTest />);
    const firstLink = screen.getAllByRole('link', {})[0];
    expect(firstLink).toHaveAttribute('href', '/cars/1');
  });
});
