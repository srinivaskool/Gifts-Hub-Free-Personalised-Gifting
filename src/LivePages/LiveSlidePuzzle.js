import React, { useState, useEffect } from "react";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import SlidePuzzleAnswer from "../SlidePuzzle/SlidePuzzleAnswer";
import firebase from "../firebase";
import { toast } from "react-toastify";
import "./LiveSlidePuzzle.css";
import Loader from "react-loader-spinner";
import LiveNavBar from "../NavBars/LiveNavBar";
function LiveAnimatedFramePage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [loading, setloading] = useState(true);
  const [bestscore, setbestscore] = useState();
  const [puzzlescore, setpuzzlescore] = useState(0);
  const handlepuzzlescore = (e) => {
    setpuzzlescore(e);
    if (e < bestscore) {
      const todoRef = firebase
        .database()
        .ref("SlidePuzzle")
        .child(match.params.slug);
      const todo = {
        url: fbimg,
        best_score: e,
      };
      var newKey = todoRef.update(todo);
      setbestscore(e);
      toast.success("You bet your previous best score, Keep playing!");
    }
  };
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/SlidePuzzle/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var bestscore = snapshot.val().best_score;
        setbestscore(bestscore);
      });

    setloading(false);
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <LiveNavBar />
      <br />
      <br />
      <br />
      <div class="container-fluid pt-3">
        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <center>
            {bestscore != 100000 && (
              <center>
                <h2>Best Score: {bestscore}</h2>
              </center>
            )}
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
                class="col-lg-6 mb-5 mb-xl-3 mt-0 mt-sm-3 mt-md-0"
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
          </center>
        )}
      </div>
    </div>
  );
}

export default LiveAnimatedFramePage;
