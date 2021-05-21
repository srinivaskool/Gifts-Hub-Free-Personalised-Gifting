import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function LiveNavBar() {
  const [navstate, setnavstate] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setnavstate(true);
    } else {
      setnavstate(false);
    }
  };
  return (
    <div>
      <nav
        class={
          !navstate
            ? "navbar navbar-expand-lg navbar-dark fixed-top"
            : "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
        }
        id="mainNav"
      >
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href={`/`}>
            <img src={require("../Images/giftshublogo.png")} alt="" />
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ml-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href={`/aboutus`}>
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
