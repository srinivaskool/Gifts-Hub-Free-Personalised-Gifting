import React, { useState, useEffect } from "react";
import NewsPaper from "../NewsPaper/NewsPaper";
import firebase from "../firebase";
import HeaderBtn from "../Studio/HeaderBtn";

import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
import LiveNavBar from "../NavBars/LiveNavBar";
function LiveNewsPaper({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [head, sethead] = useState("");
  const [para, setpara] = useState("");
  const [loading, setloading] = useState(false);
  const [BDate, setBDate] = useState();
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/NewsPaper/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var head = snapshot.val().head;
        sethead(head);
        var para = snapshot.val().para;
        setpara(para);
        var Bdate = snapshot.val().eventDate;
        setBDate(Bdate);
      });
    setloading(false);
  }, []);

  return (
    <div>
      <LiveNavBar />
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }}></div>
        <div id="newspaper" className="mb-3" style={{ flex: "0.8" }}>
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : (
            <NewsPaper
              fbimg={fbimg}
              head={head}
              para={para}
              startDate={BDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveNewsPaper;
