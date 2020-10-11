import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);
dom.watch();

function PortfolioApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default PortfolioApp;
