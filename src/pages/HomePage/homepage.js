import React from "react";
import { Link } from "react-router-dom";

import AuctionScreen from "../../components/actionScreen/AuctionScreen";
import ActivityScreen from "../../components/activityScreen/ActivityScreen";
import HAPPYFACE from "../../images/happyFace.png";

import "./homepage.css";

function Homepage() {
  return (
    <section className="homeContainer">
      <SplashHeader></SplashHeader>
      <AuctionScreen></AuctionScreen>
      <ActivityScreen></ActivityScreen>
    </section>
  );
}

export default Homepage;

const SplashHeader = () => {
  return (
    <article className="splashHeader yellow">
      <div className="icon">
        <img src={HAPPYFACE} alt="" />
      </div>
      <div className="header">
        <h2>We are bitcoin</h2>
        <p>
          Latin-American fashion blockchain project selling wearables whose
          ownership is traceable in the Polygon network.
        </p>
        <Link to="/products">
          <button className="btn">Explore</button>
        </Link>
      </div>
    </article>
  );
};
