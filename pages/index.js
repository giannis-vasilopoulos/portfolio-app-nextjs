import MainLayout from "layouts/MainLayout";
import Fold from "pageComponents/Home/Fold/";
import About from "pageComponents/Home/About/";
import { getHome, getMenu, getFooter } from "lib/contentful";

function Home({ homeData, menuData, footerData }) {
  const technologies = homeData.technologies.map((t) => t.fields);

  return (
    <MainLayout meta={homeData.metaData} footer={footerData}>
      <Fold
        title={homeData.title}
        typingTitles={homeData.typingTitles}
        technologies={technologies}
        menuData={menuData}
      />
      <About
        title={homeData.aboutTitle}
        skillsTitle={homeData.skillsTitle}
        skillsItems={homeData.skillsItems}
        aboutImage={homeData.aboutImage.fields}
        bio={homeData.aboutInfo.content[0]}
        toolsTitle={homeData.toolsTitle}
        toolsImages={homeData.toolsImages}
      />
    </MainLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const [homeData, menuData, footerData] = await Promise.all([
    getHome(preview),
    getMenu("Main Menu"),
    getFooter("Main Footer"),
  ]);
  return {
    props: { preview, homeData, menuData, footerData },
    revalidate: 1,
  };
}

export default Home;
