import mq from "./utils/breakpoints";
import styled from "@emotion/styled";
import MainLayout from "./layouts/MainLayout";
import { getHome } from "../lib/contentful";

const Button = styled.button(
  {
    fontSize: 18,
  },
  mq({
    color: ["red", "gray", "hotpink"],
  })
);

function Home({ homeData }) {
  return (
    <MainLayout>
      <div>
        <h1>{homeData.title}</h1>
      </div>
      <Button>This i a button</Button>
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
