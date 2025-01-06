import { useRef, useState } from "react";
import CarouselControl from "./carousel-control";
import { browseByCategoryData } from "./home-data";

const BrowseByCategory = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [selectCategory, setSelectCategory] = useState("1");
  return (
    <div className="grid  my-8">
      <div className="">
        <div className="flex gap-6 my-5">
          <div className="w-2 h- bg-[#DB4444] rounded-sm " />
          <h1 className="text-[#DB4444] font-[600]  ">Categories</h1>
        </div>
        <div className="flex gap-6 my-5 w-full justify-between items-center">
          <h1 className="text-3xl font-[600]  ">Browse By Category</h1>
          <div className="flex items-center gap-5">
            <CarouselControl
              sliderRef={sliderRef}
              sliderType="categorySlider"
            />
          </div>
        </div>
      </div>
      <div
        className="flex w-full gap-5 overflow-x-scroll  my-5 scrollbar-hide "
        ref={sliderRef}
      >
        {browseByCategoryData.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectCategory(item.id)}
            className={`${
              selectCategory === item.id ? "bg-[#DB4444]" : ""
            } border min-w-[170px] h-[145px] flex flex-col justify-center items-center`}
          >
            <div className="col-span-2">
              {
                <item.icon
                  size={45}
                  color={selectCategory === item.id ? "#fff" : "black"}
                />
              }
            </div>
            <div
              className={`${
                selectCategory === item.id ? "text-white" : "text-black"
              } col-span-2 text-[14px]`}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
