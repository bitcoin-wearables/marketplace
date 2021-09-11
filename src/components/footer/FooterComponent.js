import React from "react";

import "./FooterComponent.css";
import FB from "../../images/fb.svg";
import TW from "../../images/tw.svg";
import INSTA from "../../images/in.svg";
import LKD from "../../images/lkd.svg";

function FooterComponent() {
  return (
    <footer className="footer-container white bgblack">
      <div className="page_info">
        <ul>
          <li>Home</li>
          <li>How it works</li>
          <li>Product</li>
          <li>Community</li>
        </ul>
        <div className="about">
          <h3 className="yellow">Bitcoin Wearables</h3>
          <p>
            Bitcoin Weareables designs and sells limited edition wearables whose
            ownership is traceables on the blockchain. It operated in a bid
            fashion and each edition is auctioned where the last price left of.
          </p>
        </div>
      </div>
      <div className="social_info">
        <ul>
          <li>Terms & condition</li>
          <li>Privacy policy</li>
          <li>2020 All right reserved</li>
        </ul>
        <ul>
          <li>
            <object
              data={FB}
              aria-labelledby="icon"
              type="image/svg+xml"
            ></object>
          </li>
          <li>
            <object
              data={TW}
              aria-labelledby="icon"
              type="image/svg+xml"
            ></object>
          </li>
          <li>
            <object
              data={INSTA}
              aria-labelledby="icon"
              type="image/svg+xml"
            ></object>
          </li>
          <li>
            <object
              data={LKD}
              aria-labelledby="icon"
              type="image/svg+xml"
            ></object>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
