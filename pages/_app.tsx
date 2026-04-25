import { useEffect } from 'react';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV !== 'production') return;
  const pathname =
    typeof globalThis !== 'undefined' && 'window' in globalThis
      ? globalThis.window.location.pathname
      : '';
  const url = `https://www.google-analytics.com/collect?v=1&t=event&tid=UA-148440679-1&cid=${
    metric.id
  }&ec=${metric.label}&ea=${metric.name}&el=${metric.id}&ev=${Math.round(
    metric.name === 'CLS' ? metric.value * 1000 : metric.value,
  )}&dl=${pathname}`;
  if (
    typeof globalThis !== 'undefined' &&
    'navigator' in globalThis &&
    globalThis.navigator.sendBeacon
  ) {
    globalThis.navigator.sendBeacon(url);
  } else {
    fetch(url, { method: 'POST', keepalive: true });
  }
}

function PortfolioApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      typeof globalThis !== 'undefined' &&
      'navigator' in globalThis &&
      globalThis.navigator.modelContext
    ) {
      globalThis.navigator.modelContext.provideContext({
        tools: [
          {
            name: 'get_portfolio_summary',
            description:
              "Retrieve a comprehensive summary of Giannis's professional portfolio, technical expertise, and core competencies",
            inputSchema: {
              type: 'object',
              properties: {},
            },
            execute: async () => {
              return {
                summary:
                  'Giannis Vasilopoulos is a Senior Frontend Engineer with specialized expertise in React, TypeScript, and modern web technologies. Comfortable across the full JS stack — including Node.js, REST APIs, and GraphQL — he is dedicated to architecting high-performance, accessible, and visually compelling user interfaces while maintaining best practices in code quality and user experience design.',
              };
            },
          },
          {
            name: 'get_contact_links',
            description:
              'Access professional contact information and social media profiles for connecting with Giannis',
            inputSchema: {
              type: 'object',
              properties: {},
            },
            execute: async () => {
              return {
                website: 'https://giannis-vasilopoulos.com/',
                linkedin: 'https://www.linkedin.com/in/giannisvasilopoulos/',
                github: 'https://github.com/giannis-vasilopoulos',
              };
            },
          },
        ],
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default PortfolioApp;
