import React from "react";
import Footer from "../../Shared/Footer/Footer";

import About from "../About/About";

import Banner from "../Banner/Banner";
import BannerForm from "../BannerForm/BannerForm";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Banner banner={true} />
      <BannerForm></BannerForm>
      <Features />
      <About nav={true} />
      <h1>hellow</h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
