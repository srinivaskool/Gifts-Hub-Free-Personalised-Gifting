import React from "react";
import NavBar from "./NavBars/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import "./AboutUs.css";
import Footer from "./Footers/Footer";
export default function AboutUs() {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - ABout Us Page</title>
        <meta
          name="description"
          content=" Srinivas and Dwarak built this fabulous website to send free virtual gifts. Gifts manifest our emotions and transform them into meaningful forms."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content=" personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india,"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <NavBar />
      <br />
      <br />
      <br />
      <div className=" containerdum">
        <div className="card-wrapper boom">
          <div className="card">
            <div className="card-image">
              <img
                src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                alt="profile one"
              />
            </div>
            <ul className="social-icons">
              <li>
                <a href>
                  {/* <i className="fab fa-facebook-f" /> */}
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faGithub}
                  />
                  {/* <i className="fab fa-instagram" /> */}
                </a>
              </li>
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faTwitter}
                  />
                  {/* <i className="fab fa-twitter" /> */}
                </a>
              </li>
              <li>
                <a href>
                  {/* <i className="fab fa-dribbble" /> */}
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                Srinivas Konduri
                <br />
                <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>

        {/* ////////////////// */}
        <div className="card-wrapper boom">
          <div className="card">
            <div className="card-image">
              <img
                src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                alt="profile one"
              />
            </div>
            <ul className="social-icons">
              <li>
                <a href>
                  {/* <i className="fab fa-facebook-f" /> */}
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faGithub}
                  />
                  {/* <i className="fab fa-instagram" /> */}
                </a>
              </li>
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faTwitter}
                  />
                  {/* <i className="fab fa-twitter" /> */}
                </a>
              </li>
              <li>
                <a href>
                  {/* <i className="fab fa-dribbble" /> */}
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                Dwaraka Poreddy
                <br />
                <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>

        {/* end box wrapper */}
        {/* <div className="card-wrapper">
          <div className="card profile-two">
            <div className="card-image profile-img--two">
              <img
                src="https://image.ibb.co/c9rY6J/profile02.jpg"
                alt="profile two"
              />
            </div>

            <ul className="social-icons">
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faGithub}
                  />
                </a>
              </li>
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faTwitter}
                  />
                </a>
              </li>
              <li>
                <a href>
                  <FontAwesomeIcon
                    className="aboutusfabicons"
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
            </ul>
            <div className="details jane">
              <h2>
                Dwaraka Poreddy
                <br />
                <span className="job-title">UI Designer</span>
              </h2>
            </div>
          </div>
        </div> */}
        {/* END box wrapper */}
      </div>
      {/* END container */} <br /> <br />
      <div class="aboutus">
        <div class="header-text">
          <div class="container py-5">
            <div class="row">
              <div
                class="left-text col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <p className="aboutuspara">
                  Gift-planning can be quite a challenging task given the hectic
                  schedules we all have, currently. So to waste no more time and
                  to bid goodbyes to all the reminders and alarms, we introduce
                  our automatic gift generation feature which keeps a track of
                  the D-day and time, releasing the appropriate gift component
                  on the desired day! Lead a guilt-free life once you choose
                  your suitable package and customize them accordingly, because
                  we at Gift’s Hub promise to deliver blissful content as and
                  when you intend us to!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
