import React, { useEffect, useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwatchBook from "./SwatchBook";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "react-loader-spinner";
import Tour from "reactour";
import CropPage from "../Utils/CropPage";
import ImageIcon from "@material-ui/icons/Image";
import NavBar from "../NavBars/NavBar";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { BrowserView } from "react-device-detect";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import GradientIcon from "@material-ui/icons/Gradient";
import "../Buttons.css";
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

function TicketDeckPage() {
  const [handscol, sethandscol] = useState("#000");
  const [isTourOpen, setIsTourOpen] = useState(false);
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
  const [toname, settoname] = useState("Lannister l");
  const [dummytoname, setdummytoname] = useState("Lannister l");
  const [editname, seteditname] = useState(false);
  const [fbimg, setfbimg] = useState(
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  );

  const [accentColor, setaccentColor] = useState("#70cff3");
  const [showoptions, setshowoptions] = useState(false);
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
      const todoRef = firebase.database().ref("SwatchBook");
      const todo = {
        url: fbimg,
        name: toname,
        handscol: handscol,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink("http://giftshub.live/live/swatchbook/" + newKey);
      setpreviewlink("/live/swatchbook/" + newKey);

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
                const todoRef = firebase.database().ref("SwatchBook");
                const todo = {
                  url: downUrl,
                  name: toname,
                  handscol: handscol,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink("http://giftshub.live/live/swatchbook/" + newKey);
                setpreviewlink("/live/swatchbook/" + newKey);
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
      content: `Choose an image from you local device to be displayed on the main Ticket`,
    },
    {
      selector: '[data-tut="reactour__gradient"]',
      content: `Colors mean more to the eye than what it sees. Use these options to select the appropriate gradient range for the background.`,
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

  const func = () => {
    return (
      <SwatchBook
        name={toname.toUpperCase()}
        fbimg={fbimg}
        handscol={handscol}
      />
    );
  };
  useEffect(() => {
    console.log("inside func useeffect");
    func();
  }, [toname]);

  return (
    <div>
      <NavBar />
      <div>
        {" "}
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
      </div>
      <br />
      <br />
      <br />
      <div class="container-fluid pt-3 px-0">
        <div class="row editpageseditarea">
          <div id="magazine" class="  col-lg-9  mb-3 px-0">
            {func()}
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

            <div>
              {" "}
              <center>
                <div data-tut="reactour__changeImage">
                  {" "}
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
                </div>{" "}
              </center>
              <center>
                <div data-tut="reactour__head">
                  {editname ? (
                    <div
                      style={{
                        width: "200px",
                        marginTop: "10px",
                      }}
                      className="RightSideBar2__Btn"
                    >
                      <CreateIcon
                        onClick={() => {
                          seteditname(false);
                          settoname(dummytoname);
                        }}
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
                        value={dummytoname}
                        onChange={(e) => {
                          setdummytoname(e.target.value);
                        }}
                      />
                    </div>
                  ) : (
                    <HeaderBtn
                      handleClick={() => {
                        seteditname(true);
                      }}
                      Icon={CreateIcon}
                      title="Change  Name"
                    />
                  )}
                </div>
              </center>
              <div data-tut="reactour__handcol">
                <center>
                  <input
                    type="color"
                    id="handcol"
                    initialValue={handscol}
                    value={handscol}
                    onChange={(e) => {
                      sethandscol(e.target.value);
                    }}
                    placement="right"
                    autoAdjust="true"
                    style={{
                      margin: "auto",
                      visibility: "hidden",
                      position: "relative",
                      display: "flex",
                      height: "5px",
                    }}
                  />
                  <label htmlFor="handcol">
                    <HeaderBtn Icon={GradientIcon} title="Clock hands color" />
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

export default TicketDeckPage;
