import Instagram from "../../assets/icons/instagram";
import Linkdln from "../../assets/icons/linkdln";
import TwitterIcon from "../../assets/icons/twitter-icon";
import imageone from "../../assets/images/about-slider-image-one.png";
import imagetwo from "../../assets/images/about-slider-image-two.png";
import imagethree from "../../assets/images/about-slider-image-three.png";
import HomeAboutIcon from "../../assets/icons/home-about-icon";
import DollarBagAboutIcon from "../../assets/icons/dollar-bag-about-icon";
import ChartAboutIcon from "../../assets/icons/chart-about-icon";

export type SliderItemProp = {
  id: string;
  name: string;
  designation: string;
  image: string;
  link: string;
  "insta-icon": ({ size }: { size: number }) => JSX.Element;
  "linkdln-icon": ({ size }: { size: number }) => JSX.Element;
  "twitter-icon": ({ size }: { size: number }) => JSX.Element;
};

export const sliderdata: SliderItemProp[] = [
  {
    id: "1",
    name: "Tom Cruise",
    designation: "CEO of Apple",
    image: imageone,
    link: "https://www.instagram.com/tomcruise/",
    "insta-icon": Instagram,
    "linkdln-icon": Linkdln,
    "twitter-icon": TwitterIcon,
  },
  {
    id: "2",
    name: "Emma Watson",
    designation: "Managing Director",
    image: imagetwo,
    link: "https://www.instagram.com/tomcruise/",
    "insta-icon": Instagram,
    "linkdln-icon": Linkdln,
    "twitter-icon": TwitterIcon,
  },
  {
    id: "3",
    name: "Tom Cruise",
    designation: "CEO of Apple",
    image: imagethree,
    link: "https://www.instagram.com/tomcruise/",
    "insta-icon": Instagram,
    "linkdln-icon": Linkdln,
    "twitter-icon": TwitterIcon,
  },
  {
    id: "4",
    name: "Tom Cruise",
    designation: "CEO of Apple",
    image: imagethree,
    link: "https://www.instagram.com/tomcruise/",
    "insta-icon": Instagram,
    "linkdln-icon": Linkdln,
    "twitter-icon": TwitterIcon,
  },
  {
    id: "5",
    name: "Tom Cruise",
    designation: "CEO of Apple",
    image: imagethree,
    link: "https://www.instagram.com/tomcruise/",
    "insta-icon": Instagram,
    "linkdln-icon": Linkdln,
    "twitter-icon": TwitterIcon,
  },
];

export const aboutData = [
  {
    id: "1",
    name: "Sallers active our site",
    count: "10.5k ",
    icon: HomeAboutIcon,
  },
  {
    id: "2",
    name: "Mopnthly Produduct Sale",
    count: "33k",
    icon: DollarBagAboutIcon,
  },
  {
    id: "3",
    name: "Customer active in our site",
    count: "45.5k",
    icon: ChartAboutIcon,
  },
  {
    id: "4",
    name: "Anual gross sale in our site",
    count: "25k",
    icon: DollarBagAboutIcon,
  },
];
