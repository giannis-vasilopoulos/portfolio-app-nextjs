import MainLayout from "../src/layouts/MainLayout";
import Fold from "../src/pageComponents/Home/Fold/";
import { getHome } from "../src/lib/contentful";

function Home({ homeData }) {
  return (
    <MainLayout meta={homeData.metaData}>
      <Fold />
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
