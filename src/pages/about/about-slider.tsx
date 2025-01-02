import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { sliderdata } from "../../shared/constants/about-constant";

const AboutSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
    >
      {sliderdata.map((item) => {
        const InstaIcon = item["insta-icon"];
        const LinkedInIcon = item["linkdln-icon"];
        const TwitterIcon = item["twitter-icon"];
        return (
          <SwiperSlide key={item.id} className="w-[300px] h-[370px] ">
            <img
              src={item.image}
              alt={item.name}
              className="object-contain w-full bg-gray-100 rounded-lg h-[250px]  "
            />
            <div className="grid content-start gap-y-1  mt-1  w-full h-[120px] ">
              <h3 className="text-xl font-medium">{item.name}</h3>
              <p className="text-base text-gray-500">{item.designation}</p>
              <div className="flex gap-x-2 ">
                <a
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                >
                  <InstaIcon size={18} />
                </a>
                <a
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default AboutSlider;
