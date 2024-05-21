import { composeStories } from '@storybook/react';
import { cleanup, screen } from '@testing-library/react';

import { afterAll, describe } from '@jest/globals';

import { customRender } from '~/libs/customRender';

import * as stories from './page.stories';

const { Primary: PrimaryTest } = composeStories(stories);

afterAll(() => {
  cleanup();
});

describe('RootPage Test', () => {
  it('Do RootPage test', async () => {
    customRender(<PrimaryTest />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/cars');
  });
});
