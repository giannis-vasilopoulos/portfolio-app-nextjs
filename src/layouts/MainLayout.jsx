import Head from "next/head";
import Loader from "components/Loader/";
import Footer from "components/Footer";
import PropTypes from "prop-types";

function MainLayout({ children, meta, footer }) {
  const { fields: favicon } = meta.fields.favicon;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>{meta.fields.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={favicon.file.url} />
        <link
          rel="icon"
          type={favicon.file.contentType}
          sizes="32x32"
          href={favicon.file.url}
        />
        <link
          rel="icon"
          type={favicon.file.contentType}
          sizes="16x16"
          href={favicon.file.url}
        />
        <meta name="description" content={meta.fields.description} />
        <meta property="og:title" content={meta.fields.title} />
        <meta property="og:description" content={meta.fields.description} />
        <meta
          property="og:image"
          content="https://giannis-vasilopoulos.com/images/share.png"
        />
        <meta property="og:url" content="https://giannis-vasilopoulos.com/" />
        <meta
          name="apple-mobile-web-app-status-bar"
          content={meta.fields.themeColor}
        />
        <meta name="msapplication-TileColor" content={meta.fields.themeColor} />
        <meta name="theme-color" content={meta.fields.themeColor} />
      </Head>
      <main>
        <Loader />
        {children}
      </main>
      <Footer id="contact" footer={footer} />
    </>
  );
}

MainLayout.propTypes = {
  meta: PropTypes.shape({
    fields: PropTypes.object.isRequired,
  }),
  footer: PropTypes.object.isRequired,
};

export default MainLayout;
