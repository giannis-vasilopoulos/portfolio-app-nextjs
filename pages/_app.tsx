import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.css";

function PortfolioApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default PortfolioApp;
