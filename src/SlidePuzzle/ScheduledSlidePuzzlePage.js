import React, { useState, useEffect } from "react";
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
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Tour from "reactour";
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

function ScheduledSlidePuzzlePage({
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
  const [loading, setloading] = useState(false);
  const database = firebase.firestore();
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const { user } = useSelector((state) => ({ ...state }));
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Ftom-and-jerry-hd-background.jpg?alt=media&token=a5fb8323-7899-46d7-8119-16b69e1e2531"
  );
  const handlepuzzlescore = (e) => {
    console.log("Yoooo");
  };
  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/SlidePuzzle/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);
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
      const todoRef = firebase.database().ref("SlidePuzzle/" + edit.text);
      const todo = {
        url: fbimg,
        best_score: 100000,
      };
      todoRef.update(todo);
      setlivelink(
        "http://giftshub.live/scheduledlive/slidepuzzle/" +
          edit.text +
          "/" +
          slug
      );
      setpreviewlink("/scheduledlive/slidepuzzle/" + edit.text + "/" + slug);
      setloading(false);
    } else if (!livelink) {
      const todoRef = firebase.database().ref("SlidePuzzle");
      const todo = {
        url: fbimg,
        best_score: 100000,
      };
      var newKey = await todoRef.push(todo).getKey();
      setlivelink(
        "http://giftshub.live/scheduledlive/slidepuzzle/" + newKey + "/" + slug
      );
      setpreviewlink("/scheduledlive/slidepuzzle/" + newKey + "/" + slug);
      const snapshot = await database
        .collection("n-day-pack")
        .doc(`${user.uid}`)
        .collection("giftshub")
        .doc(slug)
        .get();
      const data = snapshot.data().array_data;
      const newdata = data;
      newdata[step].url =
        "http://giftshub.live/scheduledlive/slidepuzzle/" + newKey + "/" + slug;

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
      toast.success("Slide Puzzle successfully added to your pack");
      getDoc();
      setloading(false);
    }
    {
      edit.text != "" && toast.success("Slide Puzzle updated successfully");
    }
  };
  async function EditPack() {}

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
          <div class="col-lg-7 col-xl-5 mb-xs-0 mb-sm-5 mt-5 p-0">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              {Cloading ? (
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              ) : (
                <SlidePuzzle
                  fbimg={fbimg}
                  handlepuzzlescore={handlepuzzlescore}
                />
              )}
            </div>
          </div>
          <div
            class="col-md-5 col-xl-4 mb-5 mb-lg-0 mt-0 mt-sm-3 mt-md-0 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {" "}
            <div>{Cloading ? null : <SlidePuzzleAnswer fbimg={fbimg} />}</div>
          </div>

          <div className="editpagesrightnav col-xl-3 mb-3">
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

export default ScheduledSlidePuzzlePage;
