import MainLayout from "layouts/MainLayout";
import Fold from "pageComponents/Home/Fold/";
import { getHome, getMenu } from "lib/contentful";
import Menu from "components/Menu/";

function Home({ homeData, menuData }) {
  const technologies = homeData.technologies.map((t) => t.fields);
  return (
    <MainLayout meta={homeData.metaData}>
      <Fold
        title={homeData.title}
        typingTitles={homeData.typingTitles}
        technologies={technologies}
      />
      <Menu data={menuData} />
    </MainLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  let [homeData, menuData] = await Promise.all([
    getHome(preview),
    getMenu("Main Menu"),
  ]);
  return {
    props: { preview, homeData, menuData },
    revalidate: 1,
  };
}

export default Home;
