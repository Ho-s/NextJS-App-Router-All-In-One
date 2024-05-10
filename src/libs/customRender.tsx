import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

import 'jest-styled-components';

import { CustomWrapper } from './CustomWrapper';

export const customRender = (ui: JSX.Element, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: CustomWrapper, ...options });

export * from '@testing-library/react';
