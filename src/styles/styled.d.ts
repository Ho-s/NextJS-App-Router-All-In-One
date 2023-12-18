import 'styled-components';

import { colors, sizes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    sizes: typeof sizes;
  }
}
