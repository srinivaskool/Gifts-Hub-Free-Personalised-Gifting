import React from "react";
import "./VioletGreetingCard.css";
export default function VioletGreetingCard() {
  return (
    <div id="violetgreetingcard">
      <div class="violetgreetcard">
        <div class="violetgreetingback">
          <img
            className="violetgreetingbackimg"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        </div>
        <div class="violetgreetingfront">
          <div class="imgset">
            <img
              alt="1"
              width="100%"
              src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
            />
          </div>
        </div>
        <div class="text-container">
          <p id="head">Happy Birthday அத்தான்!</p>
          <p>
            I hope your special day will bring you lots of happiness, love, and
            fun. You deserve them a lot. Enjoy!
          </p>
          <p>Hope your day goes great!</p>
        </div>
      </div>
    </div>
  );
}
