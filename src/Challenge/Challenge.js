import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Challenge.css";
import ErrorIcon from "@material-ui/icons/Error";
import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@material-ui/core/TextField";
import bannerimage from "../Images/banner.png";
import firebase from "../firebase";
export default function Challange({ fbimg, wishes }) {
  const [score, setscore] = useState(300);
  const [dart, setdart] = useState("0000");
  const [dartcompleted, setdartcompleted] = useState(false);
  const [darterror, setdarterror] = useState(false);
  const [time, settime] = useState("aaaaaaaa");
  const [timecompleted, settimecompleted] = useState(false);
  const [timeerror, settimeerror] = useState(false);
  const [helloans, sethelloans] = useState("aaaaa");
  const [helloanscompleted, sethelloanscompleted] = useState(false);
  const [helloanserror, sethelloanserror] = useState(false);
  const [violet, setviolet] = useState("00000");
  const [violetcompleted, setvioletompleted] = useState(false);
  const [violeterror, setvioleterror] = useState(false);
  const [qrcode, setqrcode] = useState("aaaaa");
  const [qrcodecompleted, setqrcodecompleted] = useState(false);
  const [qrcodeerror, setqrcodeerror] = useState(false);
  const [lockcode, setlockcode] = useState("0000000");
  const [lockcodecompleted, setlockcodecompleted] = useState(false);
  const [lockcodeerror, setlockcodeerror] = useState(false);
  const [riddle, setriddle] = useState("aaaaaaa");
  const [riddlecompleted, setriddlecompleted] = useState(false);
  const [riddleerror, setriddleerror] = useState(false);
  const [textans, settextans] = useState("0000");
  const [textanscompleted, settextanscompleted] = useState(false);
  const [textanserror, settextanserror] = useState(false);
  const [jigsaw, setjigsaw] = useState("00000");
  const [jigsawcompleted, setjigsawcompleted] = useState(false);
  const [jigsawerror, setjigsawerror] = useState(false);
  const [starttime, setstarttime] = useState(Date.now());
  const [count, setcount] = useState(0);
  const [showmainpage, setshowmainpage] = useState(true);
  const [username, setusername] = useState("");
  const [showhint, setshowhint] = useState(false);
  const [hinttext, sethinttext] = useState("");
  const [gradbground, setgradbground] = useState(
    "radial-gradient(at 300px 300px, rgba(159,0,191,.9) 0, #4D4FA7 70%)"
  );
  const getHint = () => {
    if (!dartcompleted) {
      sethinttext("dart clue");
    } else if (!timecompleted) {
      sethinttext("time hint");
    } else if (!helloanscompleted) {
      sethinttext("helloans hint");
    } else if (!violetcompleted) {
      sethinttext("violet hint");
    } else if (!qrcodecompleted) {
      sethinttext("qrcode hint");
    } else if (!lockcodecompleted) {
      sethinttext("lock code hint");
    } else if (!riddlecompleted) {
      sethinttext(" riddle hint");
    } else if (!textanscompleted) {
      sethinttext("textans hint");
    } else if (!jigsawcompleted) {
      sethinttext("jigsaw hint");
    }
  };
  const handlefirebaseupload = () => {
    const todoRef = firebase.database().ref("SankranthiChallenge");
    const todo = {
      name: username,
    };
    var newKey = todoRef.push(todo).getKey();
  };

  const Completionist = () => (
    <>
      <div
        style={{ backgroundImage: "url(" + bannerimage + ")" }}
        class="welcome-area"
        id="welcome"
        data-aos="fade-down"
      >
        <div class="header-text">
          <div class="container">
            <div class="row">
              <div
                class="left-text col-lg-7 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1 style={{ fontFamily: "Raleway" }}>
                  <strong> Gifts' Hub </strong>wishes {username} a very
                  <strong>{wishes}</strong>
                </h1>
                <h2 style={{ fontFamily: "Open Sans", color: "#ffffff" }}>
                  Your score is <strong>{score}</strong>
                </h2>
                <br />
                <h4 style={{ fontFamily: "Raleway", color: "#ffffff" }}>
                  Thank you for playing.{" "}
                </h4>
                <br />
              </div>

              <div
                class="col-lg-5 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src={fbimg}
                  // src="https://responsiblecorporate.com/wp-content/uploads/2018/11/Happy-Pongal-2.jpg"
                  class="rounded img-fluid d-block mx-auto"
                  alt="First Vector Graphic"
                />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
  const handleCheck = (id) => {
    if (id === 1) {
      if (dart === "1118") {
        setdartcompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer dart");
        setdarterror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 2) {
      if (time.toLowerCase() === username.toLowerCase()) {
        settimecompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer time");
        settimeerror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 3) {
      if (helloans.toLowerCase() === "hello") {
        sethelloanscompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer hello");
        sethelloanserror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 4) {
      if (violet === "17532") {
        setvioletompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer violet");
        setvioleterror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 5) {
      if (qrcode.toLowerCase() === "smile") {
        setqrcodecompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer qrcode");
        setqrcodeerror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 6) {
      if (lockcode === "1672943") {
        setlockcodecompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer lock");
        setlockcodeerror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 7) {
      if (riddle.toLowerCase() === "library") {
        setriddlecompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer riddle");
        setriddleerror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 8) {
      if (textans === "4611") {
        settextanscompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer textans");
        settextanserror(true);
        setscore(score - 30);
        // toast come here
      }
    }
    if (id === 9) {
      if (jigsaw === "30810") {
        setjigsawcompleted(true);
        setscore(score + 100);
        setcount(count + 1);
      } else {
        console.log("wrong answer jigsaw");
        setjigsawerror(true);
        setscore(score - 30);
        // toast come here
      }
    }
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed || count === 10) {
      const todoRef = firebase.database().ref("CompletedSankranthiChallange");
      const todo = {
        name: username,
        score: score,
      };
      var newKey = todoRef.push(todo).getKey();
      return <Completionist />;
    } else {
      return (
        <div id="about2">
          <center>
            <h1 style={{ color: "#ffffff", marginBottom: "20px" }}>
              Gifts' Hub Challenge
            </h1>
            <div style={{ color: "#ffffff" }} className="container-fluid">
              {!showhint ? (
                <button
                  style={{ marginBottom: "10px" }}
                  onClick={() => {
                    setshowhint(true);
                  }}
                  className="btn btn-primary"
                >
                  Got stuck ?
                </button>
              ) : (
                <center>
                  <span
                    style={{
                      fontFamily: "Raleway",
                      color: "#ffffff",
                      margin: "auto",
                      display: "inline-block",
                    }}
                  >
                    {" "}
                    Hint: Go through the image and click on the search icons for
                    clues. Try typing the answers in all possible places.
                  </span>
                </center>
              )}
              <br />
              <button
                data-toggle="modal"
                data-target="#hintmodal"
                style={{ marginBottom: "10px" }}
                onClick={() => {
                  getHint();
                }}
                className="btn btn-primary"
              >
                Hint ?
              </button>
              <img
                className="imageMap"
                src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/Untitled%20presentation%20(5).png?alt=media&token=6558ec21-a9e8-46ef-a4f8-50628289c2cd"
                usemap="#image-map"
                alt=""
              />
              <img
                className="mobileImageMap"
                src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/Untitled%20presentation%20(9).png?alt=media&token=63780327-1d5b-41e2-9045-750a8bb58f75"
                usemap="#image-map-mobile"
                alt=""
              />
              <div className="container m-3">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 style={{ color: "#ffffff" }}>
                      Current Score : {score}
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <h1 style={{ color: "#ffffff" }}>
                      {minutes}:{seconds}
                    </h1>
                  </div>
                </div>

                <div className="card p-4">
                  <h2 style={{ color: "#000000" }}> Type your Answers Below</h2>
                  <center>
                    <div className="row">
                      <div className="col-md-6 col-lg-4 mt-3 pr-3">
                        {!dartcompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <div>
                              <OtpInput
                                style={{ width: "95px" }}
                                inputStyle={{ width: "20px" }}
                                isInputNum={true}
                                value={dart}
                                onChange={(otp) => {
                                  setdart(otp);
                                  setdarterror(false);
                                }}
                                numInputs={4}
                                separator={<span>&nbsp;&nbsp;</span>}
                              />
                            </div>
                            {darterror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(1);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>

                      <div className="col-md-6 col-lg-4 mt-3">
                        {!timecompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <OtpInput
                              inputStyle={{ width: "20px" }}
                              value={time}
                              onChange={(otp) => {
                                settimeerror(false);
                                settime(otp);
                              }}
                              numInputs={username.length}
                              separator={<span>&nbsp;&nbsp;</span>}
                            />
                            {timeerror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(2);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        {!helloanscompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <OtpInput
                              style={{ width: "95px" }}
                              inputStyle={{ width: "20px" }}
                              value={helloans}
                              onChange={(otp) => {
                                sethelloans(otp);
                                sethelloanserror(false);
                              }}
                              numInputs={5}
                              separator={<span>&nbsp;&nbsp;</span>}
                            />
                            {helloanserror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(3);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        {!violetcompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <div>
                              <OtpInput
                                style={{ width: "95px" }}
                                inputStyle={{ width: "20px" }}
                                isInputNum={true}
                                value={violet}
                                onChange={(otp) => {
                                  setviolet(otp);
                                  setvioleterror(false);
                                }}
                                numInputs={5}
                                separator={<span>&nbsp;&nbsp;</span>}
                              />
                            </div>
                            {violeterror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(4);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        {!qrcodecompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <div>
                              <OtpInput
                                style={{ width: "95px" }}
                                inputStyle={{ width: "20px" }}
                                value={qrcode}
                                onChange={(otp) => {
                                  setqrcode(otp);
                                  setqrcodeerror(false);
                                }}
                                numInputs={5}
                                separator={<span>&nbsp;&nbsp;</span>}
                              />
                            </div>
                            {qrcodeerror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(5);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        {!lockcodecompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <div>
                              <OtpInput
                                style={{ width: "95px" }}
                                inputStyle={{ width: "20px" }}
                                isInputNum={true}
                                value={lockcode}
                                onChange={(otp) => {
                                  setlockcode(otp);
                                  setlockcodeerror(false);
                                }}
                                numInputs={7}
                                separator={<span>&nbsp;&nbsp;</span>}
                              />
                            </div>
                            {lockcodeerror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(6);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        {!riddlecompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <div>
                              <OtpInput
                                style={{ width: "95px" }}
                                inputStyle={{ width: "20px" }}
                                value={riddle}
                                onChange={(otp) => {
                                  setriddle(otp);
                                  setriddleerror(false);
                                }}
                                numInputs={7}
                                separator={<span>&nbsp;&nbsp;</span>}
                              />
                            </div>
                            {riddleerror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(7);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        {!textanscompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <div>
                              <OtpInput
                                style={{ width: "95px" }}
                                inputStyle={{ width: "20px" }}
                                isInputNum={true}
                                value={textans}
                                onChange={(otp) => {
                                  settextans(otp);
                                  settextanserror(false);
                                }}
                                numInputs={4}
                                separator={<span>&nbsp;&nbsp;</span>}
                              />
                            </div>
                            {textanserror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(8);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        {!jigsawcompleted ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            <div>
                              <OtpInput
                                style={{ width: "95px" }}
                                inputStyle={{ width: "20px" }}
                                isInputNum={true}
                                value={jigsaw}
                                onChange={(otp) => {
                                  setjigsaw(otp);
                                  setjigsawerror(false);
                                }}
                                numInputs={5}
                                separator={<span>&nbsp;&nbsp;</span>}
                              />
                            </div>
                            {jigsawerror ? (
                              <ErrorIcon style={{ color: "red" }} />
                            ) : (
                              <button
                                className="btn btn-sm btn-outline-primary rounded"
                                onClick={() => {
                                  handleCheck(9);
                                }}
                              >
                                Check
                              </button>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginRight: "10%",
                              color: "#000",
                            }}
                          >
                            {" "}
                            <p className="text-success">Completed</p>
                            <CheckCircleIcon style={{ color: "green" }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </center>
                </div>
                <br />
                <br />
                <br />
                <br />
                <map name="image-map">
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#geometricshapes"
                    data-toggle="modal"
                    alt=""
                    title=""
                    // href="https://docs.google.com/document/d/1e1J2qHAEKQCa2HJ52s_0PKwuKmXs3AeXhVkQQ2vqogQ/edit?usp=sharing"
                    coords="195,99,11"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#lockscreen"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="620,98,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#americantime"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="437,475,10"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    alt=""
                    title=""
                    data-target="#violetpage"
                    data-toggle="modal"
                    coords="689,357,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#loremepsum"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="928,504,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#wastingtime"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="337,335,13"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#countryclocks"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="80,434,11"
                    shape="circle"
                  />

                  <area
                    style={{ cursor: "pointer" }}
                    alt=""
                    title=""
                    data-target="#jigsaw"
                    data-toggle="modal"
                    coords="651,251,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#qrcode"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="933,239,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#riddle"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="921,30,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#youtubevideo"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="13,29,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#uvebeenfooled"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="326,22,10"
                    shape="circle"
                  />
                </map>
                <map name="image-map-mobile">
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#geometricshapes"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="192,152,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#lockscreen"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="66,153,13"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#americantime"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="183,451,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    alt=""
                    title=""
                    data-target="#violetpage"
                    data-toggle="modal"
                    coords="103,354,11"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#loremepsum"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="404,316,11"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#wastingtime"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="515,279,11"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#countryclocks"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="543,494,13"
                    shape="circle"
                  />

                  <area
                    style={{ cursor: "pointer" }}
                    alt=""
                    title=""
                    data-target="#jigsaw"
                    data-toggle="modal"
                    coords="452,496,11"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#qrcode"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="293,308,13"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#riddle"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="325,21,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#youtubevideo"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="185,46,12"
                    shape="circle"
                  />
                  <area
                    style={{ cursor: "pointer" }}
                    data-target="#uvebeenfooled"
                    data-toggle="modal"
                    alt=""
                    title=""
                    coords="511,48,11"
                    shape="circle"
                  />
                </map>
              </div>
            </div>
          </center>
        </div>
      );
    }
  };
  const func = () => {
    var t = Math.floor((1200000 - (Date.now() - starttime)) / 60000);
    setscore(score + t * 50);
    setcount(count + 1);
  };

  return (
    <div>
      <div className="portrait">
        <img
          style={{ width: "100%" }}
          src="https://bluemanpropertyservices.co.uk/wp-content/uploads/2019/08/mobile-rotate.gif"
          alt=""
        />
      </div>
      <div className="App">
        {count === 9 ? func() : null}
        <div class="modal fade" id="violetpage">
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <div
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/Hr9XBZ4/Untitled-presentation-4.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  <div
                    onMouseMove={(event) => {
                      setgradbground(
                        "radial-gradient(at " +
                          event.clientX +
                          "px " +
                          event.clientY +
                          "px, rgba(159,0,191,.9) 0, #4D4FA7 70%)"
                      );
                    }}
                    style={{ height: "600px", backgroundImage: gradbground }}
                    class="gradient"
                  ></div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="geometricshapes">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                {" "}
                <center>
                  <img
                    style={{ width: "50%" }}
                    src={require("../Images/shapes.png")}
                    alt="1"
                  />
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="hintmodal">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Hint</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  <p>{hinttext}</p>
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="countryclocks">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  <img
                    style={{ width: "100%" }}
                    src={require("../Images/d5.jpg")}
                    alt="1"
                  />
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="riddle">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  Which building has the highest number of stories?
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="qrcode">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  <img
                    style={{ width: "50%" }}
                    src={require("../Images/qrc.png")}
                    alt="1"
                  />
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="lockscreen">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  <img
                    style={{ width: "50%" }}
                    src={require("../Images/lock.jpg")}
                    alt="1"
                  />
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="americantime">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  <img
                    style={{ width: "100%" }}
                    src={require("../Images/asdf.jpg")}
                    alt="1"
                  />
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="youtubevideo">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  <iframe
                    title="youtubevideo"
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/ePQNyVChOMk"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="uvebeenfooled">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <center>
                  <img
                    style={{ width: "100%" }}
                    src="https://i.ytimg.com/vi/LTfhrvj2VWc/maxresdefault.jpg"
                    alt="1"
                  />
                </center>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="wastingtime">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                <span style={{ fontFamily: "Roboto", fontSize: "1rem" }}>
                  {" "}
                  Many people were rescued from the sinking ferry by the Latvian
                  helicopter crew like <strong> you</strong>.The Latvian
                  helicopters <strong>are</strong> the most beautiful ones . So{" "}
                  <span
                    style={{ fontFamily: "Merriweather", fontSize: "0.95rem" }}
                  >
                    {" "}
                    four
                  </span>{" "}
                  point{" "}
                  <span
                    style={{ fontFamily: "Merriweather", fontSize: "0.95rem" }}
                  >
                    {" "}
                    six
                  </span>{" "}
                  percent of people add decimal places to make their statistics
                  look more credible. Time waits for none so stop{" "}
                  <strong>wasting</strong>. Just{" "}
                  <span
                    style={{ fontFamily: "Merriweather", fontSize: "0.95rem" }}
                  >
                    one
                  </span>{" "}
                  per million was enough to cause an engine failure. So
                  <strong> your</strong> responsibility is in your hands.
                  Writers tend to be more comfortable with starting a sentence
                  with a year so <strong>time</strong> is important.
                  <strong> Here</strong> you are{" "}
                  <span
                    style={{ fontFamily: "Merriweather", fontSize: "0.95rem" }}
                  >
                    one
                  </span>{" "}
                  to change the society now.
                </span>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="loremepsum">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">May be clue</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body ">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many websites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cities of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections of "de Finibus Bonorum et Malorum'' (The Extremes
                of Good and Evil) by Cicero, written in 45 BC. This book is a
                treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                sit amet..", comes from a line in section 1.10.32. The standard
                chunk of Lorem Ipsum used since the 1500s is reproduced below
                for those interested. Sections 1.10.32 and 1.10.33 from "de
                Finibus Bonorum et Malorum" by Cicero are also reproduced in
                their exact original form, accompanied by English versions from
                the 1914 translation by H. Rackham. There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.But I must
                explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and I will give you a complete
                account of the system, and expound the actual teachings of the
                great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences that are
                extremely painful. On the other hand, we denounce with righteous
                indignation and dislike men who are so beguiled and demoralized
                by the charms of pleasure of the moment, so blinded by desire,
                that they cannot foresee the pain and trouble that are bound to
                ensue; and equal blame belongs to those who fail in their duty
                through weakness of will, which is the same as saying through
                shrinking from toil and pain. These cases are perfectly simple
                and easy to distinguish. In a free hour, when our power of
                choice is untrammelled and when nothing prevents our being able
                to do what we like best
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="jigsaw">
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title" style={{ textAlign: "justify" }}>
                  Here’s a jigsaw with a clue hidden…Select the piece, drag, and
                  then click to drop.
                  <br /> Are you a perfectionist trying to finish the entire
                  puzzle or a quick-wit looking for the bigger picture?
                </h6>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div style={{ height: "500px" }} class="modal-body">
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download1.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download2.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download3.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download4.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download5.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download6.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download7.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download8.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download9.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download10.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download11.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download12.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download13.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download14.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download15.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download16.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download17.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download18.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download19.png")} alt="1" />
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div
                    style={{
                      cursor: "move",
                      display: "inline-block",
                    }}
                  >
                    <img src={require("../Images/download20.png")} alt="1" />
                  </div>
                </Draggable>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {showmainpage ? (
          <div>
            <section class="section" id="about2 challenge" data-aos="fade-down">
              <div class="container">
                <div class="row">
                  <div
                    class="right-image col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix-big order-md-12"
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
                  >
                    <img
                      style={{ width: "100%" }}
                      src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fescaperoom.jpg?alt=media&token=cb43afd0-15ab-4dd9-81fa-04c6f2461c38"
                      class="rounded img-fluid d-block mx-auto"
                      alt="App"
                    />
                  </div>
                  <div class="left-text col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix order-md-1">
                    <div class="left-heading">
                      <h5>Gifts' Hub Challenge</h5>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      Now gift your loved ones with our free and personalized
                      website, scheduling the surprises with only a few clicks!
                    </p>
                    <br />
                    <p>
                      We will provide you some clues in the form of text,
                      images, or videos. Crack the puzzles and enter the answers
                      in the boxes beneath, to finish the challenge! It is
                      advisable to play this game on a{" "}
                      <strong> Bigger Screen </strong> (like a laptop).
                      <br /> Have a paper and pen in handy and also mind you,
                      not all clues are important!
                    </p>
                    <br />
                    <h5 style={{ marginBottom: "0.5rem" }}>Instructions :-</h5>
                    <ul>
                      <li>
                        <p>
                          Start with 300 points at the start of the challenge
                          and gain 100 points for every correct answer while you
                          lose 30 points for every wrong answer.
                        </p>
                      </li>

                      <li>
                        <p>
                          You will be given 20 mins to finish this and every
                          minute left after completion will fetch you an extra
                          50 points.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <center>
                  <form
                    onSubmit={() => {
                      setshowmainpage(false);
                      setstarttime(Date.now());
                      handlefirebaseupload();
                    }}
                  >
                    <TextField
                      autoComplete="off"
                      inputProps={{ maxLength: 8 }}
                      InputLabelProps={{
                        style: { color: "#ffffff" },
                      }}
                      id="input-with-icon-grid"
                      label="Player Name"
                      placeholder="max 8 characters"
                      value={username}
                      onChange={(e) => {
                        var name = e.target.value;
                        if (name.slice(-1) != " ") {
                          setusername(e.target.value);
                          settime("a".repeat(e.target.value.length));
                        }
                      }}
                      required
                    />
                    <hr style={{ width: "50%", opacity: "0" }} />
                    <button type="submit" className="main-button">
                      Start Game
                    </button>
                  </form>
                </center>
              </div>
            </section>
          </div>
        ) : (
          <Countdown date={starttime + 1200000} renderer={renderer} />
        )}
      </div>
    </div>
  );
}
