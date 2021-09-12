import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./AuctionScreen.css";
import AVATAR from "../../images/avatar.png";
function AuctionScreen() {
  // const [pageActive, setPageActive] = useState(false);
  const [timerDays, setTImerDays] = useState("00");
  const [timerHours, setTImerHours] = useState("00");
  const [timerMinutes, setTImerMinutes] = useState("00");
  const [timerSeconds, setTImerSeconds] = useState("00");
  let interval = useRef();
  // const isMounted = useRef(true);
  //to calculate the stop timmer
  const startTimer = () => {
    const countdownDate = new Date("September 30,2021 00:00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const dayseconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTImerDays(days);
        setTImerHours(hours);
        setTImerMinutes(minutes);
        setTImerSeconds(dayseconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    const i = interval.current;

    return () => {
      clearInterval(i);
    };
  });
  return (
    <article className="auctionScreen yellow">
      <div className="auctionHeader">
        <h2>{timerDays} Days</h2>
        <h2>{timerHours} Hours</h2>
        <h2>{timerMinutes} Min</h2>
        <p>
          Auction end in:{" "}
          <font>
            {timerHours} : {timerMinutes} : {timerSeconds}
          </font>
        </p>
        <p>
          Current Bid: <font>0.045 BTC</font>
        </p>
      </div>
      <div className="auctionContent">
        <FontAwesomeIcon icon={faEllipsisH} size="lg" />

        <img src={AVATAR} alt="" />
      </div>
    </article>
  );
}

export default AuctionScreen;
