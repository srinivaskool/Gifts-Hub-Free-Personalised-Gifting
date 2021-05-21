import React, { useState, useEffect } from "react";
import ThreeDCarousel from "../ThreeDCarousel/ThreeDCarousel";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveThreeDCarousel({ match }) {
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [text, settext] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/ThreeDCarousel/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;
        setfbimg1(img1);
        var img2 = snapshot.val().url2;
        setfbimg2(img2);
        var img3 = snapshot.val().url3;
        setfbimg3(img3);
        var img4 = snapshot.val().url4;
        setfbimg4(img4);
        var img5 = snapshot.val().url5;
        setfbimg5(img5);
        var img6 = snapshot.val().url6;
        setfbimg6(img6);
        var text = snapshot.val().text;
        settext(text);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <LiveNavBar />

      <div>
        <div style={{ display: "flex" }}>
          <div></div>
          <div style={{ flex: "01" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <ThreeDCarousel
                fbimg1={fbimg1}
                fbimg2={fbimg2}
                fbimg3={fbimg3}
                fbimg4={fbimg4}
                fbimg5={fbimg5}
                fbimg6={fbimg6}
                text={text}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
