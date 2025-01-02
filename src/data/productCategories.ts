import { IProductCategory } from "../shared/types";
import phones from "../assets/icons/category/phones.svg";
import phonesl from "../assets/icons/category/phones-light.svg";
import computers from "../assets/icons/category/computers.svg";
import computersl from "../assets/icons/category/computers-light.svg";
import smartwatch from "../assets/icons/category/smartwatch.svg";
import smartwatchl from "../assets/icons/category/smartwatch-light.svg";
import camera from "../assets/icons/category/camera.svg";
import cameral from "../assets/icons/category/camera-light.svg";
import headphone from "../assets/icons/category/headphone.svg";
import headphonel from "../assets/icons/category/headphone-light.svg";
import gamepad from "../assets/icons/category/gamepad.svg";
import gamepadl from "../assets/icons/category/gamepad-light.svg";

export const productCategories: IProductCategory[] = [
  {
    id: "0001",
    name: "Phones",
    icon: { dark: phones, light: phonesl },
  },
  {
    id: "0002",
    name: "Computers",
    icon: { dark: computers, light: computersl },
  },
  {
    id: "0003",
    name: "SmartWatch",
    icon: {
      dark: smartwatch,
      light: smartwatchl,
    },
  },
  {
    id: "0004",
    name: "Camera",
    icon: {
      dark: camera,
      light: cameral,
    },
  },
  {
    id: "0005",
    name: "Headphones",
    icon: {
      dark: headphone,
      light: headphonel,
    },
  },
  {
    id: "0006",
    name: "Gaming",
    icon: {
      dark: gamepad,
      light: gamepadl,
    },
  },
];
