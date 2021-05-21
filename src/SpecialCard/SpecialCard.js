import React from "react";
import "./SpecialCard.css";
function SpecialCard({ fbimg, head1, para, head2 }) {
  return (
    <div style={{ flex: "0.8", alignItems: "center" }}>
      <div class="container">
        {/* <center>
          <h1 className="specialcardHoverText">Hover the card below !!!</h1>
        </center> */}
        <div class="row">
          <div class="col p-0">
            <div
              style={{
                backgroundImage: "url(" + fbimg + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                margin: "auto",
                overflow: "hidden",
              }}
              class="specialcard"
            >
              <div class="img">
                {" "}
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
              </div>
              <div class="specialcontent">
                <h2 className="specialcardHead1">{head1}</h2>
                <h2 className="specialcardHead2">{head2}</h2>
                <h4 className="specialcardPara">{para}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialCard;
