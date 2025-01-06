import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderdata } from "../../shared/constants/about-constant";

const AboutSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel responsive={responsive} showDots={true}>
      {sliderdata.map((item) => {
        const InstaIcon = item["insta-icon"];
        const LinkedInIcon = item["linkdln-icon"];
        const TwitterIcon = item["twitter-icon"];
        return (
          <div key={item.id} className="min-w-[300px] h-[370px] sm:ml-2">
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
          </div>
        );
      })}
    </Carousel>
  );
};

export default AboutSlider;
