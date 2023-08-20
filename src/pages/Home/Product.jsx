import s from "./Product.module.css";
import ProductList from "@/components/product/ProductList";

function Product() {
  return (
    <div className={s.product}>
      <ProductList />
    </div>
  );
}

export default Product;
