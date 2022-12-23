import type { AppProps, NextWebVitalsMetric } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.css";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV !== "production") return;
  const url = `https://www.google-analytics.com/collect?v=1&t=event&tid=UA-148440679-1&cid=${
    metric.id
  }&ec=${metric.label}&ea=${metric.name}&el=${metric.id}&ev=${Math.round(
    metric.name === "CLS" ? metric.value * 1000 : metric.value
  )}&dl=${window.location.pathname}`;
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url);
  } else {
    fetch(url, { method: "POST", keepalive: true });
  }
}

function PortfolioApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default PortfolioApp;
