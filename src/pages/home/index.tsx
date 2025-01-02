import BrowseByCategory from "./browse-by-category";
import FlashSale from "./flash-sale";
import HomeSlider from "./home-slider";

const Home = () => {
  return (
    <>
      <div>
        <HomeSlider />
        <FlashSale />
        <BrowseByCategory />
      </div>
    </>
  );
};

export default Home;
