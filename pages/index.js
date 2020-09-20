import MainLayout from "layouts/MainLayout";
import Fold from "pageComponents/Home/Fold/";
import { getHome } from "lib/contentful";
import Menu from "components/Menu/";

function Home({ homeData }) {
  const technologies = homeData.technologies.map((t) => t.fields);
  return (
    <MainLayout meta={homeData.metaData}>
      <Fold
        title={homeData.title}
        typingTitles={homeData.typingTitles}
        technologies={technologies}
      />
      <Menu />
      <div>
        <h1>{homeData.title}</h1>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeData = await getHome(preview);
  return {
    props: { preview, homeData },
    revalidate: 1,
  };
}

export default Home;
