import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CropPage from "../Utils/CropPage";
import OwlCarousel from "react-owl-carousel";
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
import { useDispatch } from "react-redux";
import CakeIcon from "@material-ui/icons/Cake";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Swiper.css";
import $ from "jquery";
import "../Buttons.css";
import "./SevenDayHome.css";
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

function SevenDayHome({ history }) {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const { user } = useSelector((state) => ({ ...state }));
  const { days_page } = useSelector((state) => ({ ...state }));
  const [sevenpackorder, setsevenpackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
    { id: "puzzle", ismailsent: false, content: "Slide Puzzle", url: "" },
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
    { id: "cubes", ismailsent: false, content: " 3D Heart", url: "" },
    { id: "collage", ismailsent: false, content: "Collage", url: "" },
    {
      id: "greetingcard",
      ismailsent: false,
      content: "Greeting Card",
      url: "",
    },
  ]);
  const [fivepackorder, setfivepackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
    { id: "puzzle", ismailsent: false, content: "Slide Puzzle", url: "" },
    {
      id: "memorygame",
      ismailsent: false,
      content: "Memory Game",
      url: "",
    },
    { id: "cubes", ismailsent: false, content: " 3D Heart", url: "" },
  ]);
  const [threepackorder, setthreepackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
    { id: "puzzle", ismailsent: false, content: "Slide Puzzle", url: "" },
  ]);
  const [twopackorder, settwopackorder] = useState([
    { id: "threedimage", ismailsent: false, content: "3D Image", url: "" },
    { id: "newspaper", ismailsent: false, content: "NewsPaper", url: "" },
  ]);
  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState();
  const [From_name, setFrom_name] = useState();
  const [To_name, setTo_name] = useState();
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
  const [openModal, setopenModal] = useState(false);
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
        var selectedpackorder = [];
        if (days_page.days_redirect === "2") {
          selectedpackorder = [...twopackorder];
        } else if (days_page.days_redirect === "3") {
          selectedpackorder = [...threepackorder];
        } else if (days_page.days_redirect === "5") {
          selectedpackorder = [...fivepackorder];
        } else if (days_page.days_redirect === "7") {
          selectedpackorder = [...sevenpackorder];
        }
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
  };
  var responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  };
  var responsive5 = {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };
  var responsive3 = {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };
  var responsive2 = {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - Our Recommended Packs Page</title>
        <meta
          name="description"
          content="We have sorted and separated our gifts based on the occasion they fit perfectly into. Relax, choose the pack you needed."
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
      <br />

      <div className="container">
        <div className="row border">
          <div className="col-md-4 col-lg-3 p-0 recommendedcard">
            <div
              style={{ height: "100%" }}
              class="card text-center border-0 recommendedcard"
            >
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div class="slidehoverbtnouter">
                  <div
                    onClick={() => {
                      setopenModal(true);
                      dispatch({
                        type: "REDIRECT_USER",
                        payload: {
                          days_redirect: "3",
                        },
                      });
                    }}
                    class="slidehoverbtnbutton"
                  >
                    <div class="slidehoverbtntext">3-Day Pack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9 p-0">
            <section
              class="partners "
              style={{
                position: "relative",
                top: "50%",
                transform: "translate(0,-50%)",
              }}
            >
              <div class="container p-0">
                <div class="card shadow-lg ">
                  <div class="card-body  p-5">
                    <div class="swiper-container">
                      <OwlCarousel
                        style={{ zIndex: "5" }}
                        dots={false}
                        loop
                        margin={0}
                        autoplayTimeout={3000}
                        items={3}
                        autoplay
                        autoplayHoverPause
                      >
                        <div class="swiper-wrapper align-items-center">
                          <div class="swiper-slide">
                            <img
                              src={require("../Images/logos/animatedframes.png")}
                              alt=""
                              // style={{ height: "150px" }}
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/journey.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/memorygame.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>{" "}
        <br />
        <div className="row border">
          <div className="col-md-4 col-lg-3 p-0 recommendedcard">
            <div
              style={{ height: "100%" }}
              class="card text-center border-0 recommendedcard"
            >
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div class="slidehoverbtnouter">
                  <div
                    onClick={() => {
                      setopenModal(true);
                      dispatch({
                        type: "REDIRECT_USER",
                        payload: {
                          days_redirect: "5",
                        },
                      });
                    }}
                    class="slidehoverbtnbutton"
                  >
                    <div class="slidehoverbtntext">5-Day Pack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9 p-0">
            <section
              class="partners "
              style={{
                position: "relative",
                top: "50%",
                transform: "translate(0,-50%)",
              }}
            >
              <div class="container p-0">
                <div class="card shadow-lg ">
                  <div class="card-body p-5">
                    <div class="swiper-container">
                      <OwlCarousel
                        style={{ zIndex: "5" }}
                        dots={false}
                        loop
                        margin={0}
                        autoplayTimeout={3000}
                        items={3}
                        autoplay
                        autoplayHoverPause
                      >
                        <div class="swiper-wrapper align-items-center">
                          <div class="swiper-slide">
                            <img
                              src={require("../Images/logos/animatedframes.png")}
                              alt=""
                              // style={{ height: "150px" }}
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/journey.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/memorygame.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/newspaper.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/collage.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
        <div className="row border">
          <div className="col-md-4 col-lg-3 p-0 recommendedcard">
            <div
              style={{ height: "100%" }}
              class="card text-center border-0 recommendedcard"
            >
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <div class="slidehoverbtnouter">
                  <div
                    onClick={() => {
                      setopenModal(true);
                      dispatch({
                        type: "REDIRECT_USER",
                        payload: {
                          days_redirect: "7",
                        },
                      });
                    }}
                    class="slidehoverbtnbutton"
                  >
                    <div class="slidehoverbtntext">7-Day Pack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-9 p-0">
            <section
              class="partners "
              style={{
                position: "relative",
                top: "50%",
                transform: "translate(0,-50%)",
              }}
            >
              <div class="container p-0">
                <div class="card shadow-lg ">
                  <div class="card-body p-5">
                    <div class="swiper-container">
                      <OwlCarousel
                        style={{ zIndex: "5" }}
                        dots={false}
                        loop
                        margin={0}
                        autoplayTimeout={3000}
                        items={3}
                        autoplay
                        autoplayHoverPause
                      >
                        <div class="swiper-wrapper align-items-center">
                          <div class="swiper-slide">
                            <img
                              src={require("../Images/logos/animatedframes.png")}
                              alt=""
                              // style={{ height: "150px" }}
                            />
                          </div>
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/journey.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/memorygame.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/newspaper.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                        <div class="swiper-slide">
                          <img
                            src={require("../Images/logos/collage.png")}
                            alt=""
                            // style={{ height: "150px" }}
                          />
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <br />
      </div>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          overflowY: "auto",
          alignItems: "center",
        }}
        open={openModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div className={classes.paper}>
            {loading ? (
              <center>
                {" "}
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={300}
                  width={300}
                />
              </center>
            ) : (
              <div>
                <div
                  style={{ backgroundColor: "#ffffff", borderRadius: "5px" }}
                  class="container-fluid pt-3"
                >
                  <div class="p-3">
                    <center>
                      <form onSubmit={CreatePack}>
                        <div className={classes.margin}>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                              <FolderSharedOutlinedIcon
                                style={{ fill: "rgb(66 66 66)" }}
                              />
                            </Grid>
                            <Grid item>
                              <TextField
                                InputLabelProps={{
                                  style: { color: "rgb(66 66 66)" },
                                }}
                                id="input-with-icon-grid"
                                label="Folder Name"
                                value={Folder_name}
                                onChange={(e) => setFolder_name(e.target.value)}
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <br />
                        <div className={classes.margin}>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                              <AccountCircleOutlinedIcon
                                style={{ fill: "rgb(66 66 66)" }}
                              />
                            </Grid>
                            <Grid item>
                              <TextField
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
                        <div className={classes.margin}>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                              <AccountCircleOutlinedIcon
                                style={{ fill: "rgb(66 66 66)" }}
                              />
                            </Grid>
                            <Grid item>
                              <TextField
                                InputLabelProps={{
                                  style: { color: "rgb(66 66 66)" },
                                }}
                                id="input-with-icon-grid"
                                label="Receivers Name"
                                value={To_name}
                                onChange={(e) => setTo_name(e.target.value)}
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <br />
                        <div className={classes.margin}>
                          <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                              <CakeIcon style={{ fill: "rgb(66 66 66)" }} />
                            </Grid>
                            <Grid item>
                              <TextField
                                InputLabelProps={{
                                  style: { color: "rgb(66 66 66)" },
                                }}
                                id="input-with-icon-grid"
                                label="Wishes"
                                placeholder="Many more Happy Returns of the day"
                                value={wishes}
                                onChange={(e) => setwishes(e.target.value)}
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <br />
                        <TextField
                          style={{}}
                          id="date"
                          label="Event Date"
                          type="date"
                          value={Bday_date}
                          defaultValue={Bday_date}
                          className={classes.textField}
                          onChange={(e) => {
                            console.log(Bday_date, "birthday", e.target.value);
                            setBday_date(e.target.value.toLocaleString());
                          }}
                          InputLabelProps={{
                            shrink: true,
                            style: { color: "rgb(66 66 66)" },
                          }}
                        />{" "}
                        <br />
                        <br />
                        <div style={{ height: "45px" }}>
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
                                width: "230px",
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
                              <label
                                style={{ opacity: "0.4" }}
                                htmlFor="submit"
                              >
                                <button
                                  disabled
                                  style={{ cursor: "default" }}
                                  className="modal-button"
                                >
                                  {" "}
                                  Create {days_page.days_redirect} day pack
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
                                <button className="modal-button">
                                  {" "}
                                  Create {days_page.days_redirect} day pack
                                </button>
                              </label>
                            </>
                          )}{" "}
                        </center>
                      </form>
                    </center>
                  </div>
                </div>
                <Fab
                  onClick={() => {
                    setopenModal(false);
                  }}
                  className={classes.DelBut}
                  color="primary"
                  aria-label="add"
                >
                  <CloseIcon />
                </Fab>
              </div>
            )}
          </div>
        }
      </Modal>

      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>{error ? <p>Ops, there is an error :(</p> : null}</div>
      )}
      <br />
      <Footer />
    </div>
  );
}

export default SevenDayHome;
