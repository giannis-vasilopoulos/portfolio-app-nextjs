import MainLayout from "layouts/MainLayout";
import Fold from "pageComponents/Home/Fold/";
import About from "pageComponents/Home/About/";
import Menu from "components/Menu/";
import { getHome, getMenu } from "lib/contentful";

function Home({ homeData, menuData }) {
  const technologies = homeData.technologies.map((t) => t.fields);
  console.log(homeData);
  return (
    <MainLayout meta={homeData.metaData}>
      <Fold
        title={homeData.title}
        typingTitles={homeData.typingTitles}
        technologies={technologies}
      />
      <Menu data={menuData} />
      <About
        title={homeData.aboutTitle}
        skillsTitle={homeData.skillsTitle}
        skillsItems={homeData.skillsItems}
        aboutImage={homeData.aboutImage.fields}
        bio={homeData.aboutInfo.content[0]}
      />
    </MainLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [homeData, menuData] = await Promise.all([
    getHome(preview),
    getMenu("Main Menu"),
  ]);
  return {
    props: { preview, homeData, menuData },
    revalidate: 1,
  };
}

export default Home;
