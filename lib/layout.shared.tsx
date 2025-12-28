import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Rosiko',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
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
