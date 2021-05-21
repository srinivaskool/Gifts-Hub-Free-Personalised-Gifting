import React, { useEffect, useState } from "react";
import "./UserPacksPage.css";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckCircle from "@material-ui/icons/CheckCircle";
import NavBar from "../NavBars/NavBar";
import Footer from "../Footers/Footer";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const options = {
  position: "top-center",
  style: {
    color: "#fff",
    backgroundColor: "#fb6e6e",
  },
};
function UserPacksPage({ history }) {
  const { user } = useSelector((state) => ({ ...state }));
  const database = firebase.firestore();
  const [gifts, setGifts] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      } else {
        await getPrevious(user.uid);
      }
    });
  }, []);
  const getPrevious = async (useruid) => {
    setloading(true);
    await database
      .collection("n-day-pack")
      .doc(useruid)
      .collection("giftshub")
      .orderBy("timestamp", "desc")
      .get()
      .then((response) => {
        const fetchedGifts = [];
        response.forEach((document) => {
          const fetchedMovie = {
            id: document.id,
            ...document.data(),
          };
          fetchedGifts.push(fetchedMovie);
        });
        setGifts(fetchedGifts);
        setloading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleDelete = (id) => {
    setGifts((prevgifts) => {
      return prevgifts.filter((giftitem) => {
        return giftitem.id !== id;
      });
    });
    database
      .collection("n-day-pack")
      .doc(user.uid)
      .collection("giftshub")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted from ndaypack!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
    database
      .collection("Livelinks")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted friom libe!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
    toast.success("Pack deleted succesfully ", options);
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
  });
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - Your Packs Page</title>
        <meta
          name="description"
          content="Create as any many free gifts as you like and never stop surprising your loved ones with our marvellous gifts."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="valentine,greetings,gifts for all,gifs,gifthub,giftshub, personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india, pack, gifting, free, valentines, love, n-day pack, we at gifts, valentines pack, recommended pack, gifts hub"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <NavBar />

      <div className="userspacks py-5">
        <ul className="py-5">
          {gifts.map((gift, index) => (
            <div>
              <div class="container">
                <div class="card">
                  <h5 class="card-header userpackscardheader">
                    {" "}
                    <div class="row">
                      <div class="col-6">{gift.Folder_name}</div>{" "}
                      <div class="col-6">{gift.Bday_date.toLocaleString()}</div>{" "}
                    </div>
                  </h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-3 p-0 ">
                        <div class="container-fluid">
                          <div class="row">
                            <div className="userpackspkname" class="col-12  ">
                              <h4 className="userpackspknametext">
                                {gift.To_name.substring(0, 10)}
                              </h4>
                            </div>
                            <div class="col-6 col-md-12">
                              <div class="col-12">
                                <Link
                                  class="logo"
                                  to={`/scheduledlive/main/${gift.id}`}
                                  target="_blank"
                                >
                                  <h2 id="userpackspreview"> Preview </h2>
                                </Link>
                              </div>
                            </div>

                            <div class="col-6 col-md-12">
                              <div
                                onClick={() => {
                                  handleDelete(gift.id);
                                }}
                                class="col-12"
                              >
                                <h2 id="userpacksdelete">Delete</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-7 p-0 ">
                        {" "}
                        <div class="container-fluid">
                          <div class="row">
                            {gift.array_data.map((c) => (
                              <div
                                style={{
                                  border: "none",
                                }}
                                class="col-6 col-md-4  p-0 m-0 "
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    textAlign: "justify",
                                  }}
                                >
                                  {c.url ? (
                                    <CheckCircle className="userpacksdoneicon" />
                                  ) : (
                                    <img
                                      className="userpackspendingimg"
                                      src={require("../Images/iconcopy.png")}
                                      alt=""
                                    />
                                  )}
                                  <h2 className="userpacksitems">
                                    {" "}
                                    {c.content}
                                  </h2>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2">
                        {" "}
                        <div>
                          <center>
                            <br />
                            <Link to={`/ContinuePack/${gift.id}`}>
                              <button class="main-button userpacksproceed">
                                Proceed
                              </button>
                            </Link>{" "}
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </ul>{" "}
      </div>
      <Footer />
    </div>
  );
}

export default UserPacksPage;
