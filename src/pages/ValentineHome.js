import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CropPage from "../Utils/CropPage";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Loader from "react-loader-spinner";
import NavBar from "../NavBars/NavBar";
import Footer from "../Footers/Footer";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch } from "react-redux";
import CakeIcon from "@material-ui/icons/Cake";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Swiper.css";
import $ from "jquery";
import "../Buttons.css";
import "./Home.css";
import { Helmet } from "react-helmet";
const useStyles = makeStyles((theme) => ({
  margin: {},
  paper: {
    borderRadius: "5px",
    width: "100%",
    maxWidth: "320px",
    minWidth: "280px",
    position: "absolute",
    color: "#ffffff",
    marginTop: "0vh",
    border: null,
    padding: theme.spacing(0, 0, 0),
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(142),
    left: theme.spacing(250),
    backgroundColor: "#fb7777",
    margin: "5px",
    color: "#ffffff",
    width: "35px",
    height: "35px",
  },
}));

function ValentineHome({ history }) {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const { user } = useSelector((state) => ({ ...state }));
  const { days_page } = useSelector((state) => ({ ...state }));
  const [valentinepackorder, setvalentinepackorder] = useState([
    { id: "cubes", ismailsent: false, content: " 3D Heart", url: "" },
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    {
      id: "specialcard",
      ismailsent: false,
      content: "Special Card",
      url: "",
    },
    {
      id: "journey",
      ismailsent: false,
      content: "Journey",
      url: "",
    },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
    { id: "puzzle", ismailsent: false, content: "Slide Puzzle", url: "" },
    {
      id: "animatedframe",
      ismailsent: false,
      content: "Animated Frame ",
      url: "",
      img: "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFrames.PNG?alt=media&token=349119f7-5722-4887-8bd7-c4586f916f94",
    },
    {
      id: "memorygame",
      ismailsent: false,
      content: "Memory Game",
      url: "",
    },
    {
      id: "honeycomb",
      ismailsent: false,
      content: " Honey Comb ",
      url: "",
    },

    { id: "collage", ismailsent: false, content: "Collage", url: "" },
    {
      id: "threedcarousel",
      ismailsent: false,
      content: "3D Carousel",
      url: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60_0gL8ZRN3M91p7rKmcrV8mU_hL3bbejKA&usqp=CAU",
    },
    {
      id: "greetingcard",
      ismailsent: false,
      content: "Greeting Card",
      url: "",
    },
    {
      id: "aboutquiz",
      ismailsent: false,
      content: "About Quiz",
      url: "",
      img: "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fmemo.PNG?alt=media&token=beeb8d64-7501-4051-91e9-d15ba8977de4",
    },
    {
      id: "challenge",
      ismailsent: false,
      content: "Challenge",
      url: "",
      img: "https://img.timeinc.net/time/images/covers/asia/2012/20121105_600.jpg",
    },
  ]);

  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState();
  const [From_name, setFrom_name] = useState();
  const [To_name, setTo_name] = useState();
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
  const [openModal, setopenModal] = useState(true);
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [fbimg, setfbimg] = useState();
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [wishes, setwishes] = useState("");
  const [Bday_date, setBday_date] = useState(new Date());

  $(document).ready(function () {
    $(".card").hover(
      function () {
        $(this).removeClass("shadow-none");
        $(this).addClass("shadow");
      },
      function () {
        $(this).removeClass("shadow");
        $(this).addClass("shadow-none");
      }
    );
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      }
    });
  }, []);

  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));
    setopencrop(true);
  };

  const CreatePack = (e) => {
    setloading(true);
    e.preventDefault();
    var ud = uuidv4();
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        var selectedpackorder = [...valentinepackorder];

        var s = storage
          .ref("images")
          .child(ud)
          .putString(image_url, "base64", { contentType: "image/jpg" })
          .then((savedImage) => {
            savedImage.ref.getDownloadURL().then((downUrl) => {
              var sevendayPack = firebase.firestore().collection("/n-day-pack");
              var sevendayPackPack = sevendayPack
                .doc(`${user.uid}`)
                .collection("giftshub");
              sevendayPackPack
                .add({
                  Folder_name: Folder_name,
                  wishes: wishes,
                  fbimg: downUrl,
                  Bday_date: Bday_date,
                  From_name: From_name,
                  To_name: To_name,
                  array_data: selectedpackorder,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(function (docRef) {
                  var LivelinkPack = firebase
                    .firestore()
                    .collection("/Livelinks");
                  var LivelinkPackPack = LivelinkPack.doc(docRef.id).set({
                    Folder_name: Folder_name,
                    wishes: wishes,
                    fbimg: downUrl,
                    From_name: From_name,
                    Bday_date: Bday_date,
                    To_name: To_name,
                    array_data: selectedpackorder,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  });
                  history.push(`/ContinuePack/${docRef.id}`);
                  setloading(false);
                })
                .catch(function (error) {
                  console.error("Error adding Tutorial: ", error);
                });
            });
          });
      }
    );
    dispatch({
      type: "REDIRECT_USER",
      payload: {
        days_redirect: "Valentines",
      },
    });
  };

  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - Valentines Pack Page</title>
        <meta
          name="description"
          content="All you need is love. Checkout this valentines pack and spread the love for 14 days straight before the special day."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="valentine,greetings,gifts for all,gifs,gifthub,giftshub, personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india,"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <NavBar />
      <br />
      <br />
      <br />

      <div class="container inputmodal my-5 mx-auto">
        <div className="row mx-auto mt-5 p-5">
          <div className="col-sm-6 col-md-4 col-lg-3 p-3">
            <Grid
              style={{ width: "100%" }}
              container
              spacing={1}
              alignItems="flex-end"
              className="mx-auto"
            >
              <Grid item>
                <FolderSharedOutlinedIcon style={{ fill: "rgb(66 66 66)" }} />
              </Grid>
              <Grid style={{ width: "80%" }} item>
                <TextField
                  fullWidth="true"
                  required
                  InputLabelProps={{
                    style: { color: "rgb(66 66 66)" },
                  }}
                  id="input-with-icon-grid"
                  label="Folder Name"
                  value={Folder_name}
                  onChange={(e) => setFolder_name(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <div className="col-sm-6  col-md-4 col-lg-3 p-3">
            <Grid
              style={{ width: "100%" }}
              container
              spacing={1}
              alignItems="flex-end"
              className="mx-auto"
            >
              <Grid item>
                <AccountCircleOutlinedIcon style={{ fill: "rgb(66 66 66)" }} />
              </Grid>
              <Grid style={{ width: "80%" }} item>
                <TextField
                  fullWidth="true"
                  InputLabelProps={{
                    style: { color: "rgb(66 66 66)" },
                  }}
                  id="input-with-icon-grid"
                  label="Your Name"
                  value={From_name}
                  onChange={(e) => setFrom_name(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </div>
          <br />
          <div className="col-sm-6  col-md-4 col-lg-3 p-3">
            <Grid
              style={{ width: "100%" }}
              container
              spacing={1}
              alignItems="flex-end"
              className="mx-auto"
            >
              <Grid item>
                <FavoriteBorderIcon style={{ fill: "rgb(66 66 66)" }} />
              </Grid>
              <Grid style={{ width: "80%" }} item>
                <TextField
                  fullWidth="true"
                  InputLabelProps={{
                    style: { color: "rgb(66 66 66)" },
                  }}
                  id="input-with-icon-grid"
                  label="Valentine's Name"
                  value={To_name}
                  onChange={(e) => setTo_name(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </div>
          <br />
          <div className="col-sm-6  col-md-4 col-lg-3 p-3">
            <Grid
              style={{ width: "100%" }}
              container
              spacing={1}
              alignItems="flex-end"
              className="mx-auto"
            >
              <Grid style={{ width: "80%" }} item>
                <TextField
                  fullWidth="true"
                  id="date"
                  label="Event Date"
                  type="date"
                  value={Bday_date}
                  defaultValue={Bday_date}
                  onChange={(e) =>
                    setBday_date(e.target.value.toLocaleString())
                  }
                  InputLabelProps={{
                    shrink: true,
                    style: { color: "rgb(66 66 66)" },
                  }}
                />
              </Grid>
            </Grid>
          </div>{" "}
          <br />
          <div className="container">
            <div className="row">
              <div className="col-sm-6 pt-3 ml-0 ml-sm-n2">
                <center>
                  <Grid
                    container
                    spacing={1}
                    alignItems="flex-end"
                    style={{ width: "100%" }}
                  >
                    <Grid item>
                      <CakeIcon style={{ fill: "rgb(66 66 66)" }} />
                    </Grid>
                    <Grid style={{ width: "80%" }} item>
                      <TextField
                        fullWidth="true"
                        InputLabelProps={{
                          style: { color: "rgb(66 66 66)" },
                        }}
                        id="input-with-icon-grid"
                        placeholder="Many more Happy Returns of the day"
                        label="Wishes"
                        value={wishes}
                        onChange={(e) => setwishes(e.target.value)}
                        required
                      />
                    </Grid>
                  </Grid>
                </center>
              </div>
              <div className="col-sm-6   pt-4">
                <input
                  required
                  style={{ display: "none" }}
                  accept="image/* "
                  id="ImageInput"
                  name="ImageInput"
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
                <label htmlFor="ImageInput">
                  <div
                    style={{
                      height: "45px",
                      width: "210px",
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid rgb(66 66 66)",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    {send ? (
                      <CheckBoxOutlinedIcon
                        style={{
                          fill: "rgb(66 66 66)",
                          marginLeft: "7px",
                        }}
                      />
                    ) : (
                      <ImageOutlinedIcon
                        style={{
                          fill: "rgb(66 66 66)",
                          marginLeft: "7px",
                        }}
                      />
                    )}
                    <h2
                      style={{
                        fontSize: "18px",
                        color: "rgb(66 66 66)",
                        marginLeft: "8px",
                        marginBottom: "0",
                      }}
                    >
                      {send ? "Image added" : "Add your image *"}{" "}
                    </h2>{" "}
                  </div>
                </label>
              </div>
              <br />
              <br />
            </div>
          </div>{" "}
        </div>
      </div>

      <form onSubmit={CreatePack} className="mx-auto my-3">
        <center>
          {!Bday_date ? (
            <>
              <input
                disabled
                style={{ display: "none" }}
                id="submit"
                type="submit"
                value="Create 7 day pack"
              />
              <label style={{ opacity: "0.4" }} htmlFor="submit">
                <button
                  disabled
                  style={{ cursor: "default" }}
                  className="main-button  createvalentinesdaypack"
                >
                  {" "}
                  Create Valentines day pack
                </button>
              </label>
            </>
          ) : (
            <>
              <input
                style={{ display: "none" }}
                id="submit"
                type="submit"
                value="Create 7 day pack"
              />
              <label htmlFor="submit">
                <button className="main-button createvalentinesdaypack">
                  {" "}
                  Create Valentines day pack
                </button>
              </label>
            </>
          )}{" "}
        </center>
      </form>

      {loading ? (
        <Loader
          type="Hearts"
          color="#f77a7a"
          height={300}
          width={300}
          className="loadanim"
        />
      ) : (
        <div>{error ? <p>Ops, there is an error :(</p> : null}</div>
      )}
      <br />
      <Footer />
    </div>
  );
}

export default ValentineHome;
