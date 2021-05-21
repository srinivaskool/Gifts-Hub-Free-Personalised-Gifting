import React, { useState, useEffect, useRef } from "react";

import "./memory.css";

const useInterval = (callback, delay, duration) => {
  const durationRef = useRef(duration);
  const durationIntervalRef = useRef();

  const handler = () => {
    callback(durationRef);
  };

  useEffect(() => {
    const durationInterval = setInterval(handler, delay);
    durationIntervalRef.current = durationInterval;
    return () => {
      clearInterval(durationInterval);
    };
  }, [delay]);

  return durationIntervalRef;
};

function MemoryGame({ fbimg1, fbimg2, fbimg3, fbimg4, fbimg5, fbimg6 }) {
  const [newGame, setNewGame] = useState(false);
  const [timer, settimer] = useState(0);
  const [isstarted, setisstarted] = useState(false);
  const [list, setList] = useState([
    fbimg1,
    fbimg4,
    fbimg3,
    fbimg4,
    fbimg2,
    fbimg1,
    fbimg3,
    fbimg6,
    fbimg6,
    fbimg5,
    fbimg5,
    fbimg2,
  ]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [duration, setDuration] = useState(0);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setList([
      fbimg1,
      fbimg4,
      fbimg3,
      fbimg4,
      fbimg2,
      fbimg1,
      fbimg3,
      fbimg6,
      fbimg6,
      fbimg5,
      fbimg5,
      fbimg2,
    ]);
  }, [fbimg1, fbimg2, fbimg3, fbimg4, fbimg5, fbimg6]);

  const checkItems = (firstIndex, secondIndex) => {
    if (firstIndex !== secondIndex && list[firstIndex] === list[secondIndex]) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);
    }
  };

  useEffect(() => {
    setList(
      list.sort(() => {
        return 0.5 - Math.random();
      })
    );
  }, [newGame]);

  const durationIntervalRef = useInterval(
    (durationRef) => {
      durationRef.current++;
      setDuration(durationRef.current);
    },
    1000,
    duration
  );

  useEffect(() => {
    if (finishedItems.length > 0 && finishedItems.length === list.length) {
      {
        setWinner(true);
      }

      clearInterval(durationIntervalRef.current);
    }
  }, [finishedItems]);
  useEffect(() => {
    setTimeout(() => {
      settimer(timer + 1);
    }, 1000);
  });
  return (
    <div>
      {/* {timer} */}
      {isstarted ? (
        <div className="text-center p-2 d-flex flex-column">
          {list.length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div>
              <div style={{ padding: "0" }} className="container">
                <div className="row no-gutters">
                  {list.map((item, index) => (
                    <div
                      className={`col-3 memcard ${
                        visibleItems.includes(index) ? "grid-memcard-show" : ""
                      } ${
                        finishedItems.includes(index)
                          ? "grid-memcard-show grid-memcard-finished"
                          : ""
                      }`}
                      key={item.id}
                      onClick={() => {
                        if (!finishedItems.includes(index)) {
                          switch (visibleItems.length) {
                            case 0:
                              setVisibleItems([index]);
                              break;
                            case 1:
                              if (visibleItems[0] !== index) {
                                setVisibleItems(visibleItems.concat(index));
                                checkItems(visibleItems[0], index);
                              }
                              break;
                            case 2:
                              setVisibleItems([index]);
                              break;
                            default:
                              setVisibleItems([]);
                          }
                        }
                      }}
                    >
                      <img
                        className={`img-thumbnail img-fluid grid-img`}
                        src={item}
                        alt={item.description}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {winner && (
                <div>
                  You Win !
                  <br />
                  {/* Finished in {duration} seconds */}
                </div>
              )}
            </div>
          )}
          <br />
          <div style={{ width: "auto" }}>
            <button
              style={{ width: "fit-content" }}
              className="main-button"
              onClick={() => {
                setNewGame(!newGame);
                setVisibleItems([]);
                setFinishedItems([]);
                setWinner(false);
              }}
            >
              New Game
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>{" "}
              <div className="col-lg-8">
                <h6 style={{ color: "#000", textAlign: "justify" }}>
                  Greetings of the day and wish you many more! Welcome to a fun
                  game challenging your wits and hoping to put up a big wide
                  smile on your special day.
                </h6>{" "}
                <br />
                <h5 style={{ color: "#000", textAlign: "justify" }}>
                  Instructions -
                </h5>
                <ol>
                  <li>
                    <p style={{ color: "#000", textAlign: "justify" }}>
                      {" "}
                      There are 6 pictures behind these 12 tiles and finish this
                      game by matching the two tiles of the same picture
                      together
                    </p>
                  </li>
                  <li>
                    <p style={{ color: "#000", textAlign: "justify" }}>
                      At a given time only 2 tiles will be shown, so familiarise
                      yourself with where each picture is and finish the game to
                      beat your own personal best!
                    </p>
                  </li>
                </ol>
                <br />
                <center>
                  <button
                    className="main-button"
                    onClick={() => {
                      setisstarted(true);
                      settimer(0);
                    }}
                  >
                    Start game
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemoryGame;
