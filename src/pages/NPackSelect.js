import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import $ from "jquery";
import "./NPackSelect.css";
const allComp = [
  {
    id: "magazine",
    ismailsent: false,
    content: "Magazine",
    url: "",
    img: require("../Images/cardimages/magazine.PNG"),
  },
  {
    id: "challenge",
    ismailsent: false,
    content: "Challenge",
    url: "",
    img: require("../Images/cardimages/challenge.PNG"),
  },
  {
    id: "aboutquiz",
    ismailsent: false,
    content: "About Quiz",
    url: "",
    img: require("../Images/cardimages/aboutquiz.PNG"),
  },
  {
    id: "calendar",
    ismailsent: false,
    content: "Calendar",
    url: "",
    img: require("../Images/cardimages/calender.PNG"),
  },
  {
    id: "threedcarousel",
    ismailsent: false,
    content: "3D Carousel",
    url: "",
    img: require("../Images/cardimages/3dcarousel.PNG"),
  },
  {
    id: "honeycomb",
    ismailsent: false,
    content: "Honey Comb ",
    url: "",
    img: require("../Images/cardimages/honeycomb.PNG"),
  },
  {
    id: "journey",
    ismailsent: false,
    content: "Journey",
    url: "",
    img: require("../Images/cardimages/journey.PNG"),
  },
  {
    id: "swatchbook",
    ismailsent: false,
    content: "Swatch Book",
    url: "",
    img: require("../Images/cardimages/swatchBook.PNG"),
  },
  {
    id: "puzzle",
    ismailsent: false,
    content: "Slide Puzzle",
    url: "",
    img: require("../Images/cardimages/slidepuzzle.PNG"),
  },
  {
    id: "specialcard",
    ismailsent: false,
    content: "Special Card",
    url: "",
    img: require("../Images/cardimages/specialCard.PNG"),
  },
  {
    id: "animatedframe",
    ismailsent: false,
    content: "Animated Frame ",
    url: "",
    img: require("../Images/cardimages/animatedFrames.PNG"),
  },
  {
    id: "threedimage",
    ismailsent: false,
    content: "3D Image",
    url: "",
    img: "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FthreeDsqr.PNG?alt=media&token=89f9386d-931d-4642-a744-761ef2b97f2d",
  },
  {
    id: "greetingcard",
    ismailsent: false,
    content: "Greeting Card",
    url: "",
    img: require("../Images/cardimages/greetingcardviolet.PNG"),
  },
  {
    id: "cubes",
    ismailsent: false,
    content: " 3D Heart",
    url: "",
    img: require("../Images/cardimages/3dheart.PNG"),
  },
  {
    id: "memorygame",
    ismailsent: false,
    content: "Memory Game",
    url: "",
    img: require("../Images/cardimages/memorygame.PNG"),
  },
  {
    id: "collage",
    ismailsent: false,
    content: "Collage",
    url: "",
    img: "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FcollagePNG.PNG?alt=media&token=145fccf1-8bc0-4615-9ebf-8dc87fdfcae0",
  },
  {
    id: "newspaper",
    ismailsent: false,
    content: "NewsPaper",
    url: "",
    img: require("../Images/cardimages/newspaper.PNG"),
  },
];

const selectComp = [];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
$(document).ready(function () {
  $(".card").hover(
    function () {
      $(this).removeClass("shadow-none");
      $(this).addClass("shadow");
    },
    function () {
      $(this).removeClass("shadow");
      $(this).addClass("shadow-none");
    }
  );

  // document ready
});
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  // background: isDragging
  //   ? "linear-gradient(#fdc46f, #f9deb6)"
  //   : "linear-gradient(#fdc46f, #f9deb6)",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getItemStyle1 = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  // background: isDragging
  //   ? "linear-gradient(#fdc46f, #f9deb6)"
  //   : "linear-gradient(#fdc46f, #f9deb6)",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver
    ? "linear-gradient(#fdc46f, #f33f3f)"
    : "linear-gradient(#fdc46f, #f33f3f)",
  padding: grid,
  minHeight: 150,
});
const getListStyle1 = (isDraggingOver) => ({
  background: isDraggingOver
    ? "linear-gradient(#fdc46f,#f33f3f)"
    : "linear-gradient(#fdc46f, #f33f3f)",
  padding: grid,
  minHeight: 150,
});
class N_Pack_Select extends Component {
  state = {
    items: allComp,
    selected: selectComp,
  };

  id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  getList = (id) => this.state[this.id2List[id]];

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
      this.props.setpackfunc(this.state.selected);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
      this.props.setpackfunc(this.state.selected);
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div class="row">
          <div class="col-lg-8   ">
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {" "}
                  <div className="container-fluid">
                    <center>
                      <h3>All Gifts</h3>
                    </center>
                    <div className="row">
                      {this.state.items.map((item, index) => (
                        <div
                          class="col-sm-6 col-md-4 col-lg-3 p-1"
                          // style={{ height: "235px" }}
                        >
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              >
                                <div class="card npackselectcard">
                                  <img
                                    style={{ height: "100%" }}
                                    class="card-img-top npackselectcardimg"
                                    src={item.img}
                                    //src="https://picsum.photos/200/200"
                                    alt={index}
                                  />

                                  <h5 class="card-title npackselectcardtitle">
                                    {" "}
                                    {item.content}
                                  </h5>
                                </div>
                              </div>
                            )}
                          </Draggable>{" "}
                        </div>
                      ))}
                    </div>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div class="col-lg-1  ">Arrow</div>
          <div class="col-lg-3  ">
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle1(snapshot.isDraggingOver)}
                >
                  <center>
                    <h3>Your Pack</h3>
                  </center>
                  {this.state.selected.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle1(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div class="card  shadow-none">
                            <div class="row no-gutters">
                              <div class="col-3 m-auto">
                                <img
                                  style={{ width: "45px" }}
                                  src="https://picsum.photos/100/100"
                                  // src={item.img}
                                  class="card-img"
                                  alt={index}
                                />
                              </div>
                              <div class="col-9">
                                <div
                                  class="card-body px-0"
                                  style={{
                                    padding: "1rem 1.25rem ",
                                  }}
                                >
                                  Day {index} ({item.content})
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    );
  }
}
export default N_Pack_Select;
