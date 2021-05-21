import React from "react";
import "./HoneyComb.css";

export default function HoneyComb({
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
  return (
    <body className="hexagonalAnimation" translate="no">
      <base target="_blank" />
      <ul className="hexagonalAnimationul">
        <li className="hexagonalAnimationli">
          <img alt="1" className="hexagonalAnimationimg" src={fbimg1} />
        </li>
        <li className="hexagonalAnimationli">
          <img alt="1" className="hexagonalAnimationimg" src={fbimg2} />
        </li>
        <li className="hexagonalAnimationli">
          <img alt="1" className="hexagonalAnimationimg" src={fbimg3} />
        </li>
        <li className="hexagonalAnimationli">
          <img alt="1" className="hexagonalAnimationimg" src={fbimg4} />
        </li>
        <li className="hexagonalAnimationli">
          <img alt="1" className="hexagonalAnimationimg" src={fbimg5} />
        </li>
        <li className="hexagonalAnimationli">
          <img alt="1" className="hexagonalAnimationimg" src={fbimg6} />
        </li>
      </ul>
    </body>
  );
}
