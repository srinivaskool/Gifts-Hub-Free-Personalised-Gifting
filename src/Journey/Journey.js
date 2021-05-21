import React from "react";
import "./Journey.css";

export default function Journey({
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
  heading,
}) {
  return (
    <>
      <div class="journey">
        <div class="journeyall">
          <div
            style={{ backgroundImage: "url(" + fbimg1 + ")" }}
            class="journeylefter"
          >
            <div class="journeytext">{t1}</div>
          </div>
          <div
            style={{ backgroundImage: "url(" + fbimg2 + ")" }}
            class="journeyleft"
          >
            <div class="journeytext">{t2}</div>
          </div>
          <div
            style={{ backgroundImage: "url(" + fbimg3 + ")" }}
            class="journeycenter"
          >
            <div class="journeyexplainer">
              <span class="journeyexplainer">{heading}</span>
            </div>
            <div class="journeytext">{t3}</div>
          </div>
          <div
            style={{ backgroundImage: "url(" + fbimg4 + ")" }}
            class="journeyright"
          >
            <div class="journeytext">{t4}</div>
          </div>
          <div
            style={{ backgroundImage: "url(" + fbimg5 + ")" }}
            class="journeyrighter"
          >
            <div class="journeytext">{t5}</div>
          </div>
        </div>
      </div>
    </>
  );
}
