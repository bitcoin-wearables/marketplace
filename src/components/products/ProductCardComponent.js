import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faShareAlt } from "@fortawesome/free-solid-svg-icons";

import "./ProductCardComponent.css";

function ProductCardComponent({ img, name, url, detail }) {
  return (
    <>
      <div className="productCard">
        <FontAwesomeIcon icon={faEllipsisH} size="lg" />
        <div>
          <div className="imgDiv">
            <img src={img} alt="" />
          </div>
          <div className="cardBody">
            <div className="top">
              <h3>{name}</h3>
              <button>Place a bid</button>
            </div>
            <div className="bottom">
              <p>{detail}</p>
              <FontAwesomeIcon icon={faShareAlt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCardComponent;
