import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../firebase";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Share from "../Utils/Share";
import ScheduledChallengePage from "../Challenge/ScheduledChallengePage";
import ScheduledAboutQuizPage from "../AboutQuiz/ScheduledAboutQuizPage";
import ScheduledCalendarPage from "../Calendar/ScheduledCalendarPage";
import ScheduledMagazinePage from "../Magazine/ScheduledMagazinePage";
import ScheduledThreeDCarouselPage from "../ThreeDCarousel/ScheduledThreeDCarouselPage";
import ScheduledJourneyPage from "../Journey/ScheduledJourneyPage";
import ScheduledSwatchBookPage from "../SwatchBook/ScheduledSwatchBookPage";
import ScheduledAnimatedFrame from "../AnimatedFrames/ScheduledAnimatedFramePage";
import ScheduledSpecialCardPage from "../SpecialCard/ScheduledSpecialCardPage";
import ScheduledCollagePage from "../Collage/ScheduledCollagePage";
import ScheduledHoneyCombPage from "../HoneyComb/ScheduledHoneyCombPage";
import ScheduledCubesPage from "../Cubes/ScheduledCubesPage";
import ScheduledMemoryGamePage from "../MemoryGame/ScheduledMemoryGamePage";
import ScheduledThreeDImagePage from "../ThreeDImage/ScheduledThreeDImagePage";
import ScheduledNewsPaperPage from "../NewsPaper/ScheduledNewsPaperPage";
import ScheduledSlidePuzzlePage from "../SlidePuzzle/ScheduledSlidePuzzlePage";
import ScheduledOpenGreetingCardPage from "../OpenGreetingCard/ScheduledOpenGreetingCardPage";
import Loader from "react-loader-spinner";
import Copy from "../Utils/Copy";
import Paper from "@material-ui/core/Paper";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import NavBar from "../NavBars/NavBar";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { isMobileOnly, isTablet } from "react-device-detect";
import "./ContinuePack.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
const usemodStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    width: "70vw",
    height: "80vh",
    maxWidth: "840px",
    minWidth: "280px",
    position: "absolute",
    color: "#ffffff",
    marginTop: "0vh",
    border: null,
    // backgroundColor: "#009dd9",
    overflow: "auto",
    padding: theme.spacing(0, 0, 0),
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(142),
    left: theme.spacing(250),
  },
}));

function ContinuePack({ match, history }) {
  const theme = useTheme();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch({
      type: "EDIT_SCHEDULED",
      payload: { text: "" },
    });
    if (completed[activeStep + 1] == true) {
      var splits = dataurl[activeStep + 1].split("/");
      dispatch({
        type: "EDIT_SCHEDULED",
        payload: { text: splits[5] },
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch({
      type: "EDIT_SCHEDULED",
      payload: { text: "" },
    });
    if (completed[activeStep - 1] == true) {
      var splits = dataurl[activeStep - 1].split("/");
      dispatch({
        type: "EDIT_SCHEDULED",
        payload: { text: splits[5] },
      });
    }
  };
  const [maxSteps, setmaxSteps] = useState();
  const database = firebase.firestore();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const modclasses = usemodStyles();
  const [loading, setloading] = useState(true);
  const [slag, setslag] = useState(match.params.slug);
  const [livelink, setlivelink] = useState();
  const [showshare, setshowshare] = useState(false);
  const [data1, setdata1] = useState();
  const [daycounter, setdaycounter] = useState();
  const [datacontent, setdatacontent] = useState([]);
  const [dataid, setdataid] = useState([]);
  const [dataurl, setdataurl] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      } else {
        await getDoc(user.uid);
        setloading(false);
      }
    });
  }, []);

  async function getDocnew() {
    dataurl.map((item, index) => {
      if (item != "") {
        const newCompleted = completed;
        newCompleted[index] = true;
        setCompleted(newCompleted);
      }
    });
    for (var i = 0; i < dataurl.length; i++) {
      if (dataurl[i] == "") {
        setActiveStep(i);
        break;
      }
    }

    dispatch({
      type: "EDIT_SCHEDULED",
      payload: { text: "" },
    });
    if (allStepsCompleted()) {
      var splits = dataurl[activeStep].split("/");
      dispatch({
        type: "EDIT_SCHEDULED",
        payload: { text: splits[5] },
      });
    }
  }

  async function getDoc(useruid) {
    setloading(true);
    if (!useruid) {
      useruid = user.uid;
    }
    console.log(useruid, "useridif");
    const snapshot = await database
      .collection("n-day-pack")
      .doc(useruid)
      .collection("giftshub")
      .doc(match.params.slug)
      .get();
    const datanew = snapshot.data();
    setdata1(datanew);
    const data = await snapshot.data().array_data;
    setdaycounter(data.length - activeStep - 1);
    setmaxSteps(data.length);
    data.map((item, index) => {
      datacontent[index] = item.content;
      dataid[index] = item.id;
      dataurl[index] = item.url;
    });

    await getDocnew();
    setloading(false);

    setlivelink(
      "http://giftshub.live/scheduledlive/main/" + `${match.params.slug}`
    );

    await getDocnew();
    setloading(false);
  }
  const setTourOpend = (e) => {
    setIsTourOpen(e);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  const Browview = () => {
    return (
      <div class="col-lg-6 sharebannertext">
        {" "}
        <p>
          {" "}
          Hello! Allow us to give you a small tour on how to generate this
          special gift. We are sure you wouldn't need one the next time you are
          back.
          <br /> P.S : Its that easy
        </p>
        <center>
          <div
            style={{
              margin: "auto",
              // position: "absolute",
              // top: "50%",
              // left: "50%",
              // MsTransform: "translateY(-50%) translateX(-50%)",
              // transform: "translateY(-50%) translateX(-50%)",
            }}
          >
            <button
              onClick={() => {
                setIsTourOpen(true);
              }}
              className="main-button"
            >
              Start Tour
            </button>
          </div>
        </center>
      </div>
    );
  };
  function getSteps() {
    return datacontent;
  }

  function getStepContent(step) {
    if (dataid[step] === "challenge") {
      return (
        <ScheduledChallengePage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "aboutquiz") {
      return (
        <ScheduledAboutQuizPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "honeycomb") {
      return (
        <ScheduledHoneyCombPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "magazine") {
      return (
        <ScheduledMagazinePage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "calendar") {
      return (
        <ScheduledCalendarPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "threedcarousel") {
      return (
        <ScheduledThreeDCarouselPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "journey") {
      return (
        <ScheduledJourneyPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "swatchbook") {
      return (
        <ScheduledSwatchBookPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "puzzle") {
      return (
        <ScheduledSlidePuzzlePage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "animatedframe") {
      return (
        <ScheduledAnimatedFrame
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "specialcard") {
      return (
        <ScheduledSpecialCardPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "memorygame") {
      return (
        <ScheduledMemoryGamePage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "collage") {
      return (
        <ScheduledCollagePage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "cubes") {
      return (
        <ScheduledCubesPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "newspaper") {
      return (
        <ScheduledNewsPaperPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
    if (dataid[step] === "threedimage") {
      return (
        <ScheduledThreeDImagePage
          step={step}
          slug={slag}
          getDoc={getDoc}
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
        />
      );
    }
    if (dataid[step] === "greetingcard") {
      return (
        <ScheduledOpenGreetingCardPage
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
  }
  const Stepperclasses = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setdaycounter(dataurl.length - step - 1);
    dispatch({
      type: "EDIT_SCHEDULED",
      payload: { text: "" },
    });
    if (completed[step] == true) {
      var splits = dataurl[step].split("/");
      dispatch({
        type: "EDIT_SCHEDULED",
        payload: { text: splits[5] },
      });
    }
  };

  const horizontalStepper = () => {
    return (
      <div>
        <div className={Stepperclasses.root}>
          {!loading ? (
            <div>
              <div className="Laptopstepper">
                <div className="container px-0">
                  <Stepper
                    className="px-0"
                    alternativeLabel
                    nonLinear
                    activeStep={activeStep}
                  >
                    {steps.map((label, index) => (
                      <Step key={label}>
                        <StepButton
                          onClick={handleStep(index)}
                          completed={completed[index]}
                        >
                          {label}
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                </div>
              </div>
              <div className="mobilestepper">
                <Paper square elevation={0}>
                  <Typography className="text-center">
                    {datacontent[activeStep]}
                    {completed[activeStep] && (
                      <CheckCircleIcon style={{ color: "green" }} />
                    )}
                  </Typography>
                </Paper>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  variant="text"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </div>
            </div>
          ) : (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          )}

          <div>
            {allStepsCompleted() && !loading ? (
              <div>
                <Typography
                  className={Stepperclasses.instructions}
                  className="text-center"
                >
                  All Componenets completed - you&apos;re finished
                  <center>
                    {" "}
                    {daycounter == 0 ? (
                      <h1 className="ndaystogo">The Big day is here !!!</h1>
                    ) : daycounter == 1 ? (
                      <h1 className="ndaystogo">{daycounter} day to go !!!</h1>
                    ) : (
                      <h1 className="ndaystogo">{daycounter} days to go !!!</h1>
                    )}
                  </center>
                  {!loading && getStepContent(activeStep)}
                </Typography>
              </div>
            ) : (
              <div>
                <Typography
                  className={Stepperclasses.instructions}
                  className="text-center"
                >
                  <center>
                    {" "}
                    {daycounter == 0 ? (
                      <h1 className="ndaystogo">The Big day is here !!!</h1>
                    ) : daycounter == 1 ? (
                      <h1 className="ndaystogo">{daycounter} day to go !!!</h1>
                    ) : (
                      <h1 className="ndaystogo">{daycounter} days to go !!!</h1>
                    )}
                  </center>
                  {!loading && getStepContent(activeStep)}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ textAlign: "justify" }}>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - Edit Your Pack Page</title>
        <meta
          name="description"
          content="Now that you have chosen the perfect gifts for your loved one, take one step further and customize them with your love."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="valentine,greetings,gifts for all,gifs,gifthub,giftshub, personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india, pack, gifting, free, valentines, love, n-day pack, we at gifts, valentines pack, recommended pack, gifts hub"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#d3d3d3" }} class="container">
        <div class="row sharebanner">
          <div class="col-lg-6 sharebannertext">
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information. only
              one link for all components
            </p>
            <center>
              <div
                style={{
                  margin: "auto",
                }}
              >
                <button
                  onClick={() => {
                    setshowshare(true);
                    setopenModal(true);
                  }}
                  className="main-button"
                  data-tut="reactour__sharelink"
                >
                  Share
                </button>

                {!showshare ? null : (
                  <Modal
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginRight: "auto",
                      overflow: "hidden",
                      alignItems: "center",
                    }}
                    open={openModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {
                      <div className={modclasses.paper}>
                        <div>
                          <div
                            style={{ backgroundColor: "#ffffff" }}
                            class="container-fluid p-4"
                          >
                            <div>
                              <div>
                                <center>
                                  <div style={{ width: "200px" }}>
                                    <Copy livelink={livelink} />
                                  </div>
                                </center>
                                <Share
                                  livelink={livelink}
                                  to={data1.To_name}
                                  from={data1.From_name}
                                />
                              </div>
                            </div>
                          </div>
                          <Fab
                            onClick={() => {
                              setopenModal(false);
                              setshowshare(false);
                            }}
                            className={modclasses.DelBut}
                            color="primary"
                            aria-label="add"
                          >
                            <CloseIcon />
                          </Fab>
                        </div>
                      </div>
                    }
                  </Modal>
                )}
              </div>
            </center>
            <br />
          </div>
          {isMobileOnly ? null : isTablet ? null : Browview()}
        </div>
      </div>

      {horizontalStepper()}
    </div>
  );
}

export default ContinuePack;
