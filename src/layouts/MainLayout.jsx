import Head from "next/head";
import Loader from "../components/Loader";
function MainLayout({ children, title = "Home" }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>{`${title}`}</title>

        {/*'TODO loop meta data'*/}

        <meta name="theme-color" content="#303030" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&amp;display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Loader />
        {children}
      </main>
    </>
  );
}

export default MainLayout;
