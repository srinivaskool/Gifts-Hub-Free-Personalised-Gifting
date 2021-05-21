import React, { useState, useEffect } from "react";
import "./OpenGreetingCard.css";
import { BrowserView, MobileView, TabletView } from "react-device-detect";
export default function OpenGreetingCard({
  fbimg,
  message,
  occassion,
  totext,
  fromtext,
  location,
}) {
  const [openCard, setOpenCard] = useState("gc_carrd ");

  const timer = () => {
    setTimeout(() => {
      setOpenCard("gc_carrd open");
      setTimeout(() => {
        setOpenCard("gc_carrd");
        timer();
      }, 15000);
    }, 3000);
  };

  useEffect(() => {
    timer();
  });

  return (
    <div className="opengreetingcardmaindiv">
      <div className="gc_mainCard">
        <section class="gc_containerr">
          <div className={openCard} id="theCard">
            <div class="gc_page gc_back">
              <div class="side gc_back">Jobbies</div>
              <div class="side gc_front">
                <div class="gc_hearts">
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <p>{message}</p>
                  <p> {occassion}</p>
                </div>
              </div>
            </div>
            <div class="gc_page gc_front">
              <div
                style={{
                  backgroundImage: "url(" + fbimg + ")",
                  opacity: "0.9",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  boxShadow: "0px 0px 0px 15px #dfccaf inset",
                }}
                class="side gc_back red"
              >
                <div class="gc_hearts">
                  {" "}
                  <BrowserView>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>{" "}
                  </BrowserView>
                  <TabletView>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>
                    <div class="gc_heart"></div>{" "}
                  </TabletView>
                </div>{" "}
              </div>
              <div style={{ overflow: "hidden" }} class="side gc_front">
                <div>
                  <p>
                    To <br /> <span class="red"> {totext}</span>
                  </p>
                  <p>
                    From <br /> <span class="blue">{fromtext}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
