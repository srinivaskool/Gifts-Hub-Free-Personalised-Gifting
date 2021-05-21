import React from "react";
import "./SampleGifts.css";
import NavBar from "../NavBars/NavBar";
import Footer from "../Footers/Footer";
import { Helmet } from "react-helmet";
import SpecialCard from "../SpecialCard/SpecialCard";
import Journey from "../Journey/Journey";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import HoneyComb from "../HoneyComb/HoneyComb";
import Cubes from "../Cubes/Cubes";
import VioletGreetingCard from "../VioletGreetingCard/VioletGreetingCard";
import Magazine from "../Magazine/Magazine";
import ThreeDCarousel from "../ThreeDCarousel/ThreeDCarousel";
import AnimatedFrame from "../AnimatedFrames/AnimatedFrame";
const handlepuzzlescore = (e) => {
  console.log("Yoooo");
};
function SampleGifts() {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - Sample Gifts Page</title>
        <meta
          name="description"
          content="Check out all our sample gifts made for you with extreme love and care. Choose the gifts that pulled your heart strings."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="valentine,greetings,gifts for all,gifs,gifthub,giftshub, personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india,"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <NavBar />

      <div class="samplegifts">
        <div class="header-text">
          <div class="container pt-5">
            <center class=" pt-4 pb-2">
              <h1> Sample Gifts</h1>
            </center>
            <div class="row">
              <div
                class="left-text col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <p className="samplegiftspara">
                  Gift-planning can be quite a challenging task given the hectic
                  schedules we all have, currently. So to waste no more time and
                  to bid goodbyes to all the reminders and alarms, we introduce
                  our automatic gift generation feature which keeps a track of
                  the D-day and time, releasing the appropriate gift component
                  on the desired day! Lead a guilt-free life once you choose
                  your suitable package and customize them accordingly, because
                  we at Gift’s Hub promise to deliver blissful content as and
                  when you intend us to!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12  col-lg-6">
            {" "}
            <div class="card shadow-sm">
              <div class=" text-center text-capitalize display-4 halftitle">
                3D Heart
              </div>
              <Cubes
                fbimg1="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=1950&q=80"
                fbimg2="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                fbimg3="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                fbimg4="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                fbimg5="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                fbimg6="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
          </div>
          <div className="col-sm-12  col-lg-6">
            <div class="card shadow-sm">
              {" "}
              <div class=" text-center  display-4 lead halftitle">
                Greeting Card
              </div>
              <div className="my-2">
                <VioletGreetingCard />
              </div>
            </div>
          </div>

          <div className="col-sm-12 my-5">
            <div class="card shadow-sm">
              <div class=" text-center  display-4 lead fulltitle">
                3D Carousel
              </div>
              <div className="mt-2">
                <ThreeDCarousel
                  className="samplethreedcarousel"
                  fbimg1="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  fbimg2="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  fbimg3="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  fbimg4="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  fbimg5="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  fbimg6="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  text="3D Album Carousel"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12  col-lg-6">
            {" "}
            <div class="card shadow-sm">
              <div class=" text-center  display-4 lead halftitle">
                Special Card
              </div>
              <div class="samplespecialcard my-5">
                <SpecialCard
                  fbimg="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fwwoman.jpg?alt=media&token=6c7031d9-6519-45c5-8256-44a52a4c1b20"
                  head2="Toph Beifong"
                  head1="My Best Friend"
                  para=" Thanks for being a great friend You are our special friend . You are my special friend, I have never met a person like you. You have such a great personality. You are just the best"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-lg-6">
            <div class="card shadow-sm">
              <div class=" text-center  display-4 lead halftitle">
                HoneyComb
              </div>
              <HoneyComb
                fbimg1="https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=c022be1f4d96b88d053b6874cd1df8f5&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                fbimg2="https://images.unsplash.com/photo-1487744137800-5282ebdb0ba3?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=65472c9ecf25616e0d5037e98795db37&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                fbimg3="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=8f9d47f8ca4f63a5c7035c2986cfd95e&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                fbimg4="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-0.3.5&amp;s=c20042d58b121e90f8b8de83253de4cb&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                fbimg5="https://images.unsplash.com/photo-1490905461158-067f4895ea9d?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=ec12d476aa884c9ff23d2169cc359a09&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                fbimg6="https://images.unsplash.com/photo-1468818461933-b1d79f62434e?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=8d34ef5dba728dc836a9f60a2034c912&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              />
            </div>
          </div>
          <div className="col-sm-12  my-5">
            {" "}
            <div class="card shadow-sm">
              <div class=" text-center  display-4 lead fulltitle ">Journey</div>
              <div className="samplejourney mt-2">
                <Journey
                  fbimg1="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FmeetingOutline.png?alt=media&token=c3ad518d-fa7d-43b2-ae4d-596334c10dc1"
                  fbimg2="https://cdn3.iconfinder.com/data/icons/other-icons/48/creative_draw-512.png"
                  fbimg3="https://cdn3.iconfinder.com/data/icons/other-icons/48/app_window-512.png"
                  fbimg4="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fheartoutline.png?alt=media&token=136a4faa-4059-474b-8253-7c5b4bac6442"
                  fbimg5="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fpairoutline.png?alt=media&token=e9611c83-dcbd-4a34-9716-85ff7e312a54"
                  fbimg6="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                  t1="We met"
                  t2="We talked"
                  t3="We flirted"
                  t4="We fell in love"
                  t5="The end"
                  heading="Our Journey"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12  col-lg-6">
            <div class=" text-center  display-4 lead halftitle ">Magazine</div>
            <div class="samplemagazine">
              <Magazine
                fbimg="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FMagazine.jpg?alt=media&token=cb5e38c6-9f9d-4a4f-b338-a70a707e6091"
                text="BEST EVER CAPTAIN"
                name="M S Dhoni"
                BDate={Date.now()}
              />
            </div>
          </div>
          <div className="col-sm-12  col-lg-6 ">
            <div class=" text-center  display-4 lead halftitle">
              Slide Puzzle
            </div>
            <div class=" mt-5 ">
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                <SlidePuzzle
                  handlepuzzlescore={handlepuzzlescore}
                  fbimg="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Ftom-and-jerry-hd-background.jpg?alt=media&token=a5fb8323-7899-46d7-8119-16b69e1e2531"
                />{" "}
              </div>
            </div>
          </div>

          <div className="col-sm-12  my-5">
            {" "}
            <div class="card shadow-sm">
              <div class=" text-center  display-4 lead fulltitle">
                Animated Frame{" "}
              </div>
              <div className="mt-2 mb-4">
                <AnimatedFrame
                  fbimg1="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFramesImg1.jpg?alt=media&token=557aba90-f822-42de-b552-8e5299a9f102"
                  fbimg2="https://unsplash.imgix.net/reserve/PPE2xapKRNyy2DlTt89F_Gutman_island.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
                  title="Stop hovering"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SampleGifts;
