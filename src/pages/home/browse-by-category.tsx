import { useRef, useState } from "react";
import { browseByCategoryData } from "./home-data";
import { SectionHeader } from "./view/SectionHeader";

const BrowseByCategory = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [selectCategory, setSelectCategory] = useState("1");
  return (
    <div className="grid  my-8">
      <SectionHeader
        label="Categories"
        title="Browse By Category"
        slider={true}
        sliderRef={sliderRef}
        sliderType="categorySlider"
      />
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
