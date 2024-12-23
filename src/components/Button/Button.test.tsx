import { composeStory } from '@storybook/react';
import { cleanup, screen } from '@testing-library/react';

import { afterAll, describe } from '@jest/globals';

import { customRender } from '~/libs/customRender';

import meta, { Primary } from './Button.stories';

const PrimaryButtonTest = composeStory(Primary, meta);

afterAll(() => {
  cleanup();
});

describe('Button Test', () => {
  it('On click test', () => {
    const onClickSpy = jest.fn();
    customRender(<PrimaryButtonTest onClick={onClickSpy} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
});
