import React, { useState, useEffect } from "react";
import MemoryGame from "../MemoryGame/MemoryGame";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveMemoryGamePage({ match }) {
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/MemoryGame/" + match.params.slug)
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
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <LiveNavBar />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: "0.1" }}></div>
        <div className="mb-3" style={{ flex: "0.8" }}>
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : (
            <div>
              <MemoryGame
                fbimg1={fbimg1}
                fbimg2={fbimg2}
                fbimg3={fbimg3}
                fbimg4={fbimg4}
                fbimg5={fbimg5}
                fbimg6={fbimg6}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
