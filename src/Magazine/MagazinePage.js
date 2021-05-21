import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Magazine from "./Magazine";
import { BrowserView } from "react-device-detect";

import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "react-loader-spinner";
import Tour from "reactour";
import NavBar from "../NavBars/NavBar";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import "../Buttons.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import DateRangeIcon from "@material-ui/icons/DateRange";
const secuseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: "none",
  },
}));

function MagazinePage() {
  const [showoptions, setshowoptions] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [accentColor, setaccentColor] = useState("#70cff3");
  let docToPrint = React.createRef();
  const secclasses = secuseStyles();
  const [loading, setloading] = useState(false);
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [BDate, setBDate] = useState(Date.now());

  const [text, settext] = useState("BEST EVER CAPTAIN");
  const [name, setname] = useState("M S Dhoni");
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FMagazine.jpg?alt=media&token=cb5e38c6-9f9d-4a4f-b338-a70a707e6091"
  );

  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));
    setopencrop(true);
  };

  const handleFireBaseUpload = () => {
    setloading(true);
    var ud = uuidv4();
    console.log(ud);

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (!livelink) {
      const todoRef = firebase.database().ref("Magazine");
      const todo = {
        url: fbimg,
        name: name,
        text: text,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink("http://giftshub.live/live/magazine/" + newKey);
      setpreviewlink("/live/magazine/" + newKey);

      setloading(false);
    } else {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          console.log(image_url);
          var s = storage
            .ref("images")
            .child(ud)
            .putString(image_url, "base64", { contentType: "image/jpg" })
            .then((savedImage) => {
              savedImage.ref.getDownloadURL().then((downUrl) => {
                setFireUrl(downUrl);
                const todoRef = firebase.database().ref("Magazine");
                const todo = {
                  url: downUrl,
                  name: name,
                  text: text,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink("http://giftshub.live/live/magazine/" + newKey);
                setpreviewlink("/live/magazine/" + newKey);
              });
              setloading(false);
            });
        }
      );
    }
  };

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `Choose the image from you local device to be  printed onto the Magazine.`,
    },
    {
      selector: '[data-tut="reactour__head"]',
      content: ` Input the text that is going to make headlines!`,
    },
    {
      selector: '[data-tut="reactour__para"]',
      content: `Woah! This big news sure deserves some subtext too, continue to input this text as well.`,
    },
    {
      selector: '[data-tut="reactour__date"]',
      content: `We do believe this great headline is ageless, but a date would give this newspaper an identity too! So select it right away!
      `,
    },
    {
      selector: '[data-tut="reactour__generatelink"]',
      content: `Tada! Almost done, do generate the link for enabling the various sharing options.`,
    },

    {
      selector: '[data-tut="reactour__preview"]',
      content: `Previews the component  created in a new page.`,
    },
    {
      selector: '[data-tut="reactour__copylink"]',
      content: `Copies the generated live link to clipboard.`,
    },

    {
      selector: '[data-tut="reactour__sharelink"]',
      content: `Displays options to share the live link on Facebook, WhatsApp, Twitter and Email.`,
    },
  ];
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <Tour
        onRequestClose={() => {
          setIsTourOpen(false);
        }}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={accentColor}
      />
      <div class="container-fluid pt-3 px-0">
        <div class="row editpageseditarea">
          <div id="magazine" ref={docToPrint} class="  col-lg-9  mb-3 px-0">
            <Magazine fbimg={fbimg} text={text} name={name} BDate={BDate} />
          </div>
          <div className="editpagesrightnav   col-lg-3   mb-3">
            <BrowserView>
              <center>
                <div
                  style={{
                    justifyContent: "center",
                    padding: "20px 0 0 0 ",
                  }}
                >
                  <span style={{ color: "#ffffff" }}>
                    {" "}
                    Hello! Allow us to give you a small tour on how to generate
                    this special gift. We are sure you wouldn't need one the
                    next time you are back.
                    <br /> P.S : Its that easy
                  </span>
                  <HeaderBtn
                    handleClick={() => {
                      setIsTourOpen(true);
                    }}
                    Icon={FlightTakeoffIcon}
                    title=" Start Tour "
                  />
                </div>
              </center>
              <hr />
            </BrowserView>
            <div style={{ justifyContent: "center", padding: "20px 0" }}>
              <div data-tut="reactour__changeImage">
                <center>
                  <input
                    style={{ display: "none" }}
                    accept="image/* "
                    className={secclasses.input}
                    id="LocalfileInput"
                    name="LocalfileInput"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                  {opencrop ? (
                    <CropPage
                      send={send}
                      setfbimg={setfbimg}
                      setimage_url={setimage_url}
                      aspect_ratio={3 / 4}
                      opencrop={opencrop}
                      setopencrop={setopencrop}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput">
                    <HeaderBtn Icon={ImageIcon} title="Change  image " />
                  </label>
                </center>
              </div>
              <center>
                <div data-tut="reactour__head">
                  <div
                    style={{
                      width: "200px",
                      marginTop: "10px",
                    }}
                    className="RightSideBar2__Btn"
                  >
                    <CreateIcon
                      style={{
                        margin: "0 10px 0 5px",
                        color: "#ffffff",
                        fontSize: "large",
                      }}
                    />
                    <InputBase
                      className="RightSideBar2__Btn"
                      multiline
                      style={{
                        color: "#068dc0",
                        margin: "0",
                        backgroundColor: "#ffffff",
                        width: "200px",
                      }}
                      value={text}
                      onChange={(e) => {
                        settext(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div data-tut="reactour__para">
                  <div
                    style={{
                      width: "200px",

                      marginTop: "20px",
                    }}
                    className="RightSideBar2__Btn"
                  >
                    <CreateIcon
                      style={{
                        margin: "0 10px 0 5px",
                        color: "#ffffff",
                        fontSize: "large",
                      }}
                    />
                    <InputBase
                      className="RightSideBar2__Btn"
                      multiline
                      style={{
                        color: "#068dc0",
                        margin: "0",
                        backgroundColor: "#ffffff",
                        width: "200px",
                      }}
                      value={name}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div data-tut="reactour__date">
                  <div
                    style={{
                      width: "200px",

                      marginTop: "20px",
                    }}
                    className="RightSideBar2__Btn"
                  >
                    <input
                      className="RightSideBar2__Btn"
                      type="date"
                      style={{
                        color: "#068dc0",
                        margin: "0",
                        backgroundColor: "#ffffff",
                      }}
                      value={BDate}
                      onChange={(e) => {
                        setBDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </center>
              <center>
                {/* <HeaderBtn
                  handleClick={() => {
                    handleMagazineDownlod(this);
                  }}
                  Icon={GetAppIcon}
                  title="Download image"
                /> */}

                <center data-tut="reactour__generatelink">
                  <div style={{ marginTop: "20px" }}>
                    <button
                      onClick={() => {
                        handleFireBaseUpload();
                        setshowoptions(true);
                      }}
                      className="main-button"
                      data-tut="reactour__generatelink"
                    >
                      Generate Link
                    </button>
                  </div>
                </center>
              </center>
              {loading ? (
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              ) : (
                <center>
                  {livelink || isTourOpen ? (
                    <div>
                      <div
                        data-tut="reactour__preview"
                        style={{ marginTop: "20px" }}
                      >
                        <Link class="logo" to={previewlink} target="_blank">
                          <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                        </Link>
                      </div>
                      <div
                        data-tut="reactour__copylink"
                        style={{ marginTop: "20px", width: "200px" }}
                      >
                        <Copy livelink={livelink} />
                      </div>
                      {!showshare ? (
                        <div
                          data-tut="reactour__sharelink"
                          style={{ marginTop: "20px" }}
                        >
                          <HeaderBtn
                            handleClick={() => {
                              setshowshare(true);
                            }}
                            Icon={ShareIcon}
                            title="Share "
                          />
                        </div>
                      ) : (
                        <Share livelink={livelink} />
                      )}
                    </div>
                  ) : null}
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagazinePage;
