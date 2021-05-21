import React, { useState, useEffect } from "react";
import Magazine from "../Magazine/Magazine";
import firebase from "../firebase";
import HeaderBtn from "../Studio/HeaderBtn";

import { Link } from "react-router-dom";
import LiveNavBar from "../NavBars/LiveNavBar";
import Loader from "react-loader-spinner";
function LiveMagazine({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [text, settext] = useState("");
  const [name, setname] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/Magazine/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var text = snapshot.val().text;
        settext(text);
        var name = snapshot.val().name;
        setname(name);
      });
    setloading(false);
  }, []);

  return (
    <div>
      <LiveNavBar />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div className="mb-3" style={{ flex: "0.8", margin: "auto" }}>
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : (
            <Magazine fbimg={fbimg} text={text} name={name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveMagazine;
