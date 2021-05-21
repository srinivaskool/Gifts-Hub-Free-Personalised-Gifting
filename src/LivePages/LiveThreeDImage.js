import React, { useState, useEffect } from "react";
import ThreeDImage from "../ThreeDImage/ThreeDImage";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveThreeDImage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [firstcol, setfirstcol] = useState("");
  const [secondcol, setsecondcol] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/ThreeDImage/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var col1 = snapshot.val().firstcol;
        setfirstcol(col1);
        var col2 = snapshot.val().secondcol;
        setsecondcol(col2);
        setloading(false);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
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
          <ThreeDImage
            firstcol={firstcol}
            secondcol={secondcol}
            fbimg={fbimg}
          />
        )}
      </div>
    </div>
  );
}
