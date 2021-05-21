import React, { useState, useEffect } from "react";
import AnimatedFrame from "../AnimatedFrames/AnimatedFrame";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
import Loader from "react-loader-spinner";
function LiveAnimatedFramePage({ match }) {
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [title, settitle] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/AnimatedFrame/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;
        setfbimg1(img1);
        var img2 = snapshot.val().url2;
        setfbimg2(img2);
        var title = snapshot.val().title;
        settitle(title);
      });
    setloading(false);
  }, []);

  return (
    <div>
      <LiveNavBar />
      <br />
      <br />
      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <AnimatedFrame fbimg1={fbimg1} fbimg2={fbimg2} title={title} />
      )}
    </div>
  );
}

export default LiveAnimatedFramePage;
