import React, { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import CircleTimer from "./CircleTimer";
import ScheduledLiveNavBar from "../NavBars/ScheduledLiveNavBar";
export default function ScheduledLiveCalendar({ match }) {
  const database = firebase.firestore();

  let dispatch = useDispatch();
  const [today, settoday] = useState();
  const [fbimg, setfbimg] = useState("");
  const [name, setname] = useState("");
  const [Livelinks, setLivelinks] = useState("");
  const [loading, setloading] = useState(false);
  const [dataurl, setdataurl] = useState([]);
  const [handscol, sethandscol] = useState("");
  async function getDoc() {
    setloading(true);
    const snapshot = await database
      .collection("Livelinks")
      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    setLivelinks(data);
    data.array_data.map((item, index) => {
      if (item.id == "calendar") {
        settoday(index);
        dispatch({
          type: "ACTIVE_STEP",
          payload: { day: index + 1 },
        });
      }
      dataurl[index] = item.url;
    });
  }
  useEffect(async () => {
    await getDoc();
    setloading(false);
  }, []);

  useEffect(() => {
    setloading(true);
    const todoRef = firebase
      .database()
      .ref("/Calendar/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var name = snapshot.val().name;
        setname(name);
        var handscol = snapshot.val().handscol;
        sethandscol(handscol);
        setloading(false);
      });
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference =
      +new Date(Livelinks.Bday_date) -
      +new Date() -
      19800000 -
      86400000 * (dataurl.length - today);
    console.log(difference, "difference");
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div
      style={{
        background:
          "url(https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fegg_shell.jpg?alt=media&token=c32757c0-9119-4740-beb5-ea90c327aec9)",
      }}
    >
      <ScheduledLiveNavBar slug={match.params.slug} />
      <br />
      <br />
      <br />

      <div>
        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <div>
            {new Date(Livelinks.Bday_date) -
              +new Date() -
              19800000 -
              86400000 * (dataurl.length - today - 1) >
            0 ? (
              <div>
                <h5 className="example"> This Gift opens in </h5>
                <CircleTimer
                  Bday={
                    +new Date(Livelinks.Bday_date) -
                    +new Date() -
                    19800000 -
                    86400000 * (dataurl.length - today - 1)
                  }
                />
              </div>
            ) : (
              <div>
                <center>
                  {" "}
                  {dataurl.length - today - 1 == 0 ? (
                    <h1 className="example">The Big day is here !!!</h1>
                  ) : dataurl.length - today - 1 == 1 ? (
                    <h1 className="example">
                      {dataurl.length - today - 1} day to go !!!
                    </h1>
                  ) : (
                    <h1 className="example">
                      {dataurl.length - today - 1} days to go !!!
                    </h1>
                  )}
                </center>
                <div className="row">
                  <div className="col-12">
                    <Calendar fbimg={fbimg} />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
