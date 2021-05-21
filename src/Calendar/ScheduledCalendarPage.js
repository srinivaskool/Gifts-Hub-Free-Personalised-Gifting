import React, { useState, useEffect } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from "./Calendar";
import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import { useSelector } from "react-redux";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import Tour from "reactour";
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

function ScheduledCalendarPage({
  step,
  slug,
  getDoc,
  isTourOpen,
  setTourOpend,
}) {
  let { edit } = useSelector((state) => ({ ...state }));
  const [accentColor, setaccentColor] = useState("#70cff3");
  const [loading, setloading] = useState(false);
  const database = firebase.firestore();
  const secclasses = secuseStyles();
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const { user } = useSelector((state) => ({ ...state }));
  const [handscol, sethandscol] = useState("#000");
  const [toname, settoname] = useState("Lannister s");
  const [dummytoname, setdummytoname] = useState("Lannister s");
  const [editname, seteditname] = useState(false);
  const [fbimg, setfbimg] = useState(
    "https://i.picsum.photos/id/520/920/500.jpg?hmac=xjiXSx_XdkaySp-ws4gQND3ZVAM5VhjK7oJGotaNhxM"
  );
  const [Cloading, setCLoading] = useState(false);
  const [showoptions, setshowoptions] = useState(false);
  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/Calendar/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);
          var toname = snapshot.val().name;
          settoname(toname);
          setdummytoname(toname);
          setCLoading(false);
        });
    } else {
      setCLoading(false);
    }
  }, []);
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));
    setshowoptions(false);
    setopencrop(true);
  };

  const handleFireBaseUpload = async () => {
    setloading(true);
    var ud = uuidv4();
    console.log(ud);

    const uploadTask = await storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (edit.text != "") {
      console.log("in if bbb");
      const todoRef = firebase.database().ref("Calendar/" + edit.text);
      const todo = {
        url: fbimg,
        name: toname,
        handscol: handscol,
      };

      todoRef.update(todo);
      setlivelink(
        "http://giftshub.live/scheduledlive/calendar/" + edit.text + "/" + slug
      );
      console.log(livelink, "live");
      setpreviewlink("/scheduledlive/calendar/" + edit.text + "/" + slug);

      setloading(false);
    } else if (!livelink) {
      console.log("in elseif bbb");
      const todoRef = firebase.database().ref("Calendar");
      const todo = {
        url: fbimg,
        name: toname,
        handscol: handscol,
      };
      var newKey = await todoRef.push(todo).getKey();
      setlivelink(
        "http://giftshub.live/scheduledlive/calendar/" + newKey + "/" + slug
      );
      setpreviewlink("/scheduledlive/calendar/" + newKey + "/" + slug);
      const snapshot = await database
        .collection("n-day-pack")
        .doc(`${user.uid}`)
        .collection("giftshub")
        .doc(slug)
        .get();
      const data = snapshot.data().array_data;
      const newdata = data;
      newdata[step].url =
        "http://giftshub.live/scheduledlive/calendar/" + newKey + "/" + slug;

      await database
        .collection("n-day-pack")
        .doc(`${user.uid}`)
        .collection("giftshub")
        .doc(slug)
        .update(
          {
            array_data: newdata,
          },
          { merge: true }
        );
      await database.collection("Livelinks").doc(slug).update(
        {
          array_data: newdata,
        },
        { merge: true }
      );

      toast.success("calendar successfully added to your pack");
      getDoc();
      setloading(false);
    }
    {
      edit.text != "" && toast.success("Calendar updated successfully");
    }
  };

  async function EditPack() {}

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `Choose an image from you local device to be displayed on the Swatch Book.`,
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
      selector: '[data-tut="reactour__addtopack"]',
      content: `Adds this component to the n-day pack you created`,
    },
    {
      selector: '[data-tut="reactour__updatepack"]',
      content: `Updates this component with the changes you made in the n-day pack.`,
    },
    {
      selector: '[data-tut="reactour__sharelink"]',
      content: `Displays options to share the live link on Facebook, WhatsApp, Twitter and Email.`,
    },
  ];

  const func = () => {
    return <Calendar fbimg={fbimg} />;
  };
  useEffect(() => {
    console.log("inside func useeffect");
    func();
  }, [toname]);

  return (
    <div>
      <Tour
        onRequestClose={() => {
          setTourOpend(false);
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
          <div class=" col-xl-10 p-0 mb-3">
            {Cloading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>{func()}</div>
            )}
          </div>

          <div className=" editpagesrightnav  col-xl-2 mb-3">
            <div style={{ justifyContent: "center" }}>
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
                      aspect_ratio={2 / 1}
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
                  <center>
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
                          inputProps={{ maxLength: 11 }}
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
                  </center>
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
              <center>
                {loading ? (
                  <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                ) : (
                  <div style={{ marginTop: "20px" }}>
                    {edit.text == "" || isTourOpen ? (
                      <button
                        className="main-button"
                        onClick={() => {
                          handleFireBaseUpload();
                          setshowoptions(true);
                        }}
                        data-tut="reactour__generatelink"
                      >
                        Add to Pack
                      </button>
                    ) : null}
                    {edit.text != "" || isTourOpen ? (
                      <button
                        className="main-button"
                        onClick={() => {
                          handleFireBaseUpload();
                          setshowoptions(true);
                        }}
                        data-tut="reactour__updatepack"
                      >
                        Update pack
                      </button>
                    ) : null}
                  </div>
                )}
              </center>
              <center>
                {(livelink && showoptions && !loading) || isTourOpen ? (
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
                      style={{ width: "200px", marginTop: "20px" }}
                    >
                      <Copy livelink={livelink} />
                    </div>
                  </div>
                ) : null}
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledCalendarPage;
