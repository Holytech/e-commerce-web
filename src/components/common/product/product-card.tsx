import { productCard } from "../../../shared/constants/product-card";
import SingleProduct from "./single-product-card";

const ProductCard = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 my-10">
      {productCard.map((item, idx) => (
        <SingleProduct
          key={idx}
          id={item.id}
          img={item.image}
          name={item.name}
          star={item.rating}
          isLiked={true}
          price={item?.price as number}
          color={item.color}
          isNew={item.isNew}
          discountPrice={item.discountPrice}
        />
      ))}
    </div>
  );
};

export default ProductCard;
