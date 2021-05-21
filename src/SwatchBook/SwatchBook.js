import React, { useEffect, useState } from "react";
import "./SwatchBook.css";
import AnalogClock from "./AnalogClock";
export default function TicketDeck({ name, fbimg, handscol }) {
  const [tickets, settickets] = useState([]);
  const [selected_words, setselected_words] = useState([]);
  const [anglesarray, setanglesarray] = useState([]);
  const [chararray, setchararray] = useState(name.split(""));
  const [isopen, setisopen] = useState(false);
  const [today, settoday] = useState(new Date());
  const [words, setwords] = useState([
    ["Active", "Admirable", "Amazing", "Awesome", "Adorable", "Adventurous"],
    ["Beautiful", "Bright", "Bubbly", "Best", "Brilliant"],
    ["Calm", "Charming", "Creative", "Confident", "Comical", "Cool", "Cute"],
    ["Dynamic", "Decent", "Desirable", "Dreamy", "Delight"],
    [
      "Effective",
      "Elegant",
      "Excellent",
      "Enthusiastic",
      "Energetic",
      "Ethical",
      "Enjoyable",
      "Eager",
      "Ecstatic",
      "Efficient",
      "Empowered",
      "Entertaining",
    ],
    ["Flexible", "Fabulous", "Fantastic", "Favourite", "Friendly", "Faithful"],
    ["Generous", "Glorious", "Grateful", "Genuine", "Gorgeous"],
    ["Honest", "Heavenly", "Humorous", "Hilarious", "Happy", "Helpful"],
    [
      "Ideal",
      "Initiative",
      "Innocent",
      "Incredible",
      "Impressive",
      "Interesting",
    ],
    ["Jolly", "Joyful", "Jubilant", "Jovial"],
    ["Kind Hearted ", "Keen"],
    ["Laughing", "Likable", "Lucky", "Loyal", "Lovable", "Lively"],
    ["Magnificent", "Miraculous", "Magnificent", "Marvellous"],
    [
      "Neat",
      "Noble",
      "Nourishing",
      "Nutritive",
      "Noteworthy",
      "Nonaggressive",
      "Nice",
      "Naughty",
    ],

    ["Original", "Outstanding", "Open Minded"],
    ["Perfect", "Ppppp", "pp", "pop"],
    ["Quality", "Quiet"],
    ["Real", "Relaxed", "Reliable", "Refreshing", "Responsible", "Royal"],
    [
      "Sensible",
      "Spectacular",
      "Successful",
      "Simple",
      "Straight forward",
      "Smiling",
      "Supportive",
    ],
    [
      "Thoughtful",
      "Trustworthy",
      "Transparent",
      "Thriving",
      "Thankful",
      "Timely",
    ],
    ["Ultimate", "Unconditional", "Understanding"],
    ["Valuable", "Versatile", "Vibrant"],
    ["Wise", "Wonderful", "Worthy", "Wholehearted"],
    ["xenophobic", "xenodochial", "xenial"],
    ["yeasty", "yokelish", "yucky", "young", "youthful"],
    ["zany", "zealous", "zestful", "zesty", "zippy"],
  ]);
  const [colors, setcolors] = useState([
    "#ea2a29",
    "#f16729",
    "#f89322",
    "#ffcf14",
    "#ffea0d",
    "#87b11d",
    "#008253",
    "#3277b5",
    "#4c549f",
    "#764394",
    "#ca0d86",
  ]);
  var options = {
    day: "numeric",
    month: "long",
  };
  useEffect(() => {
    handleClick();
    console.log("inside useeffect handleclick");
  }, [name]);

  const startClick = () => {
    let rot = -15 * anglesarray.length > -90 ? -15 * anglesarray.length : -90;
    if (isopen) {
      console.log("inside newif");
      for (var i = 0; i < anglesarray.length; i++) {
        const newarray = anglesarray;
        newarray[i] = 0;
        setanglesarray(newarray);
      }

      setisopen(!isopen);
    } else {
      for (var i = 0; i < anglesarray.length; i++) {
        const newarray = anglesarray;
        newarray[i] = rot;
        rot += 15;
        setanglesarray(newarray);
      }

      setisopen(!isopen);
    }
  };
  const hadleitemclick = (index) => {
    const newarray = anglesarray;
    newarray[index] = 0;
    setanglesarray(newarray);
    let rot1 = 15;
    let rot2 = 0;
    for (let i = index + 1; i < anglesarray.length; i++) {
      rot1 += 15;
      const newarray = anglesarray;
      newarray[i] = rot1;
      setanglesarray(newarray);
    }
    for (let j = index - 1; j >= 0; j--) {
      rot2 -= 15;
      const newarray = anglesarray;
      newarray[j] = rot2;
      setanglesarray(newarray);
    }
    const arr = name.split("");
    setchararray(arr);
  };

  const handleClick = () => {
    setisopen(false);
    selected_words.length = 0;
    const arr = name.split("");
    console.log("inside handleclick", arr);
    setanglesarray(new Array(name.length + 1).fill(0));
    setchararray(arr);
    arr.map((item, index) => {
      if (item.charCodeAt(0) > 90 || item.charCodeAt(0) < 65) {
        selected_words.push(today.toLocaleDateString("en-US", options));
        console.log("space ♥");
      } else {
        const n = item.charCodeAt(0) - 65;
        const random = Math.floor(Math.random() * words[n].length);
        const el = words[n].splice(random, 1)[0];
        selected_words.push(el);
      }

      return null;
    });
  };

  const LetterCard = (letter, color, text, angle, index) => {
    return (
      <div
        onClick={() => {
          hadleitemclick(index);
        }}
        className="swatchticket"
        style={{ backgroundColor: color, transform: `rotate(${angle}deg)` }}
      >
        <h3 className="swatchH3">{letter}</h3>{" "}
        <h4 className="swatchH4">{text}</h4>
      </div>
    );
  };

  return (
    <div className="swatchmaindiv">
      <div>
        {chararray.map((item, index) => {
          if (item.charCodeAt(0) > 90 || item.charCodeAt(0) < 65) {
            return LetterCard(
              "❤️",
              colors[index],
              selected_words[index],
              anglesarray[index],
              index
            );
          } else {
            return LetterCard(
              item,
              colors[index],
              selected_words[index],
              anglesarray[index],
              index
            );
          }
        })}
      </div>
      <div
        style={{
          transform: `rotate(${anglesarray[anglesarray.length - 1]}deg)`,
        }}
        id="swatchticket12"
        className="swatchticket"
        onClick={() => {
          startClick();
        }}
      >
        <h4 className="swatchH4">{name}</h4>
        <div className="swatchAnalogClock">
          {" "}
          <AnalogClock fbimg={fbimg} name={name} handscol={handscol} />
        </div>{" "}
        <h6 className="swatchH6">CLICK TO OPEN/CLOSE</h6>
        <h2 className="swatchH2">GIFTS HUB</h2>
        <div className="swatchcircle" />
      </div>
    </div>
  );
}
