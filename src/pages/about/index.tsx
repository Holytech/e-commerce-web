import AboutButton from "./about-button";
import AboutCenter from "./about-center";
import AboutSlider from "./about-slider";
import AboutTop from "./about-top";

const About = () => {
  return (
    <div className="w-full max-w-6xl mx-auto grid content-start gap-y-10  ">
      <AboutTop />
      <AboutCenter />
      <AboutSlider />
      <AboutButton />
    </div>
  );
};

export default About;
