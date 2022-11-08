import type { GetStaticProps } from "next";
import { BaseLayout } from "../src/layout/base-layout";
import { MainComponent } from "../src/modules/main";
import { DataType } from "../src/types/cardType";


export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch("http://localhost:3000/api/products")

  const data = await res.json()

  return {
    props: {
      data: data.data,
    },
  }
}

const Home = ({ data }: DataType) => {
  return (
    <BaseLayout>
      <MainComponent data={data} />
    </BaseLayout>
  );
};

export default Home;

