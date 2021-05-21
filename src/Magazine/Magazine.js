import React, { useState } from "react";
import "./Magazine.css";
export default function App({ text, name, fbimg, BDate }) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div>
      <div>
        <center>
          <div
            className="magazineMaindiv"
            style={{
              backgroundImage: "url(" + fbimg + ")",
            }}
          >
            <div style={{ textAlign: "right" }}>
              {" "}
              <p className="magazineDate">
                {new Date(BDate).toLocaleDateString("en-US")}
              </p>
            </div>

            <img
              style={{ width: "85%", marginTop: "2%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Time_Magazine_logo.svg/1280px-Time_Magazine_logo.svg.png"
              alt="time"
            />

            <div
              style={{
                marginLeft: "2%",
                marginRight: "2%",
                marginTop: "20%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  float: "left",
                  textAlign: "left",
                  width: "45%",
                  overflow: "hidden",
                }}
              >
                <h1
                  className="magazineText"
                  style={{ borderBottom: "0", paddingBottom: "0" }}
                >
                  THE
                </h1>
                <h1 className="magazineText">{text}</h1>
                <h1 className="magazineName">{name}</h1>
              </div>
              <div style={{ float: "right", textAlign: "right" }}>
                <h1 className="magazineHot">HOT</h1>
                <h1 className="magazineBuzz">BUZZ</h1>
                <img
                  className="magazineBarcode"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png"
                  alt="time"
                />
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
