import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import SlidePuzzleAnswer from "../SlidePuzzle/SlidePuzzleAnswer";
import firebase from "../firebase";
import "./ScheduledLiveSlidePuzzle.css";
import Loader from "react-loader-spinner";
import CircleTimer from "./CircleTimer";
import { toast } from "react-toastify";
import ScheduledLiveNavBar from "../NavBars/ScheduledLiveNavBar";
function ScheduledLiveSlidePuzzle({ match }) {
  let dispatch = useDispatch();
  const [fbimg, setfbimg] = useState("");
  const database = firebase.firestore();
  const [Livelinks, setLivelinks] = useState("");
  const [loading, setloading] = useState(true);
  const [dataurl, setdataurl] = useState([]);
  const [today, settoday] = useState();
  const [bestscore, setbestscore] = useState();
  const [puzzlescore, setpuzzlescore] = useState(0);
  const handlepuzzlescore = (e) => {
    setpuzzlescore(e);
    if (e < bestscore) {
      const todoRef = firebase
        .database()
        .ref("SlidePuzzle")
        .child(match.params.id);
      const todo = {
        url: fbimg,
        best_score: e,
      };
      var newKey = todoRef.update(todo);
      setbestscore(e);
      toast.success("You bet your previous best score, Keep playing!");
    }
  };
  async function getDoc() {
    setloading(true);
    const snapshot = await database
      .collection("Livelinks")
      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    setLivelinks(data);
    data.array_data.map((item, index) => {
      if (item.id == "puzzle") {
        settoday(index);
        dispatch({
          type: "ACTIVE_STEP",
          payload: { day: index + 1 },
        });
      }
      dataurl[index] = item.url;
    });
  }
  useEffect(async () => {
    await getDoc();
    // setloading(false);
  }, []);
  useEffect(() => {
    setloading(true);
    const todoRef = firebase
      .database()
      .ref("/SlidePuzzle/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var bestscore = snapshot.val().best_score;
        setbestscore(bestscore);
        setloading(false);
      });
  }, []);
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference =
      +new Date(Livelinks.Bday_date) -
      +new Date() -
      19800000 -
      86400000 * (dataurl.length - today);
    console.log(difference, "difference");
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  // });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <ScheduledLiveNavBar slug={match.params.slug} />

      <div class="container-fluid pt-3">
        <br />
        <br />
        <br />
        <div class="row">
          <div class="col-lg-12">
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>
                {new Date(Livelinks.Bday_date) -
                  +new Date() -
                  19800000 -
                  86400000 * (dataurl.length - today) >
                0 ? (
                  <div>
                    <h5 className="example"> This Gift opens in </h5>
                    <CircleTimer
                      Bday={
                        +new Date(Livelinks.Bday_date) -
                        +new Date() -
                        19800000 -
                        86400000 * (dataurl.length - today - 1)
                      }
                    />
                  </div>
                ) : (
                  <>
                    <center>
                      {" "}
                      {dataurl.length - today - 1 == 0 ? (
                        <h1 className="example">The Big day is here !!!</h1>
                      ) : dataurl.length - today - 1 == 1 ? (
                        <h1 className="example">
                          {dataurl.length - today - 1} day to go !!!
                        </h1>
                      ) : (
                        <h1 className="example">
                          {dataurl.length - today - 1} days to go !!!
                        </h1>
                      )}
                    </center>
                    <center>
                      {bestscore != 100000 && (
                        <center>
                          <h2>Best Score: {bestscore}</h2>
                        </center>
                      )}
                    </center>
                    <div class="row">
                      <div class="col-lg-6 mb-xs-0 mb-sm-5 mt-5">
                        {" "}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "auto",
                          }}
                        >
                          <SlidePuzzle
                            handlepuzzlescore={handlepuzzlescore}
                            fbimg={fbimg}
                          />
                        </div>
                      </div>
                      <div
                        class="col-lg-6  mb-5 mb-xl-3 mt-0 mt-sm-3 mt-md-0"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        <div>
                          <SlidePuzzleAnswer fbimg={fbimg} />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledLiveSlidePuzzle;
