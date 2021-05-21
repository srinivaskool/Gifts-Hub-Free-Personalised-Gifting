import React, { useState, useEffect } from "react";
import Challenge from "../Challenge/Challenge";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveChallenge({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [loading, setloading] = useState(false);
  const [wishes, setwishes] = useState("");
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/Challenge/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var wishes = snapshot.val().wishes;
        setwishes(wishes);
        setloading(false);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <LiveNavBar />
      <br />
      <br />
      <br />

      <div style={{ backgroundColor: "#70cff3" }}>
        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <Challenge fbimg={fbimg} wishes={wishes} />
        )}
      </div>
    </div>
  );
}
