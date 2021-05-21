import React from "react";
import "./BrownGreetingCard.css";
export default function BrownGreetingCard() {
  return (
    <div className="browngreetingcardBody">
      <div translate="no">
        <center>
          <div class="browngreetingcard">
            <div class="browngreetingback">
              <img
                class="browngreetingbackimg"
                src="https://images.unsplash.com/photo-1498159413615-882f272c24f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="1"
              />
            </div>
            <div class="browngreetingfront">
              <div class="browngreetingcover-shape-large">
                <div class="browngreetingshape-diamond"></div>
                <div class="browngreetingshape-block"></div>
              </div>
              <div class="cover-shape-small">
                <div class="browngreetingshape-diamond"></div>
                <div class="browngreetingshape-block">
                  <div class="browngreetingcake">
                    <div class="browngreetinglayer browngreetinglayer-bottom"></div>
                    <div class="browngreetinglayer browngreetinglayer-middle"></div>
                    <div class="browngreetinglayer browngreetinglayer-top"></div>
                    <div class="browngreetingicing"></div>
                    <div class="browngreetingdrip browngreetingdrip1"></div>
                    <div class="browngreetingdrip browngreetingdrip2"></div>
                    <div class="browngreetingdrip browngreetingdrip3"></div>
                    <div class="browngreetingcandle">
                      <div class="browngreetingflame"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="browngreetingtext-container">
              <p id="browngreetinghead">Happy Birthday Mom!</p>
              <p>
                Your first digital birthday browngreetingcard!{" "}
                <span class="browngreetingstrikethrough">Handcrafted</span>{" "}
                Handcoded from scratch just for you.
              </p>
              <p>Hope your day goes great!</p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
