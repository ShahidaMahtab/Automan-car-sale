import React from "react";
import Footer from "../../Shared/Footer/Footer";

import About from "../About/About";

import Banner from "../Banner/Banner";
import BannerForm from "../BannerForm/BannerForm";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <div style={{ background: "#EEF4FC" }}>
        <BannerForm></BannerForm>
        <Features />
        <About />
        <Services />
        <Reviews />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
