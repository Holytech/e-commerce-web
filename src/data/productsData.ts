import coat from "../assets/images/img8.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import { IProductCard } from "../shared/types";

export const thisMonthProductsData: IProductCard[] = [
  {
    id: "00001",
    name: "The North Coat",
    img: coat,
    star: 5,
    price: 360,
    discountPrice: "",
  },
  {
    id: "00002",
    name: "The East Coat",
    img: coat,
    star: 5,
    price: 360,
    discountPrice: "",
  },
  {
    id: "00003",
    name: "The South Coat",
    img: coat,
    star: 5,
    price: 360,
    discountPrice: "",
  },
  {
    id: "00004",
    name: "The West Coat",
    img: coat,
    star: 5,
    price: 360,
    discountPrice: "",
  },
];

export const productsData: IProductCard[] = [
  {
    id: "0001",
    name: "Dog Food-No Discount",
    color: [],
    price: 123,
    img: img1,
    star: 3,
    isNew: false,
    discountPrice: "",
    totalSold: 35,
  },
  {
    id: "0002",
    name: "Dslr camera-No Discount",
    color: [],
    price: 123,
    img: img2,
    star: 4,
    isNew: false,
    discountPrice: "",
    totalSold: 95,
  },
  {
    id: "0003",
    name: "Laptop-no discount",
    color: [],
    price: 123,
    img: img3,
    star: 5,
    isNew: false,
    discountPrice: "",
    totalSold: 325,
  },
  {
    id: "0004",
    name: "Curology product set",
    color: [],
    price: 123,
    img: img4,
    star: 4,
    isNew: false,
    discountPrice: "",
    totalSold: 145,
  },
  {
    id: "0005",
    name: "Kids car-with color choosing",
    color: ["red"],
    price: 123,
    img: img5,
    star: 5,
    isNew: true,
    discountPrice: "",
    totalSold: 65,
  },
  {
    id: "0006",
    name: "Soccer boat-color choosing",
    color: ["yellow", "red"],
    price: 123,
    img: img6,
    star: 5,
    isNew: false,
    discountPrice: "",
    totalSold: 35,
  },
  {
    id: "0007",
    name: "Gaming control-color choosing",
    color: ["black", "red"],
    price: 123,
    img: img7,
    star: 4.5,
    isNew: true,
    discountPrice: "",
    totalSold: 55,
  },
  {
    id: "0008",
    name: "Man jacket-color choosing",
    color: ["#184A48", "red"],
    price: 123,
    img: img8,
    star: 4.5,
    isNew: false,
    discountPrice: "",
    totalSold: 55,
  },
];

export const flashSalesProducts: IProductCard[] = [
  {
    id: "001",
    name: "HAVIT HV-G92 Gamepad",
    img: "",
    star: 5,
    price: 120,
    discountPrice: 160,
    totalSold: 88,
  },
];
