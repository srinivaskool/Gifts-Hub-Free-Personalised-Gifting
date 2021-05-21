import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "react-loader-spinner";
import Tour from "reactour";
import NavBar from "../NavBars/NavBar";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { BrowserView } from "react-device-detect";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import ThreeDCarousel from "./ThreeDCarouselDummy";
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

function ThreeDCarouselPage() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [accentColor, setaccentColor] = useState("#70cff3");
  const secclasses = secuseStyles();
  const [loading, setloading] = useState(false);
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [showoptions, setshowoptions] = useState(false);
  const [text, settext] = useState("3D Album Carousel");
  const [fbimg1, setfbimg1] = useState(
    "https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [image_url1, setimage_url1] = useState();
  const [opencrop1, setopencrop1] = useState(false);
  const [send1, setsend1] = useState();

  const [fbimg2, setfbimg2] = useState(
    "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [image_url2, setimage_url2] = useState();
  const [opencrop2, setopencrop2] = useState(false);
  const [send2, setsend2] = useState();

  const [fbimg3, setfbimg3] = useState(
    "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [image_url3, setimage_url3] = useState();
  const [opencrop3, setopencrop3] = useState(false);
  const [send3, setsend3] = useState();

  const [fbimg4, setfbimg4] = useState(
    "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [image_url4, setimage_url4] = useState();
  const [opencrop4, setopencrop4] = useState(false);
  const [send4, setsend4] = useState();

  const [fbimg5, setfbimg5] = useState(
    "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [image_url5, setimage_url5] = useState();
  const [opencrop5, setopencrop5] = useState(false);
  const [send5, setsend5] = useState();

  const [fbimg6, setfbimg6] = useState(
    "https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );
  const [image_url6, setimage_url6] = useState();
  const [opencrop6, setopencrop6] = useState(false);
  const [send6, setsend6] = useState();
  const onSelectFile1 = (e) => {
    setsend1(window.URL.createObjectURL(e.target.files[0]));
    setopencrop1(true);
  };
  const onSelectFile2 = (e) => {
    setsend2(window.URL.createObjectURL(e.target.files[0]));
    setopencrop2(true);
  };
  const onSelectFile3 = (e) => {
    setsend3(window.URL.createObjectURL(e.target.files[0]));
    setopencrop3(true);
  };
  const onSelectFile4 = (e) => {
    setsend4(window.URL.createObjectURL(e.target.files[0]));
    setopencrop4(true);
  };
  const onSelectFile5 = (e) => {
    setsend5(window.URL.createObjectURL(e.target.files[0]));
    setopencrop5(true);
  };
  const onSelectFile6 = (e) => {
    setsend6(window.URL.createObjectURL(e.target.files[0]));
    setopencrop6(true);
  };
  const handleFireBaseUpload = () => {
    setloading(true);
    var ud1 = uuidv4();
    var ud2 = uuidv4();
    var ud3 = uuidv4();
    var ud4 = uuidv4();
    var ud5 = uuidv4();
    var ud6 = uuidv4();
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (!livelink) {
      const todoRef = firebase.database().ref("ThreeDCarousel");
      const todo = {
        url1: fbimg1,
        url2: fbimg2,
        url3: fbimg3,
        url4: fbimg4,
        url5: fbimg5,
        url6: fbimg6,
        text: text,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink("http://giftshub.live/live/threedcarousel/" + newKey);
      console.log(livelink, "livelink");
      setpreviewlink("/live/threedcarousel/" + newKey);

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
          console.log(image_url1);
          storage
            .ref("images")
            .child(ud1)
            .putString(image_url1, "base64", { contentType: "image/jpg" })
            .then((savedImage) => {
              savedImage.ref.getDownloadURL().then((downUrl1) => {
                storage
                  .ref("images")
                  .child(ud2)
                  .putString(image_url2, "base64", { contentType: "image/jpg" })
                  .then((savedImage) => {
                    savedImage.ref.getDownloadURL().then((downUrl2) => {
                      storage
                        .ref("images")
                        .child(ud3)
                        .putString(image_url3, "base64", {
                          contentType: "image/jpg",
                        })
                        .then((savedImage) => {
                          savedImage.ref.getDownloadURL().then((downUrl3) => {
                            storage
                              .ref("images")
                              .child(ud4)
                              .putString(image_url4, "base64", {
                                contentType: "image/jpg",
                              })
                              .then((savedImage) => {
                                savedImage.ref
                                  .getDownloadURL()
                                  .then((downUrl4) => {
                                    storage
                                      .ref("images")
                                      .child(ud5)
                                      .putString(image_url5, "base64", {
                                        contentType: "image/jpg",
                                      })
                                      .then((savedImage) => {
                                        savedImage.ref
                                          .getDownloadURL()
                                          .then((downUrl5) => {
                                            storage
                                              .ref("images")
                                              .child(ud6)
                                              .putString(image_url6, "base64", {
                                                contentType: "image/jpg",
                                              })
                                              .then((savedImage) => {
                                                savedImage.ref
                                                  .getDownloadURL()
                                                  .then((downUrl6) => {
                                                    const todoRef = firebase
                                                      .database()
                                                      .ref("ThreeDCarousel");
                                                    const todo = {
                                                      url1: downUrl1,
                                                      url2: downUrl2,
                                                      url3: downUrl3,
                                                      url4: downUrl4,
                                                      url5: downUrl5,
                                                      url6: downUrl6,
                                                      text: text,
                                                    };
                                                    var newKey = todoRef
                                                      .push(todo)
                                                      .getKey();
                                                    setlivelink(
                                                      "http://giftshub.live/live/threedcarousel/" +
                                                        newKey
                                                    );
                                                    console.log(
                                                      livelink,
                                                      "livelink"
                                                    );
                                                    setpreviewlink(
                                                      "/live/threedcarousel/" +
                                                        newKey
                                                    );
                                                  });
                                              });
                                          });
                                        setloading(false);
                                      });
                                  });
                              });
                          });
                        });
                    });
                  });
              });
            });
        }
      );
    }
  };

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `Pictures capture the true moment of any occasion and sure deserve a place in this heart. Select the 6 images : `,
    },
    {
      selector: '[data-tut="reactour__generatelink"]',
      content: `Tada! Almost done, do generate the link for enabling the various sharing options.`,
    },
    {
      selector: '[data-tut="reactour__copylink"]',
      content: `Copies the generated live link to clipboard.`,
    },
    {
      selector: '[data-tut="reactour__preview"]',
      content: `Previews the component  created in a new page.`,
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
          <div class="  col-lg-9  mb-3 px-0">
            <ThreeDCarousel
              fbimg1={fbimg1}
              fbimg2={fbimg2}
              fbimg3={fbimg3}
              fbimg4={fbimg4}
              fbimg5={fbimg5}
              fbimg6={fbimg6}
              text={text}
            />
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
                  {/* {livelink ? null : ( */}
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
                  {/* )} */}
                </div>
              </center>
              <hr />
            </BrowserView>

            <div style={{ justifyContent: "center", padding: "20px 0" }}>
              <center>
                <div data-tut="reactour__text">
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
              </center>
              <div data-tut="reactour__changeImage">
                <center>
                  <input
                    style={{ display: "none" }}
                    accept="image/* "
                    className={secclasses.input}
                    id="LocalfileInput1"
                    name="LocalfileInput1"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile1}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                  {opencrop1 ? (
                    <CropPage
                      send={send1}
                      setfbimg={setfbimg1}
                      setimage_url={setimage_url1}
                      aspect_ratio={1 / 1}
                      opencrop={opencrop1}
                      setopencrop={setopencrop1}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput1">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 1" />
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/* "
                    className={secclasses.input}
                    id="LocalfileInput2"
                    name="LocalfileInput2"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile2}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                  {opencrop2 ? (
                    <CropPage
                      send={send2}
                      setfbimg={setfbimg2}
                      setimage_url={setimage_url2}
                      aspect_ratio={1 / 1}
                      opencrop={opencrop2}
                      setopencrop={setopencrop2}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput2">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 2" />
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/* "
                    className={secclasses.input}
                    id="LocalfileInput3"
                    name="LocalfileInput3"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile3}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                  {opencrop3 ? (
                    <CropPage
                      send={send3}
                      setfbimg={setfbimg3}
                      setimage_url={setimage_url3}
                      aspect_ratio={1 / 1}
                      opencrop={opencrop3}
                      setopencrop={setopencrop3}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput3">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 3" />
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/* "
                    className={secclasses.input}
                    id="LocalfileInput4"
                    name="LocalfileInput4"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile4}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                  {opencrop4 ? (
                    <CropPage
                      send={send4}
                      setfbimg={setfbimg4}
                      setimage_url={setimage_url4}
                      aspect_ratio={1 / 1}
                      opencrop={opencrop4}
                      setopencrop={setopencrop4}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput4">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 4" />
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/* "
                    className={secclasses.input}
                    id="LocalfileInput5"
                    name="LocalfileInput5"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile5}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                  {opencrop5 ? (
                    <CropPage
                      send={send5}
                      setfbimg={setfbimg5}
                      setimage_url={setimage_url5}
                      aspect_ratio={1 / 1}
                      opencrop={opencrop5}
                      setopencrop={setopencrop5}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput5">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 5" />
                  </label>
                  <input
                    style={{ display: "none" }}
                    accept="image/* "
                    className={secclasses.input}
                    id="LocalfileInput6"
                    name="LocalfileInput6"
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile6}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                  {opencrop6 ? (
                    <CropPage
                      send={send6}
                      setfbimg={setfbimg6}
                      setimage_url={setimage_url6}
                      aspect_ratio={1 / 1}
                      opencrop={opencrop6}
                      setopencrop={setopencrop6}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput6">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 6" />
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
                        data-tut="reactour__copylink"
                        style={{ marginTop: "20px", width: "200px" }}
                      >
                        <Copy livelink={livelink} />
                      </div>
                      <div
                        data-tut="reactour__preview"
                        style={{ marginTop: "20px" }}
                      >
                        <Link class="logo" to={previewlink} target="_blank">
                          <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                        </Link>
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

export default ThreeDCarouselPage;
