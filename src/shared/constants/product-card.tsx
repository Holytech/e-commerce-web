import gameone from "../../assets/images/game-pad-one.png";
import gametwo from "../../assets/images/game-pad-two.png";
import gamethree from "../../assets/images/game-pad-three.png";
import gamefour from "../../assets/images/game-pad-four.png";
import gamefive from "../../assets/images/game-pad-five.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";

export const PRODUCT_CARD_CONSTANTS = {
  id: "1",
  name: "Havic HV G-92 Gamepad",
  price: 199.99,
  desc: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  inStock: true,
  colours: ["#A0BCE0", "#E07575"],
  size: ["S", "M", "L", "XL"],
  images: [gameone, gametwo, gamethree, gamefour, gamefive],
  rating: 4.5,
};

export const productCard = [
  {
    id: "1",
    name: "Dog Food-No Discount",
    color: ["red", "blue"],
    price: 123,
    image: img1,
    rating: 3.5,
    isNew: true,
    discountPrice: "20%",
  },
  {
    id: "2",
    name: "Dslr camera-No Discount",
    color: ["red", "blue"],
    price: 123,
    image: img2,
    new: "new",
    rating: 3,
    isNew: true,
    discountPrice: "15%",
  },
  {
    id: "3",
    name: "Laptop-no discount",
    color: ["red", "blue"],
    price: 123,
    image: img3,
    rating: 4,
    isNew: false,
    discountPrice: "10%",
  },
  {
    id: "4",
    name: "Curology product set",
    color: ["red", "blue"],
    price: 123,
    image: img4,
    rating: 2,
    isNew: true,
    discountPrice: "15%",
  },
  {
    id: "5",
    name: "Kids car-with color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img5,
    rating: 4,
    isNew: true,
    discountPrice: "5%",
  },
  {
    id: "6",
    name: "Soccer boat-color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img6,
    new: "new",
    rating: 4,
    isNew: false,
  },
  {
    id: "7",
    name: "Gaming control-color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img7,
    rating: 1,
    isNew: true,
    discountPrice: "15%",
  },
  {
    id: "8",
    name: "Man jacket-color choosing",
    color: ["red", "blue"],
    price: 123,
    image: img8,
    rating: 2,
    isNew: true,
  },
];
