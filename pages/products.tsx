import {BaseLayout} from "../src/layout/base-layout";
import {CartProducts} from "../src/modules/cart-products";

function Products() {
  return (
    <BaseLayout>
      <CartProducts/>
    </BaseLayout>
  );
};

export default Products;