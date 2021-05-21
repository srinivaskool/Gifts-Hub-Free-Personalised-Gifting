import React from "react";
import "./DummyChallenge.css";
export default function DummyChallenge() {
  return (
    <div>
      <section class="section" id="about2" data-aos="fade-down">
        <div class="container">
          <div class="row">
            <div
              class="right-image col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix-big order-md-12"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fescaperoom.jpg?alt=media&token=cb43afd0-15ab-4dd9-81fa-04c6f2461c38"
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div class="left-text col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix order-md-1">
              <div class="left-heading">
                <h5>Gifts' Hub Challenge</h5>
              </div>
              <p style={{ textAlign: "justify" }}>
                Now gift your loved ones with our free and personalized website,
                scheduling the surprises with only a few clicks! Stay tuned for
                our full website launch on the{" "}
                <strong>1st of February, 2021</strong>
              </p>
              <br />
              <p>
                We will provide you some clues in the form of text, images, or
                videos. Crack the puzzles and enter the answers in the boxes
                beneath, to finish the challenge! It is advisable to play this
                game on a <strong> Bigger Screen </strong> (like a laptop).
                <br /> Have a paper and pen in handy and also mind you, not all
                clues are important!
              </p>
              <br />
            </div>
          </div>
          <br />
        </div>
      </section>
    </div>
  );
}
