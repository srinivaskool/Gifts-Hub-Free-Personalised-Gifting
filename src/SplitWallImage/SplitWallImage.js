import React from "react";

export default function SplitWallImage({ fbimg }) {
  return (
    <div>
      <section
        style={{
          width: "80%",
          margin: "0 auto",
          lineHeight: "0",
          position: "relative"
        }}
      >
        <img style={{ width: "70%", marginTop: "10%" }} src={fbimg} alt="" />
        <article
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            backgroundColor: "#ffffff",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "20px",
            mixBlendMode: "lighten"
          }}
        >
          <div style={{ background: "black", height: "24vw" }}></div>
          <div
            style={{ background: "black", height: "24vw", gridColumn: "2/4" }}
          ></div>
          <div style={{ background: "black", height: "24vw" }}></div>
          <div style={{ background: "black", height: "24vw" }}></div>
          <div style={{ background: "black", height: "24vw" }}></div>
        </article>
      </section>
    </div>
  );
}
