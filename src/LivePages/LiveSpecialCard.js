import React, { useState, useEffect } from "react";
import SpecialCard from "../SpecialCard/SpecialCard";
import LiveNavBar from "../NavBars/LiveNavBar";
import firebase from "../firebase";
import Loader from "react-loader-spinner";
export default function LiveSpecialCard({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");
  const [para, setpara] = useState("");

  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/SpecialCard/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var head1 = snapshot.val().head1;
        sethead1(head1);
        var head2 = snapshot.val().head2;
        sethead2(head2);
        var para = snapshot.val().para;
        setpara(para);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <LiveNavBar />
      <br />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div className="mb-3" style={{ flex: "0.7" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <SpecialCard
                fbimg={fbimg}
                head2={head2}
                head1={head1}
                para={para}
              />
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
  );
}
