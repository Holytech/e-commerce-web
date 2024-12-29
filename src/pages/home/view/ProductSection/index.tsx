import SingleCard from "../../../../components/common/SingleCard";
import { productsData } from "../../../../data/productsData";
import { IProductCard } from "../../../../shared/types";

const ProductSection = () => {
  return (
    <div className="grid items-center mb-10">
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 my-10">
        {productsData.map((item: IProductCard, idx: number) => (
          <SingleCard
            key={idx}
            id={String(idx)}
            img={item.img}
            name={item.name}
            star={item.star}
            isLiked={true}
            price={item?.price as number}
            color={item.color}
            isNew={item.isNew}
            discountPrice={item.discountPrice}
            discountPercentage={item?.discountPercentage}
            totalSold={item?.totalSold}
          />
        ))}
      </div>
      <div className="flex">
        <button className="w-[250px] mx-auto capitalize bg-primary-red  py-5 sm-md text-white rounded-xl">
          view all products
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
