import type { StorybookConfig } from '@storybook/nextjs';

import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {},
    },
  },
  features: {
    experimentalRSC: true,
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async config => {
    if (!config.resolve) return config;

    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...(config.resolve.plugins ?? []),
          new TsconfigPathsPlugin({
            extensions: config.resolve.extensions,
            configFile: path.resolve(__dirname, '../tsconfig.json'),
          }),
        ],
        modules: [path.resolve(__dirname, '..', 'src'), 'node_modules'],
        alias: {
          ...config.resolve.alias,
          '~/src': path.resolve(__dirname, '../src'),
        },
      },
    };
  },
};
export default config;
