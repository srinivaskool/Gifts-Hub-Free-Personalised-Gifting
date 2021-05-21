import React, { useState, useEffect } from "react";
import "./Cubes.css";

export default function Cubes({
  fbimg1,
  fbimg2,
  fbimg3,
  fbimg4,
  fbimg5,
  fbimg6,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
}) {
  function handleClick() {
    const min = 1;
    const max = 24;
    const cube = document.getElementById("cube");
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);
  }

  function getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }

  return (
    <div id="threeDcubemaindiv">
      <section class="cubecontainer">
        <div
          onClick={() => {
            handleClick();
          }}
          id="cube"
        >
          <div class="heart3d">
            <div class="boom">
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + fbimg1 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="front bob"
              >
                {t1}
              </div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + fbimg2 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="back bob"
              >
                {t2}
              </div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + fbimg3 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="right bob"
              >
                {t3}
              </div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + fbimg4 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="left  bob"
              >
                {t4}
              </div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + fbimg6 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="top bob"
              >
                {t6}
              </div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + fbimg5 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="bottom bob"
              >
                {t5}
              </div>
            </div>
            <div class="rib1"></div>
            <div class="rib2"></div>
            <div class="rib3"></div>
            <div class="rib4"></div>
            <div class="rib5"></div>
            <div class="rib6"></div>
            <div class="rib7"></div>
            <div class="rib8"></div>
            <div class="rib9"></div>
            <div class="rib10"></div>
            <div class="rib11"></div>
            <div class="rib12"></div>
            <div class="rib13"></div>
            <div class="rib14"></div>
            <div class="rib15"></div>

            <div class="rib16"></div>
            <div class="rib17"></div>
            <div class="rib18"></div>
            <div class="rib19"></div>
            <div class="rib20"></div>
            <div class="rib21"></div>
            <div class="rib22"></div>
            <div class="rib23"></div>
            <div class="rib24"></div>
            <div class="rib25"></div>
            <div class="rib26"></div>
            <div class="rib27"></div>
            <div class="rib28"></div>
            <div class="rib29"></div>
            <div class="rib30"></div>
            <div class="rib31"></div>
            <div class="rib32"></div>
            <div class="rib33"></div>
            <div class="rib34"></div>
            <div class="rib35"></div>
            <div class="rib36"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
