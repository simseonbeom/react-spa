import useFetchData from "@/hooks/useFetchData";
import ProductItem from "./ProductItem";
import s from "./ProductList.module.css";







function ProductList() {

  const {data,isLoading,error} = useFetchData('https://kindtiger.pockethost.io/api/collections/products/records')


  return (
    <ul className={s.list}>
      {
        data && data.items?.toReversed().map((item)=>{
          return <ProductItem key={item.id} item={item} />
        })
      }
    </ul>
  );
}

export default ProductList;
