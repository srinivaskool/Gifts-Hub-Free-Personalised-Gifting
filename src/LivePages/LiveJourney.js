import React, { useState, useEffect } from "react";
import Journey from "../Journey/Journey";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveCubesPage({ match }) {
  const [t1, sett1] = useState("");
  const [t2, sett2] = useState("");
  const [t3, sett3] = useState("");
  const [t4, sett4] = useState("");
  const [t5, sett5] = useState("");
  const [heading, setheading] = useState("");
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
      .ref("/Journey/" + match.params.slug)
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
        var t1 = snapshot.val().t1;
        sett1(t1);
        var t2 = snapshot.val().t2;
        sett2(t2);
        var t3 = snapshot.val().t3;
        sett3(t3);
        var t4 = snapshot.val().t4;
        sett4(t4);
        var t5 = snapshot.val().t5;
        sett5(t5);
        var heading = snapshot.val().heading;
        setheading(heading);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <LiveNavBar />

      <div>
        <div style={{ display: "flex" }}>
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage:
                  "radial-gradient(circle at center, #899dc4, #495d84)",
                background:
                  "radial-gradient(ellipse at bottom, #1b2735, #090a0f)",
                width: "100vw",
                height: "100vh",
              }}
            >
              <div style={{ width: "100%" }}>
                <Journey
                  fbimg1={fbimg1}
                  fbimg2={fbimg2}
                  fbimg3={fbimg3}
                  fbimg4={fbimg4}
                  fbimg5={fbimg5}
                  fbimg6={fbimg6}
                  t1={t1}
                  t2={t2}
                  t3={t3}
                  t4={t4}
                  t5={t5}
                  heading={heading}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
