import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
function ScheduledLiveNavBar({ slug }) {
  const { daystep } = useSelector((state) => ({ ...state }));
  const database = firebase.firestore();
  const [dataurl, setdataurl] = useState([]);
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
  async function getDoc() {
    const snapshot = await database.collection("Livelinks").doc(slug).get();
    const data = await snapshot.data().array_data;

    data.map((item, index) => {
      dataurl[index] = item.url;
    });
  }
  useEffect(async () => {
    await getDoc();
  }, []);

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
                <a class="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link js-scroll-trigger"
                  href={`/scheduledlive/main/${slug}`}
                >
                  Home
                </a>
              </li>
              {dataurl.map((item, index) => {
                if (item != "") {
                  if (index == daystep.day - 1) {
                    return (
                      <li class="nav-item ">
                        <a
                          class="nav-link js-scroll-trigger active"
                          href={item}
                        >
                          Day {index + 1}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li class="nav-item ">
                      <a class="nav-link js-scroll-trigger" href={item}>
                        Day {index + 1}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ScheduledLiveNavBar;
