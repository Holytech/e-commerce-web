import { MdArrowForwardIos, MdArrowRightAlt } from "react-icons/md";
import iphone from "../../assets/images/iphone.png";
import apple from "../../assets/images/apple_logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderData = [
  {
    id: 1,
    title: "Woman’s Fashion",
  },
  {
    id: 2,
    title: "Men’s Fashion",
  },
  {
    id: 3,
    title: "Accessories",
  },
  {
    id: 4,
    title: "Electronics",
  },
  {
    id: 6,
    title: "Home Appliances",
  },
  {
    id: 7,
    title: "Home & Lifestyle",
  },
  {
    id: 8,
    title: "Sports & Outdoor",
  },
  {
    id: 9,
    title: "Baby’s & Toys",
  },
  {
    id: 10,
    title: "Groceries & Pets",
  },
  {
    id: 11,
    title: "Health & Beauty",
  },
];

const carouselData = [
  {
    id: 1,
    title: "Woman’s Fashion",
    img: iphone,
  },
  {
    id: 2,
    title: "Men’s Fashion",
    img: iphone,
  },
  {
    id: 3,
    title: "Accessories",
    img: iphone,
  },
  {
    id: 4,
    title: "Electronics",
    img: iphone,
  },
  {
    id: 6,
    title: "Home Appliances",
    img: iphone,
  },
  {
    id: 7,
    title: "Home & Lifestyle",
    img: iphone,
  },
  {
    id: 8,
    title: "Sports & Outdoor",
    img: iphone,
  },
  {
    id: 9,
    title: "Baby’s & Toys",
    img: iphone,
  },
  {
    id: 10,
    title: "Groceries & Pets",
    img: iphone,
  },
  {
    id: 11,
    title: "Health & Beauty",
    img: iphone,
  },
];

const responsive = {
  mobile: {
    breakpoint: { max: 1600, min: 0 },
    items: 1,
  },
};

const HomeSlider = () => {
  return (
    <div className="grid sm:grid-cols-[3fr_7fr]  w-full gap-2 ">
      <div className="sm:border-r-2 border-gray-200 flex flex-col p-3 gap-2">
        {sliderData.map((item) => (
          <div className="flex items-center justify-between group cursor-pointer">
            <h1 className="text-lg capitalize">{item.title}</h1>
            <span
              className="hidden group-hover:block"
              onClick={() => console.log("clicked", item.id)}
            >
              <MdArrowForwardIos />
            </span>
          </div>
        ))}
      </div>
      <div className=" min-h-full  min-w-full  md:pt-8 md:pl-4  ">
        <Carousel
          showDots={true}
          responsive={responsive}
          className="  w-full pt-3 h-full bg-[#000000] "
          itemClass=""
          containerClass=""
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {carouselData.map((item) => (
            <div className=" grid grid-cols-2 h-full   ">
              <div className=" w-full h-full grid place-content-center ">
                <div className="  h-full w-full flex flex-col  gap-4 text-white">
                  <div className="flex items-center gap-10 ">
                    <img
                      src={apple}
                      width={10}
                      height={10}
                      className="w-[50px] h-[50px] object-contain"
                    />
                    <h1 className="text-base capitalize">iPhone 14 Series</h1>
                  </div>
                  <p className="text-4xl ">Up to 10%</p>
                  <p className="text-4xl ">off Voucher</p>
                  <div className="flex items-center w-fit ">
                    <a href="#" className=" w-full text-white  ">
                      <span className="text-lg border-b-[1px] pb-2 border-white">
                        Shop Now{" "}
                      </span>
                    </a>
                    <MdArrowRightAlt className=" text-4xl flex items-center mt-1 " />
                  </div>
                </div>
              </div>
              <div className="  flex items-center justify-center">
                <img src={item.img} className="object-contain w-full h-full" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSlider;
