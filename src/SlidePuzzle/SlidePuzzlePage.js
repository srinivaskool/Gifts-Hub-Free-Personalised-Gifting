import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SlidePuzzle from "./SlidePuzzle";
import SlidePuzzleAnswer from "./SlidePuzzleAnswer";
import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";
import NavBar from "../NavBars/NavBar";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tour from "reactour";
import "../Buttons.css";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { BrowserView } from "react-device-detect";
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

function SlidePuzzlePage() {
  const [showoptions, setshowoptions] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [accentColor, setaccentColor] = useState("#70cff3");
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [loading, setloading] = useState(false);

  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Ftom-and-jerry-hd-background.jpg?alt=media&token=a5fb8323-7899-46d7-8119-16b69e1e2531"
  );
  // const handlepuzzlescore = (e) => {
  //   console.log("inside page", e, "puzz", puzzlescore);
  //   setpuzzlescore(e);
  // };
  const handlepuzzlescore = (e) => {
    console.log("Yoooo");
  };
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));

    setopencrop(true);
  };

  const handleFireBaseUpload = () => {
    setloading(true);
    var ud = uuidv4();

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (!livelink) {
      const todoRef = firebase.database().ref("SlidePuzzle");
      const todo = {
        url: fbimg,
        best_score: 100000,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink("http://giftshub.live/live/slidepuzzle/" + newKey);
      setpreviewlink("/live/slidepuzzle/" + newKey);

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
                console.log(downUrl);
                setFireUrl(downUrl);
                const todoRef = firebase.database().ref("SlidePuzzle");
                const todo = {
                  url: downUrl,
                  best_score: 100000,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink("http://giftshub.live/live/slidepuzzle/" + newKey);
                setpreviewlink("/live/slidepuzzle/" + newKey);
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
      content: `“It is always the small pieces that make the big picture”
      Select the image you want to generate a puzzle out of :
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
      <br />
      <br />
      <br />
      <div class="container-fluid pt-3 px-0">
        <div class="row editpageseditarea">
          <div class="col-lg-7 col-xl-5 mb-xs-0 mb-sm-5 mt-5 p-0  mt-0 mt-lg-4">
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <SlidePuzzle
                fbimg={fbimg}
                handlepuzzlescore={handlepuzzlescore}
              />{" "}
            </div>
          </div>
          <div
            class="col-lg-5 col-xl-4  mb-5 mb-xl-3 mt-0 mt-sm-3 mt-md-0"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div class=" mb-5">
              <SlidePuzzleAnswer fbimg={fbimg} />
            </div>
          </div>

          <div className="editpagesrightnav col-xl-3  mb-3">
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

            <div style={{ padding: "20px 0 0 0 ", justifyContent: "center" }}>
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
                      aspect_ratio={1 / 1}
                      opencrop={opencrop}
                      setopencrop={setopencrop}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput">
                    <HeaderBtn Icon={ImageIcon} title="Change  image " />
                  </label>
                </center>
              </div>
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

export default SlidePuzzlePage;
