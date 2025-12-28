import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Rosiko',
    },
    links: [
      {
        text: 'Phases',
        url: '/phases',
        active: 'nested-url',
      },
      {
        text: 'Overview',
        url: '/overview',
        active: 'nested-url',
      },
      {
        text: 'Codecks',
        url: 'https://team34.codecks.io/vision/2',
        external: true,
      },
    ],
  };
}
