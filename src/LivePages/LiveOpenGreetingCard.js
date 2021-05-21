import React, { useState, useEffect } from "react";
import OpenGreetingCard from "../OpenGreetingCard/OpenGreetingCard";
import firebase from "../firebase";
import Loader from "react-loader-spinner";
import LiveNavBar from "../NavBars/LiveNavBar";
function LiveAnimatedFramePage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [message, setmessage] = useState("");
  const [occassion, setoccassion] = useState("");
  const [totext, settotext] = useState("");
  const [fromtext, setfromtext] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/OpenGreetingCard/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);

        var msg = snapshot.val().message;
        setmessage(msg);
        var occn = snapshot.val().occassion;
        setoccassion(occn);
        var to_nam = snapshot.val().totext;
        settotext(to_nam);
        var from_nam = snapshot.val().fromtext;
        setfromtext(from_nam);
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
      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <OpenGreetingCard
          fbimg={fbimg}
          message={message}
          occassion={occassion}
          totext={totext}
          fromtext={fromtext}
        />
      )}
    </div>
  );
}

export default LiveAnimatedFramePage;
