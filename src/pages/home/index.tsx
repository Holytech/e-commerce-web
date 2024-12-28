import CountDown from "../../components/common/CountDown";
import Category from "./view/Category";
import Featured from "./view/Featured";
import { OurServices } from "./view/OurServices";
import ProductSection from "./view/ProductSection";
import { ThisMonth } from "./view/ThisMonth";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <ThisMonth />
      <Category />
      <CountDown />
      <ProductSection />
      <Featured />
      <OurServices />
    </>
  );
};

export default Home;
