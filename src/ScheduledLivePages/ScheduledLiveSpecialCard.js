import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpecialCard from "../SpecialCard/SpecialCard";
import firebase from "../firebase";
import Loader from "react-loader-spinner";
import CircleTimer from "./CircleTimer";
import ScheduledLiveNavBar from "../NavBars/ScheduledLiveNavBar";
function ScheduledLiveSpecialCard({ match }) {
  let dispatch = useDispatch();
  const database = firebase.firestore();
  const [fbimg, setfbimg] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");
  const [para, setpara] = useState("");
  const [Livelinks, setLivelinks] = useState("");
  const [loading, setloading] = useState(false);
  const [dataurl, setdataurl] = useState([]);
  const [today, settoday] = useState();

  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")
      .doc(match.params.slug)
      .get();

    const data = snapshot.data();
    setLivelinks(data);
    data.array_data.map((item, index) => {
      if (item.id == "specialcard") {
        settoday(index);
        dispatch({
          type: "ACTIVE_STEP",
          payload: { day: index + 1 },
        });
      }
      dataurl[index] = item.url;
    });
  }
  useEffect(() => {
    getDoc();
    console.log(Livelinks, "liveData");
    console.log(match.params.slug, "slug", match.params.id, "id");
  }, []);
  useEffect(() => {
    setloading(true);
    const todoRef = firebase
      .database()
      .ref("/SpecialCard/" + match.params.id)
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
    <div>
      <ScheduledLiveNavBar slug={match.params.slug} />
      <br />
      <br />
      <br />
      {/* <br /> */}
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-2">
        <div class="row">
          <div class="col-sm-1 "></div>
          <div class="col-sm-10 mb-5">
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
                    <SpecialCard
                      fbimg={fbimg}
                      head2={head2}
                      head1={head1}
                      para={para}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div class="col-sm-1 "></div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledLiveSpecialCard;
