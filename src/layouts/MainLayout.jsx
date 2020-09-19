import Head from "next/head";

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
      </Head>
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
