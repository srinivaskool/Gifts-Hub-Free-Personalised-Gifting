import React, { useState, useEffect } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AnimatedFrame from "./AnimatedFrame";

import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "../Buttons.css";
import Tour from "reactour";
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

function ScheduledAnimatedFramesPage({
  step,
  slug,
  getDoc,
  isTourOpen,
  setTourOpend,
}) {
  const [showoptions, setshowoptions] = useState(false);
  const [accentColor, setaccentColor] = useState("#70cff3");
  let { edit } = useSelector((state) => ({ ...state }));
  const [Cloading, setCLoading] = useState(false);
  const database = firebase.firestore();
  let docToPrint = React.createRef();
  const secclasses = secuseStyles();
  const [loading, setloading] = useState(false);

  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();

  const { user } = useSelector((state) => ({ ...state }));

  const [title, settitle] = useState("Stop hovering");
  const [fbimg1, setfbimg1] = useState(
    "http://unsplash.imgix.net/reserve/de9uL9L7RSmzV4SAoAO5_Lauren%20and%20Winona%20Under%20a%20pass-1.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
  );
  const [image_url1, setimage_url1] = useState();
  const [opencrop1, setopencrop1] = useState(false);
  const [send1, setsend1] = useState();

  const [fbimg2, setfbimg2] = useState(
    "https://unsplash.imgix.net/reserve/PPE2xapKRNyy2DlTt89F_Gutman_island.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
  );
  const [image_url2, setimage_url2] = useState();
  const [opencrop2, setopencrop2] = useState(false);
  const [send2, setsend2] = useState();

  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/AnimatedFrame/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img1 = snapshot.val().url1;
          setfbimg1(img1);
          var img2 = snapshot.val().url2;
          setfbimg2(img2);
          var title = snapshot.val().title;
          settitle(title);
          setCLoading(false);
        });
    } else {
      setCLoading(false);
    }
  }, []);

  const onSelectFile1 = (e) => {
    setsend1(window.URL.createObjectURL(e.target.files[0]));
    setshowoptions(false);
    setopencrop1(true);
  };

  const onSelectFile2 = (e) => {
    setsend2(window.URL.createObjectURL(e.target.files[0]));
    setshowoptions(false);
    setopencrop2(true);
  };

  const handleFireBaseUpload = async () => {
    setloading(true);
    var ud1 = uuidv4();
    var ud2 = uuidv4();

    const uploadTask = await storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (edit.text != "") {
      const todoRef = firebase.database().ref("AnimatedFrame/" + edit.text);
      const todo = {
        url1: fbimg1,
        url2: fbimg2,
        title: title,
      };
      todoRef.update(todo);
      setlivelink(
        "http://giftshub.live/scheduledlive/animatedframe/" +
          edit.text +
          "/" +
          slug
      );
      setpreviewlink("/scheduledlive/animatedframe/" + edit.text + "/" + slug);
      setloading(false);
    } else if (!livelink) {
      const todoRef = firebase.database().ref("AnimatedFrame");
      const todo = {
        url1: fbimg1,
        url2: fbimg2,
        title: title,
      };
      var newKey = await todoRef.push(todo).getKey();
      setlivelink(
        "http://giftshub.live/scheduledlive/animatedframe/" +
          newKey +
          "/" +
          slug
      );
      setpreviewlink("/scheduledlive/animatedframe/" + newKey + "/" + slug);
      const snapshot = await database
        .collection("n-day-pack")
        .doc(`${user.uid}`)
        .collection("giftshub")
        .doc(slug)
        .get();
      const data = snapshot.data().array_data;
      const newdata = data;
      newdata[step].url =
        "http://giftshub.live/scheduledlive/animatedframe/" +
        newKey +
        "/" +
        slug;
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
      toast.success("Animated Frame successfully added to your pack");
      getDoc();
      setloading(false);
    }
    {
      edit.text != "" && toast.success("Animated Frame updated successfully");
    }
  };

  async function EditPack() {}

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `The best part about pictures is that they never change even when the people in it do, select the images you want to design this frame with and show your boo how they make you so proud!`,
    },
    {
      selector: '[data-tut="reactour__yourname"]',
      content: `The best part about pictures is that they never change even when the people in it do, select the images you want to design this frame with and show your boo how they make you so proud!`,
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
          <div class="col-lg-9 px-0 mb-3" style={{ margin: "auto" }}>
            {Cloading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>
                <AnimatedFrame fbimg1={fbimg1} fbimg2={fbimg2} title={title} />
              </div>
            )}
          </div>

          <div className="editpagesrightnav col-lg-3 mb-3">
            {" "}
            <div style={{ justifyContent: "center", padding: "20px 0" }}>
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
                      aspect_ratio={2 / 1}
                      opencrop={opencrop1}
                      setopencrop={setopencrop1}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput1">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 1" />
                  </label>
                </center>
              </div>
              <div>
                <center>
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
                      aspect_ratio={2 / 1}
                      opencrop={opencrop2}
                      setopencrop={setopencrop2}
                    />
                  ) : null}
                  <label htmlFor="LocalfileInput2">
                    <HeaderBtn Icon={ImageIcon} title="Change  image 2" />
                  </label>
                </center>
              </div>
              <center>
                <div>
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
                      value={title}
                      onChange={(e) => {
                        setshowoptions(false);
                        settitle(e.target.value);
                      }}
                    />
                  </div>
                </div>

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
                        Add to pack
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

export default ScheduledAnimatedFramesPage;
