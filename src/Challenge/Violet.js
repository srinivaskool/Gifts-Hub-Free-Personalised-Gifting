import React, { useState } from "react";
import "./PuzzlePage.css";

export default function VioletPage() {
  const [gradbground, setgradbground] = useState(
    "radial-gradient(at 300px 300px, rgba(159,0,191,.9) 0, #4D4FA7 70%)"
  );
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/Hr9XBZ4/Untitled-presentation-4.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "1100px",
      }}
    >
      <div
        onMouseMove={(event) => {
          setgradbground(
            "radial-gradient(at " +
              event.clientX +
              "px " +
              event.clientY +
              "px, rgba(159,0,191,.9) 0, #4D4FA7 70%)"
          );
        }}
        style={{ height: "600px", backgroundImage: gradbground }}
        class="gradient"
      ></div>
    </div>
  );
}
