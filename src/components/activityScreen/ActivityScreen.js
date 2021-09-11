import React from "react";
import "./ActivityScreen.css";
import { activityList } from "./activityData.js";

function ActivityScreen() {
  const activities = activityList.map(({ img, date, amount, price }, index) => {
    return (
      <div key={index} className="activityItem">
        <div className="img"></div>
        <div className="detail">
          <p>{price} BTC</p>
          <p>{date}</p>
        </div>
        <div className="amount">${amount}</div>
      </div>
    );
  });
  return (
    <article className="activityScreen ">
      <header>
        <span>Activity</span>
        <span>See All</span>
      </header>
      <div className="activityTable">{activities}</div>
    </article>
  );
}

export default ActivityScreen;
