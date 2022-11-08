import type {NextPage} from "next";
import {BaseLayout} from "../../../src/layout/base-layout";
import {ProductDetail} from "../../../src/modules/detail";




const Detail: NextPage = () => {
  return (
    <BaseLayout>
      <ProductDetail/>
    </BaseLayout>
  );
};

export default Detail;