import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT."
        text="Hi, I'm Shantanu, A highly resourceful software engineer specializing in front-end development, skilled in developing
              seamless, responsive & secure web applications to optimize user experience."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
