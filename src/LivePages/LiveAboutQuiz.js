import React, { useState, useEffect } from "react";
import LiveQuestionCard from "../AboutQuiz/LiveQuestionCard";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveThreeDImage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [quesArray, setquesArray] = useState([]);
  const [answersArray, setanswersArray] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/AboutQuiz/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var quesArray = snapshot.val().quesArray;
        setquesArray(quesArray);
        var answersArray = snapshot.val().answersArray;
        setanswersArray(answersArray);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <LiveNavBar />
      <br /> <br /> <br /> <br />
      <div style={{ backgroundColor: "#70cff3" }}>
        <div>
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : (
            <>
              {" "}
              {console.log(quesArray, "quesarray")}
              {console.log(answersArray, "answerArray")}
              <LiveQuestionCard
                quesArray={quesArray}
                answersArray={answersArray}
                fbimg={fbimg}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
