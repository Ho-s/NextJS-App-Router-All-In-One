import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import 'jest-styled-components';

import { CustomWrapper } from './CustomWrapper';

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: CustomWrapper, ...options });

export * from '@testing-library/react';
