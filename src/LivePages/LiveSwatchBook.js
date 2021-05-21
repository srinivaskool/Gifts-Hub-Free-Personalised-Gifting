import React, { useState, useEffect } from "react";
import SwatchBook from "../SwatchBook/SwatchBook";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveTicketDeck({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [name, setname] = useState("");
  const [handscol, sethandscol] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/SwatchBook/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var name = snapshot.val().name;
        setname(name);
        var handscol = snapshot.val().handscol;
        sethandscol(handscol);
      });
    setloading(false);
  }, []);
  return (
    <div
      style={{
        background:
          "url(https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fegg_shell.jpg?alt=media&token=c32757c0-9119-4740-beb5-ea90c327aec9)",
        height: "100vh",
      }}
    >
      {/* <LiveNavBar />
      <br /> */}
      <br />
      <br />
      <center>
        <h1 className="example">Happy Birthday Meher Gajula!!!</h1>
      </center>
      <div>
        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <div className="row">
            <div className="col-12">
              <SwatchBook
                name={name.toUpperCase()}
                fbimg={fbimg}
                handscol={handscol}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
